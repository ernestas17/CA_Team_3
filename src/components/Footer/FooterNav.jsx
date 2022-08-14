import { Link } from 'react-router-dom';
import {
  StyledCopyrightText,
  StyledFooter,
  StyledNavigationWrapper,
  StyledUl,
} from './Footer.style';

const FooterNav = () => {
  return (
    <StyledFooter>
      <StyledNavigationWrapper>
        <span>{'{finsweet'}</span>
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

export default FooterNav;
