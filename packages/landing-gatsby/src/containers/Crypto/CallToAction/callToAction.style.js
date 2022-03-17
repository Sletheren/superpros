import styled from 'styled-components';
import config from 'config/index';

const CallToActionArea = styled.section`
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
    padding: 80px 0 50px;
  }
  @media only screen and (max-width: 480px) {
    padding: 30px 0;
  }

  .Container {
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 991px) {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  }
  h3 {
    letter-spacing: -0.02em;
    color: #FFF;
    font-size: 36px;
    line-height: 1.81;
    margin-bottom: 0;
    margin-bottom: 10px;
    @media (max-width: 1600px) {
      font-size: 30px;
    }
    @media (max-width: 991px) {
      margin-bottom: 0;
    }
    @media (max-width: 575px) {
      font-size: 26px;
      line-height: 1.6;
    }
  }
  p {
    font-size: 19px;
    color: #FFF;
    opacity: 0.7;
    line-height: 1.84;
    letter-spacing: 0.1px;
    @media (max-width: 575px) {
      font-size: 16px;
    }
  }
`;
export const Left = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 30px;
  }
`;
export const Right = styled.div`
  > a {
    display: inline-block;
    background-color: ${config.theme.colors.secondary};
    color: #000;
    font-size: 15px;
    font-weight: bold;
    padding: 20px 30px;
    border-radius: 30px;
    transition: all 500ms ease;
    &:hover {
      background-color: ${config.theme.colors.secondaryDark};
    }
    > i {
      margin-left: 5px;
    }
  }
`;

export default CallToActionArea;
