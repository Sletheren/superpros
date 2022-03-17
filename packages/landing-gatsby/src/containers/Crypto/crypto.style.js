import styled, { createGlobalStyle } from 'styled-components';
import config from 'config/index';
import { hexToRgba } from 'common/helpers';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: ${config.theme.fonts.primary}, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${config.theme.fonts.primary}, sans-serif;
  }
  p{
    font-family: ${config.theme.fonts.primary}, sans-serif;
  }

  section {
    position: relative;
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #000;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: ${config.theme.colors.primary};
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${config.theme.colors.primary};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: ${config.theme.colors.primary};;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
        color: #FFF;
        font-weight: 500;
        font-size: 15px;
        background: linear-gradient(
          -60deg,
          ${config.theme.colors.primaryDark},
          ${config.theme.colors.primaryLight}
        );
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: ${config.theme.colors.primary};
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  .primary-gradient-text {
    background-color: ${config.theme.colors.primary};
    background-image: linear-gradient(45deg, ${config.theme.colors.primary}, ${config.theme.colors.primaryLight});
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
  .section-block {
    margin: 80px 0;
    .heading {
      margin-bottom: 85px;
      @media (max-width: 575px) {
        margin-bottom: 20px;
      }
    }
    .section-header {
      font-weight: 700;
      font-size: 80px;
      text-align: center;
      margin-bottom: 10px;
      @media (max-width: 1600px) {
        font-size: 60px;
      }
      @media (max-width: 575px) {
        font-size: 40px;
      }
    }
    .section-description {
      text-align: center;
      font-weight: normal;
      font-size: 17px;
      line-height: 2.06;
      letter-spacing: 0.1px;
      color: #000;
      max-width: 750px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
      @media (max-width: 1600px) {
        font-size: 15px;
      }
    }
  }
  
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .sticky-nav-active {
    .saas_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
      .main_menu {
        li {
          a {
            color: #000;
            &:hover {
              color: ${config.theme.colors.primary};
            }
          }
          &.is-current {
            a {
              color: ${config.theme.colors.primary};
            }
          }
        }
      }
    }
    .hamburgMenu__bar {
      > span {
        background: ${config.theme.colors.primary};
      }
    }
  }

  .saas_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .logo-alt {
      display: none;
    }
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: ${config.theme.colors.primary};
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #fff;
          transition: 0.15s ease-in-out;
          &:hover {
            color: ${config.theme.colors.primary};
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
      button {
        color: #000;
        border-radius: 6px;
        background-image: -moz-linear-gradient(
          29deg,
          ${config.theme.colors.secondary} 0%,
          ${config.theme.colors.secondaryDark} 100%
        );
        background-image: -webkit-linear-gradient(
          29deg,
          ${config.theme.colors.secondary} 0%,
          ${config.theme.colors.secondaryDark} 100%
        );
        background-image: -ms-linear-gradient(
          29deg,
          ${config.theme.colors.secondary} 0%,
          ${config.theme.colors.secondaryDark} 100%
        );
        &:hover {
          box-shadow: -6.691px 7.431px 20px 0px ${hexToRgba(config.theme.colors.secondary, 0.2)};
        }
        > span {
          font-weight: 700;
          letter-spacing: 1px;
        }
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }
`;
