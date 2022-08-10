import styled from "styled-components";
import "../../utilities/variables.css";

export const StyledHeader = styled.header`
  max-width: 1280px;
  display: flex;
  justify-content: flex-end;
  margin: auto;
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 90px;
  margin: auto;
  & li {
    font-size: 16px;
    margin-left: 8px;
    font-weight: 600;
  }
`;

export const StyledDivSeperator = styled.div`
  height: 42px;
  width: 1px;
  background-color: var(--dark-gray);
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;
`;

export const PhoneNumber = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export const RoadAssitance = styled.p`
  font-weight: 500;
`;
