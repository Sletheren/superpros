import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { FeaturesWrapper, FeatureSection } from './features.style';

const FeaturesSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        HOW_IT_WORKS {
          subTitle
          title
          description
          button {
            text
            target
          }
          bullets {
            title
            description
            image {
              publicURL
            }
          }
        }
      }
    }
  `);

  const SectionData = Data.cryptoJson.HOW_IT_WORKS;

  return (
    <FeaturesWrapper id="features">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            <Text content={SectionData.subTitle} {...sectionSubTitle} />
            <FeatureBlock
              title={
                <Heading
                  content={SectionData.title}
                  {...title}
                />
              }
              description={
                <Text
                  content={SectionData.description}
                  {...description}
                />
              }
              button={
                <a href={SectionData.button.target}>
                  <Button title={SectionData.button.text} {...btnStyle} />
                </a>
              }
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              {SectionData.bullets.map((item, index) => (
                <Fade up key={`feature-${index}`}>
                  <div key={`feature-${index}`} className="featureWrapper">
                    <Image src={item.image.publicURL} alt={item.title} />
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />
                    <Text content={item.description} {...featureDescriptionStyle} />
                  </div>
                </Fade>
              ))}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </FeaturesWrapper>
  );
};

// Transactions style props
FeaturesSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Transactions default style
FeaturesSection.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Transactions section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Transactions section title default style
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
  },
  // Transactions section description default style
  description: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '40px', '40px', '55px'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    as: 'span',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Lato',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['25px', '27px', '27px', '27px', '27px'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
  },
  // Transactions section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
  },
};

export default FeaturesSection;
