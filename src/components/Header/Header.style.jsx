import styled from "styled-components";
import "../../utilities/variables.css";

export const StyledHeader = styled.header`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  & span {
    width: 20%;
    font-size: 20px;
    font-weight: 800;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  height: 90px;
  margin: auto;
  & li {
    font-size: 16px;
    margin-left: 40px;
    font-weight: 600;
  }
  &nav {
    width: 80%;
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
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;

  border-radius: 50px;

  margin: 0 14px;
  background-color: var(--mint);

  height: 40px;
  width: 40px;
`;

export const PhoneNumber = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export const RoadAssitance = styled.p`
  font-weight: 500;
`;

export const Span = styled.span`
  & :first-child {
    color: white;
    padding-left: 9px;
  }
`;
