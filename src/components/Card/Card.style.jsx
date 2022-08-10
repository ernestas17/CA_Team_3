import React from "react";
import styled from "styled-components";

export const StyledBox = styled.div`
  width: 316px;
  height: 232px;

  font-size: var(--title2);
  font-weight: 600;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  transition: 100ms;

  &:hover span {
    color: white;
    transition: 100ms;
  }

  &:hover p {
    color: white;
    transition: 100ms;
  }

  &:hover {
    background-color: var(--orange);
    transition: 100ms;
    cursor: pointer;
  }
`;
