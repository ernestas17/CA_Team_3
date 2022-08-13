import styled from 'styled-components';

export const StyledTeamCard = styled.div`
  width: calc(100% / 3.1);
  aspect-ratio: 1 / 1.2;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  > img {
    width: 100%;
    height: 100%;
  }
  .textDiv {
    > .title1 {
      font-size: var(--title2);
      color: var(--white);
      line-height: 36px;
    }
    > .body2 {
      font-size: var(--paragraph2-text-size);
      color: var(--white);
      line-height: 28px;
      opacity: 0.7;
    }
    background-color: black;
    color: var(--white);
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 0.7em;
  }
`;
