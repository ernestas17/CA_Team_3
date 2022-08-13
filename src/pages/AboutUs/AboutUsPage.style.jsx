import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 550px;
  max-width: 1280px;
  margin: 4em auto 7em;
  display: flex;
  position: relative;

  .headerImage {
    position: absolute;
    z-index: 1;
    width: 818px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .headerRight {
    width: 733px;
    height: 100%;
    padding: 4em;

    position: absolute;
    right: 0;
    z-index: 2;

    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;

    h1 {
      color: var(--white);
      font-size: var(--HeadingH1);
      align-self: flex-start;
    }

    p {
      line-height: 31.5px;
      color: var(--white);
    }

    button {
      align-self: flex-start;
    }
  }
`;

export const StyledSteps = styled.div`
  display: flex;
  gap: 87px;
  max-width: 1280px;
  margin: 4em auto 6em;

  .stepsLeft {
    > h3 {
      font-size: var(--HeadingH3);
      line-height: 67px;
      margin-bottom: 0.5em;
    }
    > p {
      font-size: var(--title2);
      line-height: 36px;
      opacity: 0.6;
    }

    .steps {
      display: flex;
      flex-direction: column;
      margin-top: 2em;

      .step {
        display: flex;
        margin: 0.2em 0;

        img {
          object-fit: contain;
          margin-right: 1em;
        }

        > img {
          align-self: flex-start;
        }

        .circleLine {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .title {
          font-size: var(--title1);
          margin-top: 10px;
          line-height: 48px;
        }
        .titleContent {
          font-size: var(--paragraph1-text-size);
          line-height: 31px;
          opacity: 0.6;
        }
      }
    }
  }
`;

export const StyledColorSection = styled.div`
  height: 630px;
  display: flex;
`;

export const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: #f8f8f8;
  padding: 3em 0 5em;

  > h2 {
    font-size: var(--HeadingH2);
    text-align: center;
    width: 70%;
    margin: 1em auto;
  }

  .featuresBlock {
    max-width: 1280px;
    height: 424px;
    margin: 0 auto;
    display: flex;
  }

  .featureCard {
    padding: 2em;
    display: flex;
    gap: 1em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ebebeb;
    box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);

    > .title {
      font-size: var(--title1);
    }
    > .content {
      font-size: var(--paragraph1-text-size);
      opacity: 0.6;
      text-align: center;
    }
  }

  .numbers {
    max-width: 1280px;
    width: 100%;
    margin: 1em auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .numberBox {
      > h2 {
        font-size: var(--HeadingH2);
        color: var(--purple);
        line-height: 76px;
      }
      > .title2 {
        font-size: var(--title2);
        line-height: 36px;
        opacity: 0.7;
      }
    }
  }
`;

export const StyledTeam = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  > h1 {
    padding: 0.9em 0;
    font-size: var(--HeadingH1);
    text-align: center;
  }

  .cardWrapper {
    width: 100%;
    display: flex;
    gap: 0.5em;

    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 6em;
  }
`;
