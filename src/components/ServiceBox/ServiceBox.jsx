import React from 'react';
import { StyledServiceBox } from './ServiceBox.style';

const ServiceBox = ({ color, text, children }) => {
  return (
    <StyledServiceBox color={color}>
      {children}
      <p>{text}</p>
    </StyledServiceBox>
  );
};

export default ServiceBox;
