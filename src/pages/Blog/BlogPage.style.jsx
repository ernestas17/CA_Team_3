import styled from 'styled-components';

export const StyledBlogHeader = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  position: relative;

  > .headerLeft {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    position: relative;
    background-image: url(${require('./images/image1.png')});

    > .darkOpacity {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: black;
      opacity: 0.5;
    }

    > h1 {
      color: var(--white);
      font-size: var(--HeadingH1);
      z-index: 999;
    }
  }

  > .headerRight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    padding: 2em;
    width: 60%;

    background-color: var(--black);

    > .trending {
      color: var(--orange);
      letter-spacing: 0.24em;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }

    > h4 {
      font-size: var(--HeadingH4);
      color: var(--white);
      font-weight: 700;
      font-size: 40px;
      line-height: 56px;
      letter-spacing: -0.03em;
    }

    > .body1 {
      font-size: var(--paragraph1-text-size);
      color: var(--white);
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
      margin-bottom: 1em;
    }

    > .readMore {
      button {
        margin-right: 1.5em;
      }
      > span {
        color: var(--white);
      }
    }
  }
  @media (max-width: 1024px) {
    > .headerLeft {
      > h1 {
        font-size: var(--HeadingH2);
      }
    }
    > .headerRight {
      > h4 {
        font-size: var(--HeadingH5);
        line-height: 45px;
      }
      > .body1 {
        font-size: var(--paragraph2-text-size);
      }
    }
  }

  @media (max-width: 860px) {
    > .headerRight {
      > .readMore {
        display: flex;
        flex-direction: column;
        gap: 1em;
        > button {
          width: 250px;
        }
      }
    }
  }
`;
export const StyledBlogFourSectionWrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  padding: 3em;
`;
export const StyledBlogFourSection = styled.section`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  gap: 2em;

  > .blogFourLeft {
    width: 50%;
    padding: 2em;
    background-color: var(--white);
    > .blogFourLeft_imageContainer {
      width: 100%;
      margin-bottom: 1em;
      > img {
        width: 100%;
      }
    }
    > .body2 {
      font-size: var(--paragraph1-text-size);
      opacity: 0.8;
      margin: 1em 0;
    }
    > h4 {
      font-size: var(--HeadingH4);
    }
    > .link {
      display: flex;
      align-items: center;
      gap: 1em;
    }
  }

  > .blogFourRight {
    width: 60%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    > .blogFourRight_box {
      display: flex;
      align-items: center;

      gap: 1em;

      > .boxImageContainer {
        width: 40%;

        > img {
          width: 100%;
        }
      }

      > .boxTextContainer {
        > .title1 {
          font-size: var(--title1);
          line-height: 48px;
        }
        > .body2 {
          font-size: var(--paragraph2-text-size);
          line-height: 28px;
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    > .blogFourLeft {
      width: 100%;
    }
    > .blogFourRight {
      width: 100%;
      > .blogFourRight_box {
        > .boxImageContainer {
          width: 40%;
        }
      }
    }
  }
`;

export const StyledBlogFullSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 100%;
  margin: 5em auto;
  gap: 2em;
`;
