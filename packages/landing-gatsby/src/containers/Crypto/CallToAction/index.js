import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import CallToActionArea, { Left, Right } from './callToAction.style';

const CallToAction = () => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        CALL_TO_ACTION {
          title
          description
          link {
            text
            target
          }
        }
      }
    }
  `);
  const SectionData = Data.cryptoJson.CALL_TO_ACTION;
  return (
    <CallToActionArea id="call_to_action">
      <Container className="Container">
        <Left>
          <Heading as="h3" content={SectionData.title} />
          <Text as="p" content={SectionData.description} />
        </Left>
        <Right>
          <Link to={SectionData.link.target}>
            {SectionData.link.text}
            <Icon icon={androidArrowForward} />
          </Link>
        </Right>
      </Container>
    </CallToActionArea>
  );
};

export default CallToAction;
