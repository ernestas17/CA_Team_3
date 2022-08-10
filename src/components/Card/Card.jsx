import React from "react";
import { StyledBox } from "./Card.style";

const Card = ({ icon, text }) => {
  return (
    <>
      <StyledBox>
        <span>{icon}</span>
        <p>{text}</p>
      </StyledBox>
    </>
  );
};

export default Card;
