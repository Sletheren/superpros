import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import BannerBG from 'common/assets/image/crypto/white_bg1.svg';
import BannerWrapper, { BgImageWrapper } from './bannerSection.style';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  outlineBtnStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        BANNER {
          title
          description
          primaryButton {
            text
            target
          }
          secondaryButton {
            text
            target
          }
        }
      }
    }
  `);
  const BannerData = Data.cryptoJson.BANNER;

  const ButtonGroup = () => (
    <Fragment>
      <a href={BannerData.primaryButton.target}>
        <Button title={BannerData.primaryButton.text} {...btnStyle} />
      </a>
      <a href={BannerData.secondaryButton.target}>
        <Button
          title={BannerData.secondaryButton.text}
          variant="textButton"
          icon={<i className="flaticon-next" />}
          {...outlineBtnStyle}
        />
      </a>
    </Fragment>
  );

  return (
    <BannerWrapper id="banner_section">
      <BgImageWrapper>
        <Image src={BannerBG} alt="banner background" />
      </BgImageWrapper>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content={BannerData.title}
                  {...title}
                />
              }
              description={
                <Text
                  content={BannerData.description}
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
            {/* <FeatureBlock button={<ShareButtonGroup />} /> */}
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '60%', '65%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '42px', '47px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: ['14px', '16px', '18px', '18px', '20px'],
    color: '#fff',
    lineHeight: '30px',
    mb: '0',
    maxWidth: '550px',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '6px',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    p: '5px 10px',
  },
};

export default BannerSection;
