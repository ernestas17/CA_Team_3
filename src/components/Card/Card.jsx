import React from "react";
import { StyledBox } from "./Card.style";

const Card = ({ icon, text, size }) => {
  let cardWidth = 0;
  let cardHeight = 0;

  switch (size) {
    case "sm":
      cardWidth = `264px`;
      cardHeight = `158px`;
      break;
    case "md":
      cardWidth = `296px`;
      cardHeight = `232px`;
      break;
    default:
      cardWidth = `296px`;
      cardHeight = `232px`;
      break;
  }
  return (
    <>
      <StyledBox style={{ height: cardHeight, width: cardWidth }}>
        <span>{icon}</span>
        <p>{text}</p>
      </StyledBox>
    </>
  );
};

export default Card;
