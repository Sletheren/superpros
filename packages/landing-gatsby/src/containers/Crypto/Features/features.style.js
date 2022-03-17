import styled from 'styled-components';
import config from 'config/index';
import { hexToRgba } from 'common/helpers';

const FeaturesWrapper = styled.section`
  padding: 120px 0 80px;
  @media (max-width: 1440px) {
    padding: 80px 0 50px;
  }
  @media (max-width: 480px) {
    padding: 80px 0 0px;
  }
  button {
    border-radius: 6px;
    background-image: -moz-linear-gradient(
      29deg,
      ${config.theme.colors.primaryLight} 0%,
      ${config.theme.colors.primary} 100%
    );
    background-image: -webkit-linear-gradient(
      29deg,
      ${config.theme.colors.primaryLight} 0%,
      ${config.theme.colors.primary} 100%
    );
    background-image: -ms-linear-gradient(
      29deg,
      ${config.theme.colors.primaryLight} 0%,
      ${config.theme.colors.primary} 100%
    );
    &:hover {
      box-shadow: -6.691px 7.431px 20px 0px ${hexToRgba(config.theme.colors.primary, 0.2)};
    }
    > span {
      font-weight: 700;
      letter-spacing: 1px;
    }
  }

  .colleft {
    width: 35%;
    @media (max-width: 1440px) {
      width: 40%;
    }
    @media (max-width: 1199px) {
      width: 100%;
    }
  }
  .colright {
    width: calc(65% - 100px);
    margin-left: 100px;
    @media (max-width: 1440px) {
      width: calc(60% - 100px);
    }
    @media (max-width: 1199px) {
      width: 100%;
      margin-left: 0;
      margin-top: 100px;
    }
  }
`;

const FeatureSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .featureWrapper {
    max-width: 260px;
    margin-bottom: 45px;
    @media (max-width: 599px) {
      max-width: 100%;
    }
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 20px;
    }
  }
`;
export { FeaturesWrapper, FeatureSection };
