import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";

import {
  StyledHeader,
  StyledUl,
  StyledDivSeperator,
  IconWrapper,
  Wrapper,
  Icon,
  PhoneNumber,
  RoadAssitance,
} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <div></div>
      <nav>
        <StyledUl>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <StyledDivSeperator></StyledDivSeperator>
          </li>
          <li>
            <Wrapper>
              <Icon>
                <FontAwesomeIcon icon={faSquarePhone} />
              </Icon>

              <IconWrapper>
                <RoadAssitance>Road Assistance</RoadAssitance>
                <PhoneNumber>1800 265 24 52</PhoneNumber>
              </IconWrapper>
            </Wrapper>
          </li>
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};

export default Header;
