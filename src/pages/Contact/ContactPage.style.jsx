import styled from 'styled-components';

export const StyledContactPage = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3em 0;
  position: relative;
  padding-bottom: 22em;

  > h1 {
    font-size: var(--HeadingH1);
    width: 40%;
    margin-bottom: 0.7em;
  }

  > .form-address {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6em;

    > form {
      width: 40%;
      display: flex;
      flex-direction: column;

      > input,
      select {
        padding: 1.5em 2em;
        border: none;
        border-radius: 5px;
        background-color: #f2f2f2;
        margin-bottom: 5px;
        font-size: var(--paragraph2-text-size);
        color: var(--black);
        font-weight: 600;

        ::placeholder {
          color: var(--black);
          font-weight: 600;
        }

        option[disabled] {
          display: none;
        }
      }

      > button {
        margin-top: 1.5em;
        width: 40%;
      }
    }

    > .address {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2em;

      .body2 {
        font-size: var(--paragraph2-text-size);
        line-height: 28px;
        font-weight: 600;
        color: var(--black);
        opacity: 0.7;
      }
      .title2 {
        font-size: var(--title2);
      }
    }
  }
  > img {
    position: absolute;
    bottom: -100;
  }
`;

export const StyledFooterImage = styled.img`
  width: 100%;
  height: 450px;
  margin-bottom: -4px;
`;
