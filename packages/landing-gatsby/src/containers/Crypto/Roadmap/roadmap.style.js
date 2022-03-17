import styled from 'styled-components';
import config from 'config/index';

const RoadmapArea = styled.section`
  .roadmap-item {
    margin-bottom: 30px;
    box-shadow: 0px 8px 20px 0px rgba(16, 66, 97, 0.1);
    border-radius: 10px;
    &:hover {
      box-shadow: 0px 8px 20px 0px rgba(16, 66, 97, 0.3);
    }
    @media (max-width: 767px) {
      margin: 0 10px 30px;
    }
    .Left {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      max-width: 300px;
      width: 50%;

      @media (max-width: 767px) {
        display: block;
        width: 100%;
        text-align: left;
        margin: 20px 0 0;
        padding: 0 40px;
      }
      h3 {
        font-weight: 700;
        font-size: 50px;
        font-family: ${config.theme.fonts.secondary};
        color: ${config.theme.colors.primaryDark};
        @media (max-width: 1600px) {
          font-size: 32px;
          max-width: 441px;
        }
        @media (max-width: 767px) {
          font-size: 22px;
          max-width: 100%;
        }
      }
    }
  }

  .Right {
    padding: 20px 40px;
    margin: 0;
    flex-grow: 1;

    ul {
      li {
        color: black;
        font-size: 16px;
        margin: 10px 0;
        align-items: center;
        display: flex;
        i {
          color: ${config.theme.colors.primary};
          margin-right: 8px;
          svg {
            width: 20px;
            height: auto;
          }
        }
      }
    }
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -40px;
  margin-right: -40px;
`;
export const Col = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export default RoadmapArea;
