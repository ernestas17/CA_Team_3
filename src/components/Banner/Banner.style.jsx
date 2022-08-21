import styled from 'styled-components';

export const StyledBanner = styled.div`
  height: 500px;
  display: flex;
  position: relative;

  > img {
    width: 100%;
  }

  > div {
    height: 100%;
    width: 44%;
    padding: 3em;
    background-color: var(--orange);
    position: absolute;
    left: 305px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h3 {
      font-size: var(--HeadingH3);
      color: var(--white);
      line-height: 67px;
      margin-bottom: 1em;
    }
    > button {
      align-self: flex-start;
      line-height: 31px;
    }
  }

  @media (max-width: 976px) {
    > div {
      > h3 {
        font-size: var(--HeadingH4);
        line-height: 55px;
      }
    }
  }
  @media (max-width: 800px) {
    > div {
      > h3 {
        font-size: var(--HeadingH5);
        line-height: 45px;
      }
    }
  }
  @media (max-width: 700px) {
    height: 400px;
    > div {
      > h3 {
        font-size: var(--HeadingH6);
        line-height: 35px;
      }
    }
  }
`;
