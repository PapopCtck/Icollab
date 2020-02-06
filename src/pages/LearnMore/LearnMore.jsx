import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Icon } from 'antd';
import { Parallax } from 'rc-scroll-anim';

import AppLang from '../../AppContext';

import content from './LangLearnMore';

import './StyleLearnMore.css';

// import imgwall1 from '/assets/explore-banner.jpg';


const { Title } = Typography;

export class LearnMore extends Component {
  constructor(props){
    super(props);
    window.scrollTo(0, 0);
  }
  render() {
    const lang = this.context;
    return (
      <div className="learnmore-container">
        <div className="learnmore-header">
          <Title className="bold" level={1}>{content[lang].title}</Title>
          <p className="learnmore-header-description bold">{content[lang].description}</p>
          <Button className="start-project-button" type="primary"><Link to="/learnmore">{content[lang].startProjectBtn}</Link></Button>
        </div>
        <ImageGallerySection lang={lang} />
        <Advertisement lang={lang} />
        <StartProject lang={lang} />
      </div>
    )
  }
}

LearnMore.contextType = AppLang;

export default LearnMore;

export const ImageGallerySection = () => (
  <div className="learnmore-images-container">
    {/* order for img order */}
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [1, 1.5] }}
      style={{ opacity: 0 }}
    >
      <img className="learnmore-image imgwall4" src="/assets/imgwall4.jpg" />
    </Parallax>
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [1, 1.6] }}
      style={{ opacity: 0 }}
    >
      <img className="learnmore-image imgwall7" src="/assets/imgwall7.jpg" />
    </Parallax>
    <Parallax
      animation={{ opacity: 1, playScale: [0.9, 1.2] }}
      style={{ opacity: 0 }}
    >
      <img className="learnmore-image imgwall2" src="/assets/imgwall2.jpg" />
    </Parallax>
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [1, 1.4] }}
      style={{ opacity: 0 }}
    >
      <img className="learnmore-image imgwall3" src="/assets/imgwall3.jpg" />
    </Parallax>
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [1, 1.7] }}
      style={{ opacity: 0 }}
    >
      <img className="learnmore-image imgwall6" src="/assets/imgwall6.jpg" />
    </Parallax>
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [1, 1.8] }}
      style={{ opacity: 0 }}
    >
      <img className="learnmore-image imgwall5" src="/assets/imgwall5.jpg" />
    </Parallax>
    <img className="learnmore-image imgwall1" src="/assets/imgwall1.jpg" />
  </div >
);

export const Advertisement = ({ lang }) => (
  <div className="learnmore-ad">
    <Parallax
      animation={{ scale: 1, playScale: [0.1, 0.5] }}
      style={{ transform: 'scale(0.8)' }}
    >
      <div className="learnmore-ad-title">
        <span className="bold" style={{ color: 'white' }}>{content[lang].title + ' '}</span>
        <span className="bold">{content[lang].adTitle}</span>
      </div>
      <p className="bold">{content[lang].adDescription}</p>
      <div>
        <span className="learnmore-ad-text"><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /><span className="learnmore-ad-innertext">{content[lang].ad1}</span></span>
        <span className="learnmore-ad-text"><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /><span className="learnmore-ad-innertext">{content[lang].ad2}</span></span>
        <span className="learnmore-ad-text"><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /><span className="learnmore-ad-innertext">{content[lang].ad3}</span></span>
      </div>
    </Parallax>
  </div >
);

export const StartProject = ({ lang }) => (
  <div className="learnmore-startProject">
    <Title className="bold" level={2}>{content[lang].idea}</Title>
    <Button className="gradient-button" type="primary"><Link to="/learnmore">{content[lang].startProjectBtn}</Link></Button>
  </div>
);


