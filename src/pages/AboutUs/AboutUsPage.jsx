import React from 'react';
import Banner from '../../components/Banner/Banner';
import Button from '../../components/Button/Button';
import ColorCard from '../../components/ColorCard/ColorCard';
import TeamCard from '../../components/TeamCard/TeamCard';

import {
  StyledColorSection,
  StyledFeatures,
  StyledHeader,
  StyledSteps,
  StyledTeam,
} from './AboutUsPage.style';

const AboutUsPage = () => {
  return (
    <>
      <StyledHeader>
        <div className="headerImage">
          <img src={require('./images/aboutus1.png')} alt="" />
        </div>
        <div className="headerRight">
          <h1>About us</h1>
          <p>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw Through True Rich Attended does{' '}
          </p>
          <Button text="Book a service" theme="primary" />
        </div>
      </StyledHeader>
      <StyledSteps>
        <div className="stepsLeft">
          <h3>
            We Provide Expert Service and aim to have a long term with you
          </h3>
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter
          </p>
          <div className="steps">
            <div className="step">
              <div className="circleLine">
                <img src={require('./icons/Circle3.png')} alt="" />
                <img src={require('./icons/Line.png')} alt="" />
              </div>
              <div className="stepText">
                <p className="title">Get a Quote</p>
                <p className="titleContent">
                  Through True Rich Attended does no end it his mother since
                  real had half every{' '}
                </p>
              </div>
            </div>
            <div className="step">
              <div className="circleLine">
                <img src={require('./icons/Circle3.png')} alt="" />
                <img src={require('./icons/Line.png')} alt="" />
              </div>
              <div className="stepText">
                <p className="title">Book an Appointment</p>
                <p className="titleContent">
                  Through True Rich Attended does no end it his mother since
                  real{' '}
                </p>
              </div>
            </div>
            <div className="step">
              <img src={require('./icons/Circle3.png')} alt="" />
              <div className="stepText">
                <p className="title">Get your Service Done</p>
                <p className="titleContent">
                  Ecstatic unsatiable saw his giving Remain expense you position
                  concluded.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="stepsRight">
          <img src={require('./images/aboutus2.png')} alt="steps" />
        </div>
      </StyledSteps>
      <StyledColorSection>
        <ColorCard
          color="first"
          title={'Serve our customers and always deliver the customer service'}
          content={
            'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes '
          }
        />
        <ColorCard
          color="second"
          title={
            'To be the world’s most eader in automotive business solutions.'
          }
          content={
            'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes '
          }
        />
        <ColorCard
          color="third"
          title={
            'We value the service we provide and our loyal returning customers '
          }
          content={
            'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes '
          }
        />
      </StyledColorSection>
      <StyledFeatures>
        <h2>Services we provide to our valued customers</h2>
        <div className="featuresBlock">
          <div className="featureCard">
            <img src={require('./icons/service.png')} alt="" />
            <p className="title">Convenient Service</p>
            <p className="content">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
          <div className="featureCard">
            <img src={require('./icons/mechanic.png')} alt="" />
            <p className="title">Expert Mechanics</p>
            <p className="content">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
          <div className="featureCard">
            <img src={require('./icons/pricing.png')} alt="" />
            <p className="title">Transparent Pricing</p>
            <p className="content">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
        </div>
        <div className="numbers">
          <div className="numberBox">
            <h2>20+</h2>
            <p className="title2">Proffesionals</p>
          </div>
          <div className="numberBox">
            <h2>10+</h2>
            <p className="title2">Years Experience</p>
          </div>
          <div className="numberBox">
            <h2>12k+</h2>
            <p className="title2">Services Closed</p>
          </div>
          <div className="numberBox">
            <h2>100%</h2>
            <p className="title2">Customer Satisfaction</p>
          </div>
        </div>
      </StyledFeatures>
      <StyledTeam>
        <h1>Meet our Team</h1>
        <div className="cardWrapper">
          <TeamCard
            imageUrl={
              'https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80'
            }
            name={'Javena Melo'}
            position={'Founder, Director'}
          />
          <TeamCard
            imageUrl={
              'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            }
            name={'Javena Melo'}
            position={'Founder, Director'}
          />
          <TeamCard
            imageUrl={
              'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            }
            name={'Javena Melo'}
            position={'Founder, Director'}
          />
          <TeamCard
            imageUrl={
              'https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            name={'Javena Melo'}
            position={'Founder, Director'}
          />
          <TeamCard
            imageUrl={
              'https://images.unsplash.com/photo-1571844306146-6f7451d80824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
            }
            name={'Javena Melo'}
            position={'Founder, Director'}
          />
          <TeamCard
            imageUrl={
              'https://images.unsplash.com/photo-1618085221129-cb9f9ac1e651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            name={'Javena Melo'}
            position={'Founder, Director'}
          />
        </div>
      </StyledTeam>
      <Banner />
    </>
  );
};

export default AboutUsPage;
