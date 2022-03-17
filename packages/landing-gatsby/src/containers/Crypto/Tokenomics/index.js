import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import CounterArea, { Row, Col } from './tokenomics.style';

const Counter = () => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        TOKENOMICS {
          title
          description
          items {
            number
            title
            description
            link {
              text
              target
            }
          }
        }
      }
    }
  `);

  const sectionData = Data.cryptoJson.TOKENOMICS;

  return (
    <CounterArea className="section-block">
      <Container className="Container">
        <Box className="heading">
          <Heading as="h2" className="primary-gradient-text section-header" content={sectionData.title} />
          <Text as="p" content={sectionData.description} />
        </Box>
        <Row>
          {sectionData.items.map(({ number, title, description, link }, index) => (
            <Col key={`tokenomics-key-${index}`}>
              <Box className="CounterBox">
                <Heading as="h3" className="primary-gradient-text" content={`${number}%`} />
                <Heading as="h5" content={title} />
                <Text as="p" content={description} />
                {link?.target && (
                  <Link to={link.target} className="counterLink">
                    {link.text} <Icon size={18} icon={androidArrowForward} />
                  </Link>
                )}
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </CounterArea>
  );
};

export default Counter;
