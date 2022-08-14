import { toBeRequired } from '@testing-library/jest-dom/dist/matchers.js';
import React from 'react';
import Button from '../../components/Button/Button.jsx';
import ServiceBox from '../../components/ServiceBox/ServiceBox.jsx';
import {
  StyledHeader,
  StyledHowSection1,
  StyledHowSection2,
  StyledServices,
  StyledServicesWrapper,
} from './ServicesPage.style';

const ServicesPage = () => {
  return (
    <>
      <StyledHeader>
        <div className="headerImage">
          <img src={require('./images/image1.png')} alt="" />
        </div>
        <div className="headerRight">
          <h1>Our services</h1>
          <p>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw Through True Rich Attended does{' '}
          </p>
          <Button text="Book a service" theme="primary" />
        </div>
      </StyledHeader>
      <StyledServices>
        <StyledServicesWrapper>
          <div className="serviceLeft">
            <div className="serviceLeftImageWrapper">
              <img src={require('./images/image2.png')} alt="" />
            </div>
            <h3>Auto Diagnostics</h3>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic. Through True Rich Attended does no end it his mother.{' '}
            </p>
            <div className="linkDetails">
              <p>See service details</p>
              <img src={require('./images/Arrow.png')} alt="" />
            </div>
          </div>
          <div className="serviceRight">
            <ServiceBox color={'primary'} text={'Auto Dignostics'}>
              <div className="serviceBoxImage">
                <img src={require('./images/icon1.png')} alt="" />
              </div>
            </ServiceBox>
            <ServiceBox text={'Engine Repair'}>
              <div className="serviceBoxImage">
                <img src={require('./images/icon2.png')} alt="" />
              </div>
            </ServiceBox>
            <ServiceBox text={'Body Work'}>
              <div className="serviceBoxImage">
                <img src={require('./images/icon3.png')} alt="" />
              </div>
            </ServiceBox>
            <ServiceBox text={'Batteries'}>
              <div className="serviceBoxImage">
                <img src={require('./images/icon4.png')} alt="" />
              </div>
            </ServiceBox>
            <ServiceBox text={'Car wash'}>
              <div className="serviceBoxImage">
                <img src={require('./images/icon5.png')} alt="" />
              </div>
            </ServiceBox>
            <ServiceBox text={'AC Repair'}>
              <div className="serviceBoxImage">
                <img src={require('./images/icon2.png')} alt="" />
              </div>
            </ServiceBox>
          </div>
        </StyledServicesWrapper>
      </StyledServices>
      <StyledHowSection1>
        <div className="howLeft">
          <h3>How we work and the process we follow</h3>
          <div className="howBox">
            <img src={require('./images/Checkmark.png')} alt="" />
            <p>Through True Rich Attended does no end it his mother since</p>
          </div>
          <div className="howBox">
            <img src={require('./images/Checkmark.png')} alt="" />
            <p>Through True Rich Attended does no end it his mother since</p>
          </div>
          <div className="howBox">
            <img src={require('./images/Checkmark.png')} alt="" />
            <p>Through True Rich Attended does no end it his mother since</p>
          </div>
        </div>
        <div className="howRight">
          <div className="howRightImageWrapper">
            <img src={require('./images/how1.png')} alt="" />
          </div>
          <div className="howRightImageWrapper">
            <img src={require('./images/how2.png')} alt="" />
          </div>
        </div>
      </StyledHowSection1>

      <StyledHowSection2>
        <div className="howLeft">
          <div className="howRightImageWrapper">
            <img src={require('./images/how3.png')} alt="" />
          </div>
          <div className="howRightImageWrapper">
            <img src={require('./images/how4.png')} alt="" />
          </div>
        </div>
        <div className="howRight">
          <h3>Diagnose Car Problems If You Don’t Know Much About Cars</h3>
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs
          </p>
          <Button theme={'primary'} text={'Book a service'} />
        </div>
      </StyledHowSection2>
    </>
  );
};

export default ServicesPage;
