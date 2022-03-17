import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from './banner.style';

const Banner = () => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoModernJson {
        Banner {
          title
          description
          primaryButton
          secondaryButton
        }
      }
      illustration: file(
        relativePath: { eq: "image/cryptoModern/banner-bg.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          {/* <Fade up>
            <DiscountLabel>
              <Text className="discountAmount" content="25% Discount" />
              <Text
                className="discountText"
                content="on every first project "
              />
            </DiscountLabel>
          </Fade> */}
          <Fade up delay={100}>
            <Heading
              as="h1"
              content={Data.cryptoModernJson.Banner.title}
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content={Data.cryptoModernJson.Banner.description}
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title={Data.cryptoModernJson.Banner.primaryButton} />
              <Button
                className="text"
                variant="textButton"
                title={Data.cryptoModernJson.Banner.secondaryButton}
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade in delay={100}>
            <GatsbyImage
              src={
                (Data.illustration !== null) | undefined
                  ? Data.illustration.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Banner"
            />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
