import React, { useState } from 'react';
import { Upload, Icon, message, Spin } from 'antd';
import PropTypes from 'prop-types';

import { getCookie } from '../../helpers';

import './StyleImageUploader.css';

const { Dragger } = Upload;

const host = process.env.REACT_APP_ICOLLAB_BACKEND;

function onChange(info, setLoading, handleChange, imgUrl) {
  if (info.file.status === 'uploading') {
    setLoading(true)
    return;
  }
  if (info.file.status === 'done') {
    setLoading(false)
    handleChange(imgUrl, 'imageUrl');
  } else if (info.file.status === 'error') {
    setLoading(false)
    message.error(`${info.file.name} file upload failed.`);
  }
}


async function beforeUpload(file, handleChange, setUpload, setUrl, limitSizeMB) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
    return false;
  }
  const isLt6M = file.size / 1024 / 1024 < limitSizeMB;
  if (!isLt6M) {
    message.error('Image must smaller than 6MB!');
    return false;
  }
  if (isJpgOrPng && isLt6M) {
    handleChange(file, 'image')
    const res = await fetch(`${host}/sign_s3`, {
      method: 'POST',
      body: JSON.stringify({ fileName: file.uid, fileType: file.type }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': getCookie('icollab_token'),
      }),
    });
    const data = await res.json();
    if (res.status === 200) {
      setUpload(data.data.returnData.signedRequest);
      setUrl(data.data.returnData.url);
    }
    return isJpgOrPng && isLt6M && data;
  }
}


const props = {
  name: 'file',
  multiple: false,
  showUploadList: false,
};

export const ImageUploader = ({ handleChange, imageUrl }) => {
  const [loading, setLoading] = useState(false);
  const [uploadUrl, setUpload] = useState();
  const [imgUrl, setUrl] = useState();
  const antIcon = <Icon type="loading" style={{ fontSize: 60 }} spin />;
  return (
    <Dragger {...props} customRequest={({ onProgress, onSuccess, onError, file, headers }) => {
      onProgress();
      fetch(uploadUrl, {
        method: 'PUT',
        headers,
        body: file,
      }
      ).then(res => res.status === 200 ? onSuccess() : onError())
    }} method="put" onChange={(info) => onChange(info, setLoading, handleChange, imgUrl)} beforeUpload={(file) => beforeUpload(file, handleChange, setUpload, setUrl, 6)}>
      {
        imageUrl ? <img style={{ width: '100%' }} alt="preview" src={imageUrl ? imageUrl : ''} /> : loading ? <Spin indicator={antIcon} /> :
          <div>
            <p className="ant-upload-drag-icon">
              <Icon type="picture" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </div>
      }
    </Dragger >
  )
};

ImageUploader.propTypes = {
  onImageUpload: PropTypes.func,
  imageUrl: PropTypes.string,
  setImage: PropTypes.func,
  handleChange: PropTypes.func,
}

export const AvatarUploader = ({ handleChange, imageUrl }) => {
  const [loading, setLoading] = useState(false);
  const [uploadUrl, setUpload] = useState();
  const [imgUrl, setUrl] = useState();
  const antIcon = <Icon type="loading" style={{ fontSize: 60 }} spin />;
  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <Upload
      {...props}
      className="avatar-uploader"
      listType="picture-card"
      onChange={(info) => onChange(info, setLoading, handleChange, imgUrl)}
      beforeUpload={(file) => beforeUpload(file, handleChange, setUpload, setUrl, 2)}
      customRequest={({ onProgress, onSuccess, onError, file, headers }) => {
        onProgress();
        fetch(uploadUrl, {
          method: 'PUT',
          headers,
          body: file,
        }
        ).then(res => res.status === 200 ? onSuccess() : onError())
      }}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : loading ? <Spin indicator={antIcon} /> : uploadButton}
    </Upload>
  );
}

AvatarUploader.propTypes = {
  handleChange: PropTypes.func, 
  imageUrl: PropTypes.string,
}
