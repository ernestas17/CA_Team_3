import styled from 'styled-components';

export const StyledColorCard = styled.div`
  height: 100%;
  width: calc(100% / 3);
  padding: 3em;
  background-color: ${(props) => {
    if (props.color === 'first') {
      return 'var(--orange)';
    } else if (props.color === 'second') {
      return 'var(--black)';
    } else if (props.color === 'third') {
      return 'var(--purple)';
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: var(--HeadingH4);
    color: var(--white);
    line-height: 36px;
    margin-bottom: 1em;
  }

  p {
    font-size: var(--title2);
    color: var(--white);
    opacity: 0.7;
    line-height: 36px;
  }
`;
