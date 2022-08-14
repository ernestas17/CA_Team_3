import styled from 'styled-components';

export const StyledHeader = styled.header`
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

export const StyledServices = styled.section`
  width: 100%;
  height: 1000px;
  background-color: #f5f5f5;
  padding: 5em;
`;

export const StyledServicesWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  justify-content: space-between;

  > .serviceLeft {
    width: 50%;

    padding: 2em;
    background-color: var(--white);
    > .serviceLeftImageWrapper {
      width: 100%;
      > img {
        width: 100%;
        height: 100%;
        margin-bottom: 1em;
      }
    }

    > h3 {
      font-size: var(--HeadingH3);
      margin-bottom: 0.5em;
    }
    > p {
      font-size: var(--title2);
      line-height: 36px;
      opacity: 0.6;
      margin-bottom: 1em;
    }

    > .linkDetails {
      display: flex;
      gap: 10px;
      &:hover {
        cursor: pointer;
      }
      > p {
        font-size: var(--paragraph1-text-size);
      }
    }
  }

  > .serviceRight {
    /* padding: 2em; */
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    gap: 1em;
  }
`;

export const StyledHowSection1 = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 6em 0;

  display: flex;
  justify-content: space-between;

  > .howLeft {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 50%;

    > h3 {
      font-size: var(--HeadingH3);
      line-height: 67px;
      margin-bottom: 0.5em;
    }
    > .howBox {
      display: flex;
      align-items: center;
      width: 90%;
      gap: 1em;
      margin-bottom: 1.5em;

      > img {
        width: 40px;
        align-self: flex-start;
      }

      > p {
        font-size: var(--title2);
        line-height: 36px;
      }
    }
  }

  > .howRight {
    display: flex;
    gap: 1em;

    > .howRightImageWrapper {
      width: 50%;
      height: 100%;

      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const StyledHowSection2 = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 6em 0;

  display: flex;
  justify-content: space-between;
  gap: 2em;

  > .howLeft {
    display: flex;
    gap: 1em;

    > .howRightImageWrapper {
      width: 50%;
      height: 100%;

      > img {
        width: 100%;
        height: 100%;
      }
    }
  }

  > .howRight {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 50%;

    > h3 {
      font-size: var(--HeadingH3);
      line-height: 67px;
      margin-bottom: 0.5em;
    }

    > p {
      font-size: var(--paragraph1-text-size);
      opacity: 0.6;
      line-height: 36px;
      margin-bottom: 1em;
    }

    > button {
      width: 40%;
    }
  }
`;
