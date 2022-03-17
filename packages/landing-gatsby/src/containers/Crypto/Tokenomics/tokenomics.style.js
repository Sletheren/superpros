import styled from 'styled-components';
import config from 'config/index';

const CounterArea = styled.section`
  text-align: center;
  .Container {
    max-width: 1000px;
  }

  .CounterBox {
    margin-bottom: 80px;
    @media (max-width: 1600px) {
      margin-bottom: 40px;
    }
    h3 {
      font-weight: 700;
      font-size: 80px;
      line-height: 1;
      text-align: center;
      letter-spacing: -0.02em;
      margin-bottom: 10px;
      @media (max-width: 1600px) {
        font-size: 60px;
      }
      @media (max-width: 767px) {
        font-size: 40px;
      }
    }
    h5 {
      font-size: 30px;
      font-weight: 700;
      color: ${config.theme.colors.primaryDark};
      @media (max-width: 1600px) {
        font-size: 20px;
      }
    }
    p {
      font-weight: normal;
      font-size: 17px;
      text-align: center;
      color: #000;
      margin-top: 0px;
      margin-bottom: 10px;
    }
  }
  .counterLink {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${config.theme.colors.primaryLight};
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;
export const Col = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 33.333%;
  max-width: 33.333%;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 25px;
  }
`;

export default CounterArea;
