import styled from "styled-components";
import "../../utilities/variables.css";

export const Container = styled.div`
  width: 896px;
  padding: 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const QuestionContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const P = styled.p`
  font-size: var(--title2);
  width: 100%;
`;

export const Div = styled.div`
  width: 51px;
  height: 48px;

  background-color: var(--orange);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  font-weight: 100;

  cursor: pointer;
  & > p {
    color: white;
  }
`;

export const Anwser = styled.div`
  height: 96px;
  width: 706.5px;

  font-size: 18px;
  line-height: 31.5px;

  & > p {
    color: var(--gray);
  }
`;
