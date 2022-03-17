import React, { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import Logo from 'common/components/UIElements/Logo';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import useOnClickOutside from 'common/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu, Search } from './navbar.style';
import LogoImage from 'common/assets/image/cryptoModern/logo-white.png';
import LogoImageAlt from 'common/assets/image/cryptoModern/logo.png';
import config from 'config/index';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      cryptoModernJson {
        navbar {
          logo {
            publicURL
          }
          actionButton
          navMenu {
            id
            label
            path
            offset
          }
        }
      }
    }
  `);
  const { navMenu, actionButton } = data.cryptoModernJson.navbar;
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = (type) => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleOnChange = (event) => {
    setState({
      ...state,
      search: event.target.value,
    });
  };


  const scrollItems = [];

  navMenu.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/cryptoModern"
          logoSrc={LogoImage}
          title=""
          className="main-logo"
        />
        <Logo
          href="/cryptoModern"
          logoSrc={LogoImageAlt}
          title="Crypto Modern"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? 'active' : ''}>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}

          <AnchorLink href="#trail" offset={84}>
            <Button className="trail" title={actionButton} />
          </AnchorLink>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <Button title={actionButton} />
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;