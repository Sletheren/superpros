import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import RoadmapArea, { Row, Col } from './roadmap.style';
import { Icon } from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import { iosCircleOutline } from 'react-icons-kit/ionicons/iosCircleOutline';

const Roadmap = ({
  cardStyle
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        ROADMAP {
          title
          description
          phases {
            text
            done
          }
        }
      }
    }
  `);

  const sectionData = Data.cryptoJson.ROADMAP;

  return (
    <RoadmapArea className="section-block">
      <Container className="Container">
        <Box className="heading">
          <Heading as="h2" className="primary-gradient-text section-header" content={sectionData.title} />
          <Text as="p" className="section-description" content={sectionData.description} />
        </Box>
        <Box>
        {sectionData.phases.map((phase, index) => (
          <Row className="roadmap-item" key={index}>
            <Col className="Left">
              <Box>
                <Heading as="h3" content={`Phase ${index+1}`} />
              </Box>
            </Col>
            <Col className="Right">
            <div className="card-body">
              <ul className="feature-list">
                {phase.map((elem, k) => (
                  <li key={`roadmap--key${k}`}>
                    <Icon icon={elem.done ? checkmarkCircled : iosCircleOutline} /> {elem.text}
                  </li>
                ))}
              </ul>
            </div>
            </Col>
          </Row>
        ))}
        </Box>
      </Container>
    </RoadmapArea>
  );
};


export default Roadmap;
