import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import NormalClock from './timer';
import SectionWrapper, { ContentWrapper } from './presalecounter.style';
import config from 'config/index';
import { presaleStatus } from 'common/helpers';

const PresaleCounter = () => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        PRESALE_COUNTDOWN {
          start {
            title
            description
            button {
              text
              target
            }
          }
          during {
            title
            description
            button {
              text
              target
            }
          }
          end {
            title
            description
            button {
              text
              target
            }
          }
        }
      }
    }
  `);
  const startAt = new Date(config.presale.starts);
  const endsAt = new Date(config.presale.ends);

  const status = presaleStatus(startAt, endsAt);
  const presaleClosed = status[0] === 1;
  const sectionData = Data.cryptoJson.PRESALE_COUNTDOWN[status[1]];

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Heading content={sectionData.title} />
          <Text as="p" content={sectionData.description} />
          {!presaleClosed && (
            <Fade up>
              <div className="timerCount">
                <NormalClock countdown={endsAt} divider="true" />
              </div>
            </Fade>
          )}
          <Link to={sectionData.button.target}>
            <Button className="primary" title={sectionData.button.text} />
          </Link>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PresaleCounter;
