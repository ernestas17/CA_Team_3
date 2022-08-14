import React from 'react';
import { StyledColorCard } from './ColorCard.style';

const ColorCard = ({ color, title, content }) => {
  return (
    <StyledColorCard color={color}>
      <h4>{title}</h4>
      <p>{content}</p>
    </StyledColorCard>
  );
};

export default ColorCard;
