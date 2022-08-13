import React from 'react';
import Button from '../Button/Button';
import { StyledBanner } from './Banner.style';

const Banner = () => {
  return (
    <StyledBanner>
      <img src={require('./images/image1.png')} alt="" />
      <div>
        <h3>Get in touch with us for your service related query</h3>
        <Button theme={'secondary'} text={'Contact Us'} />
      </div>
      <img src={require('./images/image2.png')} alt="" />
    </StyledBanner>
  );
};

export default Banner;
