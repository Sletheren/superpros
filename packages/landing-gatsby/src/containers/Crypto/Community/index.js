import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Card from 'common/components/Card';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import CommunityWrapper, { CounterUpArea } from './community.style';
import Image from 'common/components/Image';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  cardArea,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        COMMUNITY {
          subTitle
          subDescription
          title
          description
          links {
            text
            target
            imageUrl {
              publicURL
            }
          }
        }
      }
    }
  `);
  
  const SectionData = Data.cryptoJson.COMMUNITY;

  return (
    <CommunityWrapper id="community" className="section-block">
      <Container>
        <Box className="heading">
          <Heading as="h2" className="primary-gradient-text section-header" content={SectionData.title} />
          <Text as="p" className="section-description" content={SectionData.description} />
        </Box>
        <Box className="row" {...row}>
          <Box className="col" {...col} style={{ flexDirection: 'column' }}>
            <FeatureBlock
              title={
                <Heading
                  content={SectionData.subTitle}
                  {...title}
                />
              }
              description={
                <Text
                  content={SectionData.subDescription}
                  {...description}
                />
              }
            />
          </Box>
          <Box className="col" {...col} {...cardArea}>
            <CounterUpArea>
              {SectionData.links.map((item, index) => (
                  <Card key={index} className="card" {...cardStyle}>
                    <Image
                      src={item.imageUrl.publicURL}
                      alt={item.text}
                    />
                    <Text content={item.text} />
                  </Card>
              ))}
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </CommunityWrapper>
  );
};

PartnerHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

PartnerHistory.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  cardStyle: {
    p: '53px 40px 35px',
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '490px', '490px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
  },
  cardArea: {
    pl: [0, 0, '40px', 0, 0],
  },
};

export default PartnerHistory;
