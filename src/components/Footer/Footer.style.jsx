import styled from "styled-components";
import "../../utilities/variables.css";

export const StyledFooter = styled.footer`
  background-color: var(--black);
`;

// Contact section

export const StyledContactsWrapper = styled.section`
  padding: 1em;
  padding-top: 124px;
  height: 549px;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
export const StyledSocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledSocialsTitle = styled.h3`
  font-size: var(--title1);
  color: var(--white);

  padding-bottom: 64px;
  max-width: 320px;

  @media screen and (min-width: 1024px) {
    font-size: 48px;
    max-width: 480px;
  }
`;

export const StyledSocialsContainer = styled.div`
  display: flex;
  gap: 1.5em;
`;

export const StyledSocialIcon = styled.span`
  & :first-child {
    color: var(--white);
    cursor: pointer;
  }
`;

export const StyledPrimaryParagraph = styled.p`
  font-size: var(--paragraph1-text-size);
  font-weight: 600;

  padding-bottom: 2em;

  color: var(--white);

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const StyledSecondaryParagraph = styled.p`
  font-size: var(--paragraph2-text-size);
  font-weight: 600;

  padding-bottom: 0.5em;

  color: #646363;

  @media screen and (min-width: 1024px) {
    font-size: var(--paragraph1-text-size);
  }
`;

// navigation section

export const StyledNavigationWrapper = styled.section`
  height: 157px;
  max-width: 1280px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;

  & span {
    width: 20%;
    font-size: 20px;
    font-weight: 800;

    color: var(--white);
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  height: 90px;
  margin: auto;
  gap: 24px;
  & li {
    & :first-child {
      color: var(--white);
    }
  }
  &nav {
    width: 80%;
  }
  @media screen and (min-width: 1024px) {
    gap: 36px;
  }
`;

export const StyledCopyrightText = styled.p`
  color: #939191;
`;
