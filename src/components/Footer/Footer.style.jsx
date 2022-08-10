import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #1e1b1b;
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
  font-size: 32px;
  color: #ffffff;

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
  color: #ffffff;
`;

export const StyledPrimaryParagraph = styled.p`
  font-size: 20px;
  font-weight: 600;

  padding-bottom: 2em;

  color: #ffffff;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const StyledSecondaryParagraph = styled.p`
  font-size: 16px;
  font-weight: 600;

  padding-bottom: 0.5em;

  color: #646363;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

// navigation section

export const StyledNavigationWrapper = styled.section`
  height: 157px;
`;
