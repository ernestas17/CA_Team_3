import React from 'react';
import {
  StyledBlogFourSection,
  StyledBlogFourSectionWrapper,
  StyledBlogFullSection,
  StyledBlogHeader,
} from './BlogPage.style';
import Banner from '../../components/Banner/Banner';
import Button from '../../components/Button/Button';
import BlogItem from './components/BlogItem';

const BlogPage = () => {
  return (
    <>
      <StyledBlogHeader>
        <div className="headerLeft">
          {/* <img src={require('./images/image1.png')} alt="" /> */}
          <div className="darkOpacity"></div>
          <h1>Our Blog</h1>
        </div>
        <div className="headerRight">
          <p className="trending">TRENDING</p>
          <h4>Diagnose Car Problems If You Don't Know Much About Cars</h4>
          <p className="body1">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </p>
          <div className="readMore">
            <Button text={'Read more'} />
            <span>Posted on October 6th 2021</span>
          </div>
        </div>
      </StyledBlogHeader>
      <StyledBlogFourSectionWrapper>
        <StyledBlogFourSection>
          <div className="blogFourLeft">
            <div className="blogFourLeft_imageContainer">
              <img src={require('./images/blogFourLeft.png')} alt="" />
            </div>
            <p className="body2">Posted on October 6th 2021</p>
            <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
            <p className="body2">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
            <div className="link">
              <a href="#">Read more</a>
              <img src={require('./images/arrow.png')} alt="" />
            </div>
          </div>
          <div className="blogFourRight">
            <div className="blogFourRight_box">
              <div className="boxImageContainer">
                <img src={require('./images/blogFourRight1.png')} alt="" />
              </div>
              <div className="boxTextContainer">
                <p className="title1">
                  Get an Awesome Number Plate for Your New Car
                </p>
                <p className="body2">Posted on October 6th 2021</p>
              </div>
            </div>
            <div className="blogFourRight_box">
              <div className="boxImageContainer">
                <img src={require('./images/blogFourRight2.png')} alt="" />
              </div>
              <div className="boxTextContainer">
                <p className="title1">
                  Would you Let a Robot Drive your Car? Our AI Future
                </p>
                <p className="body2">Posted on October 6th 2021</p>
              </div>
            </div>
            <div className="blogFourRight_box">
              <div className="boxImageContainer">
                <img src={require('./images/blogFourRight3.png')} alt="" />
              </div>
              <div className="boxTextContainer">
                <p className="title1">
                  Will Electric Technology Soon Rule The Road?
                </p>
                <p className="body2">Posted on October 6th 2021</p>
              </div>
            </div>
          </div>
        </StyledBlogFourSection>
      </StyledBlogFourSectionWrapper>
      <StyledBlogFullSection>
        <BlogItem
          image={'blogitem1.png'}
          posted="Posted on October 6th 2021"
          title="5 Genius Car Accessories You Should Never Drive Without"
          content="We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        />
        <BlogItem
          image={'blogitem2.png'}
          posted="Posted on October 6th 2021"
          title="5 Genius Car Accessories You Should Never Drive Without"
          content="We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        />
        <BlogItem
          image={'blogitem3.png'}
          posted="Posted on October 6th 2021"
          title="We provide blow straight past it with the wheels skidding"
          content="We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        />
        <BlogItem
          image={'blogitem4.png'}
          posted="Posted on October 6th 2021"
          title="We provide blow straight past it with the wheels skidding"
          content="We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        />
        <BlogItem
          image={'blogitem5.png'}
          posted="Posted on October 6th 2021"
          title="5 Genius Car Accessories You Should Never Drive Without"
          content="We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        />
        <BlogItem
          image={'blogitem6.png'}
          posted="Posted on October 6th 2021"
          title="5 Genius Car Accessories You Should Never Drive Without"
          content="We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        />
      </StyledBlogFullSection>
      <Banner />
    </>
  );
};

export default BlogPage;
