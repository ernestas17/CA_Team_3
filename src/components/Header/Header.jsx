import React from "react";
import { Link } from "react-router-dom";

import {
  StyledHeader,
  StyledUl,
  StyledDivSeperator,
  IconWrapper,
  Wrapper,
  Icon,
  PhoneNumber,
  RoadAssitance,
  Span,
} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <span>{"{finsweet"}</span>
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
          <Wrapper>
            <Icon>
              <Span>
                <i className="fa-solid fa-phone"></i>
              </Span>
            </Icon>

            <IconWrapper>
              <RoadAssitance>Road Assistance</RoadAssitance>
              <PhoneNumber>1800 265 24 52</PhoneNumber>
            </IconWrapper>
          </Wrapper>
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};

export default Header;
