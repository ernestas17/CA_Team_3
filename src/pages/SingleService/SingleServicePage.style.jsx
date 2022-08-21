import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;

  @media screen and (min-width: 1280px) {
    padding: 0em;
  }
`;

export const StyledServiceTitle = styled.h1`
  font-weight: 800;
  line-height: 84px;
  font-size: var(--HeadingH2);

  color: var(--black);
  align-self: flex-start;
  margin-top: 12px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    font-size: var(--HeadingH1);
    margin-top: 28px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 1024px) {
    font-size: var(--HeadingH1);
    margin-top: 60px;
    margin-bottom: 96px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 32px;
  margin-bottom: 136px;
  .left-service-container {
    width: 328px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    gap: 96px;
  }
`;

export const StyledOtherServices = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 670px;

  padding: 32px;
  gap: 24px;

  background-color: var(--whitesmoke);

  .service-title1 {
    font-size: var(--title1);
    line-height: 48px;
    font-weight: 700;
  }
`;

export const StyledProsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 53px;
  gap: 8px;

  .service-title2 {
    font-size: var(--title2);
    line-height: 36px;
    font-weight: 600;
  }
  .service-paragraph2 {
    font-size: var(--paragraph2-text-size);
    line-height: 28px;
    font-weight: 600;

    padding-left: 63px;

    margin-bottom: 37px;
    opacity: 0.6;
  }
  .pros-title {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  img {
    width: 24px;
    height: 24px;
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  span {
    position: relative;

    width: 47px;
    height: 47px;
    background-color: var(--whitesmoke);
    border-radius: 50%;
  }
`;

export const StyledSingleService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  img {
    max-width: 100%;
    height: auto;
  }
  .single-service-sub-title {
    font-size: var(--HeadingH6);
    font-weight: 700;
    line-height: 32px;
    padding-top: 14px;
  }
  .single-service-sub-body {
    font-size: var(--paragraph2-text-size);
    font-weight: 600;
    line-height: 28px;
    opacity: 0.6;
  }
  .vertical-line {
    height: 100%;
    width: 10px;

    background-color: var(--black);
  }
  .container-vline {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  @media screen and (min-width: 768px) {
    .single-service-sub-title {
      font-size: var(--HeadingH5);
      line-height: 40px;
    }
  }
  @media screen and (min-width: 1024px) {
    .single-service-sub-title {
      font-size: var(--HeadingH4);
      line-height: 56px;
    }
  }
`;
