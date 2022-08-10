import { Link } from "react-router-dom";

import {
  StyledFooter,
  StyledContactsWrapper,
  StyledSocialsWrapper,
  StyledSocialsTitle,
  StyledSocialsContainer,
  StyledSocialIcon,
  StyledPrimaryParagraph,
  StyledSecondaryParagraph,
  StyledNavigationWrapper,
  StyledUl,
  StyledCopyrightText,
} from "./Footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContactsWrapper>
        <StyledSocialsWrapper>
          <StyledSocialsTitle>
            Get in touch with us for your service
          </StyledSocialsTitle>
          <StyledSocialsContainer>
            <StyledSocialIcon>
              <i className="fa-brands fa-facebook fa-xl"></i>
            </StyledSocialIcon>
            <StyledSocialIcon>
              <i className="fa-brands fa-twitter fa-xl"></i>
            </StyledSocialIcon>
            <StyledSocialIcon>
              <i className="fa-brands fa-instagram fa-xl"></i>
            </StyledSocialIcon>
            <StyledSocialIcon>
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </StyledSocialIcon>
          </StyledSocialsContainer>
        </StyledSocialsWrapper>
        <div>
          <StyledSecondaryParagraph>Help line Number</StyledSecondaryParagraph>
          <StyledPrimaryParagraph>1800 265 24 52</StyledPrimaryParagraph>
          <StyledSecondaryParagraph>Address</StyledSecondaryParagraph>
          <StyledPrimaryParagraph>
            NH234 Public Square San Francisco 65368
          </StyledPrimaryParagraph>
          <StyledSecondaryParagraph>We are open</StyledSecondaryParagraph>
          <StyledPrimaryParagraph>
            Monday to Friday 9:00 AM to 10:00 AM
          </StyledPrimaryParagraph>
        </div>
      </StyledContactsWrapper>
      <StyledNavigationWrapper>
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
          </StyledUl>
        </nav>
        <StyledCopyrightText>
          @ Copyright Finsweet {new Date().getFullYear()}
        </StyledCopyrightText>
      </StyledNavigationWrapper>
    </StyledFooter>
  );
};

export default Footer;
