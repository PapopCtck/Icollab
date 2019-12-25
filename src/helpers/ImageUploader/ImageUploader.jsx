import React, { useState } from 'react';
import { Upload, Icon, message, Spin } from 'antd';
import PropTypes from 'prop-types';

const { Dragger } = Upload;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function onChange(info, setLoading, callback) {
  if (info.file.status === 'uploading') {
    console.log(info.file, info.fileList);
    setLoading(true)
    return;
  }
  if (info.file.status === 'done') {
    setLoading(false)
    getBase64(info.file.originFileObj, imageUrl =>
      callback(imageUrl),
    );
  } else if (info.file.status === 'error') {
    setLoading(false)
    message.error(`${info.file.name} file upload failed.`);
  }
}


function beforeUpload(file, setImage) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt6M = file.size / 1024 / 1024 < 6;
  if (!isLt6M) {
    message.error('Image must smaller than 6MB!');
  }
  if (isJpgOrPng && isLt6M) {
    setImage(file)
  }
  return isJpgOrPng && isLt6M;
}


const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',//TODO change this to our backend url
  showUploadList: false,

};

export const ImageUploader = ({ onImageUpload, imageUrl, setImage }) => {
  const [loading, setLoading] = useState(false);
  const antIcon = <Icon type="loading" style={{ fontSize: 60 }} spin />;
  return (
    <Dragger {...props} onChange={(info) => onChange(info, setLoading, onImageUpload)} beforeUpload={(file) => beforeUpload(file, setImage)}>
      {
        imageUrl ? <img alt="preview" src={imageUrl ? imageUrl : ''} /> : loading ? <Spin indicator={antIcon} /> :
          <div>
            <p className="ant-upload-drag-icon">
              <Icon type="picture" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </div>
      }
    </Dragger>
  )
};

ImageUploader.propTypes = {
  onImageUpload: PropTypes.func, 
  imageUrl: PropTypes.string, 
  setImage: PropTypes.func,
}
