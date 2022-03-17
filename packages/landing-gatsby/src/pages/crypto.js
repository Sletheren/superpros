import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/theme/crypto';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Crypto/Navbar';
import Banner from 'containers/Crypto/BannerSection';
import BannerSlider from 'containers/Crypto/BannerSlider';
import Features from 'containers/Crypto/Features';
import Team from 'containers/Crypto/Team';

import Tokenomics from 'containers/Crypto/Tokenomics';
import Seo from 'components/seo';
import FaqSection from 'containers/Crypto/FaqSection';
import PresaleCounter from 'containers/Crypto/PresaleCounter';
import CallToAction from 'containers/Crypto/CallToAction';

import Community from 'containers/Crypto/Community';
import Roadmap from 'containers/Crypto/Roadmap';

import Footer from 'containers/Crypto/Footer';
import DesignedAndBuilt from 'containers/AppModern/DesignedAndBuilt';

const Crypto = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Seo />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <BannerSlider />
          <Features />
          <PresaleCounter />
          <Tokenomics />
          <DesignedAndBuilt />
          <Roadmap />
          <Community />
          <Team />
          <FaqSection />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Crypto;
