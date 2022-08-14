import styled from 'styled-components';

export const StyledServiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 45%;
  height: 32%;
  background-color: ${(props) =>
    props.color === 'primary' ? 'var(--orange)' : 'var(--white)'};

  > p {
    color: ${(props) =>
      props.color === 'primary' ? 'var(--white)' : 'var(--black)'};
    font-size: var(--title2);
    text-align: center;
  }

  > img {
    height: 50px;
    width: 50px;
  }

  &:hover {
    cursor: pointer;
  }
`;
