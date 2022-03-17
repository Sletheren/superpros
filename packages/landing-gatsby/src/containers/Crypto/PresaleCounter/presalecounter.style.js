import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { hexToRgba } from 'common/helpers';
import config from 'config/index';

const SectionWrapper = styled.div`
  padding: 75px 0;
  overflow: hidden;

  background-image: -moz-linear-gradient(
    29deg,
    ${config.theme.colors.primaryLight} 0%,
    ${config.theme.colors.primaryDark} 100%
  );
  background-image: -webkit-linear-gradient(
    29deg,
    ${config.theme.colors.primaryLight} 0%,
    ${config.theme.colors.primaryDark} 100%
  );
  background-image: -ms-linear-gradient(
    29deg,
    ${config.theme.colors.primaryLight} 0%,
    ${config.theme.colors.primaryDark} 100%
  );

  @media only screen and (max-width: 1440px) {
    padding: 100px 0 50px;
  }
  @media only screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 480px) {
    flex-wrap: nowrap;
    align-items: center;
  }

  h2 {
    color: ${themeGet('colors.white', '#fff')};
    font-size: 35px;
    line-height: 44px;
    font-weight: 700;
    margin-bottom: 15px;
    @media only screen and (max-width: 1366px) {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
    }
    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 0px;
    }
  }

  p {
    color: #FFF;
    margin-bottom: 27px;
    font-weight: 400;
  }

  .timerCount {
    margin-top: 30px;
    margin-bottom: 60px;

    .NormalClock {
      display: flex;
      justify-content: space-between;
      width: 600px;
      align-items: center;
      @media (max-width: 480px) {
        width: 100%;
      }
      .NormalUnitContainer {
        width: 110px;
        height: 100px;
        border-radius: 5px;
        background-color: ${config.theme.colors.primaryDark};
        @media (max-width: 480px) {
          width: 70px;
          height: 70px;
          background-color: transparent;
        }
        .NormalupperCard {
          align-items: center;
          display: flex;
          justify-content: center;
          span {
            font-size: 60px;
            letter-spacing: -1px;
            color: #ffffff;
            font-family: 'Roboto';
            font-weight: 700;
            text-align: center;
            @media (max-width: 480px) {
              font-size: 30px;
            }
          }
        }
        .digitLabel {
          font-size: 14px;
          letter-spacing: 3px;
          color: #FFF;
          font-family: 'Roboto';
          font-weight: 500;
          text-align: center;
          margin-top: 12px;
          @media (max-width: 480px) {
            font-size: 10px;
          }
        }
      }
      .dividerColon {
        font-size: 36px;
        line-height: 48px;
        color: #fff;
        font-family: 'Roboto';
        font-weight: 700;
        text-align: center;
        @media (max-width: 480px) {
          display: none;
        }
      }
    }
  }
  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 30px;
    color: #000;

    &.primary {
      background: linear-gradient(
        -60deg,
        ${config.theme.colors.secondaryDark},
        ${config.theme.colors.secondary}
      );
      &:hover {
        box-shadow: ${hexToRgba(config.theme.colors.primary, 0.75)} 0px 9px 20px -10px;
      }
    }
  }
`;

export default SectionWrapper;
