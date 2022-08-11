import React from "react";
import { useState, useRef, useEffect } from "react";
import { Container, QuestionContainer, P, Div, Anwser } from "./CTA.style";

const CTA = ({ question, anwser }) => {
  const [opened, setOpened] = useState(false);
  const button = useRef();

  function click() {
    setOpened((prev) => !!!prev);
  }

  return (
    <Container>
      <QuestionContainer>
        <P>{question}</P>
        <Div ref={button} onClick={click}>
          {opened ? <p>-</p> : <p>+</p>}
        </Div>
      </QuestionContainer>
      {opened ? (
        <Anwser>
          <p>{anwser}</p>
        </Anwser>
      ) : (
        <p></p>
      )}
    </Container>
  );
};

export default CTA;
