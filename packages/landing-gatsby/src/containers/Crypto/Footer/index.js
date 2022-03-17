import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'common/components/Image';
import Logo from 'common/components/UIElements/Logo';
import LogoImage from 'images/logo-black.png';
import Container from 'common/components/UI/Container';
import appConfig from 'config';

import FooterArea, {
  Left,
  Menu,
  CopyText,
  Social,
  SocialText,
} from './footer.style';

const Footer = () => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        COMMUNITY {
          links {
            text
            target
            imageUrl {
              publicURL
            }
          }
        }
        FOOTER {
          links {
            text
            target
          }
        }
      }
    }
  `);
  const socialLinks = Data.cryptoJson.COMMUNITY.links;
  const navigationLinks = Data.cryptoJson.FOOTER.links;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container className="Container">
        <Left>
          <Logo
            className="logo"
            href="/"
            logoSrc={LogoImage}
            title={appConfig.projectName}
          />
          <CopyText>
            Copyright © {year}
          </CopyText>
        </Left>
        <Menu>
          {navigationLinks.map(({ target, text }, index) => (
            <Link to={target} key={`footer-link-key-${index}`}>
              {text}
            </Link>
          ))}
        </Menu>
        <Social>
          {socialLinks.map(({ target, imageUrl }, index) => (
            <Link to={target} key={`footer-social-key-${index}`}>
              <Image src={imageUrl.publicURL} alt="social image" />
            </Link>
          ))}
        </Social>
      </Container>
    </FooterArea>
  );
};

export default Footer;
