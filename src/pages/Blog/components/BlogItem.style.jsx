import styled from 'styled-components';

export const StyledBlogItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 4em;
  > .imageWrapper {
    width: 100%;
    height: 60%;
    margin-bottom: 0.8em;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  > .posted {
    font-size: var(--paragraph2-text-size);
    font-size: 16px;
    line-height: 28px;
    color: #939191;
  }
  > .title1 {
    font-size: var(--title1);
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 0.5em;
  }
  > .body2 {
    font-size: var(--paragraph2-text-size);
    font-size: 16px;
    line-height: 28px;
    color: #232536;
  }

  @media (max-width: 1024px) {
    width: 45%;
    padding: 1em;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;
