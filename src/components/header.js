import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import {
  Button,
  Collapse,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Header,
  Headers,
  HeaderContent,
  HeaderSearch,
  HeaderRightZone,
  HeaderSocialsZone,
  HeaderToggler,
  HeaderLinkZone,
  Icon,
  LinkList,
  LinkListItem,
  Nav,
  NavItem,
  NavLink,
  HeaderBrand,
  UncontrolledDropdown,
} from "design-react-kit";

function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function getSectionFullName(section) {
  if (section === "documenti") {
    return "Documenti e Dati";
  }
  if (section === "novita") {
    return "Novità";
  }
  return section;
}

function getSectionFromLocation({ pathname }) {
  if (pathname === "/") {
    return "";
  }
  if (/amministrazione/.test(pathname)) {
    return "amministrazione";
  }
  if (/novita/.test(pathname)) {
    return "novita";
  }
  if (/servizi/.test(pathname)) {
    return "servizi";
  }
  if (/documenti/.test(pathname)) {
    return "documenti";
  }
}

const SlimHeaderFullResponsive = ({ theme }) => {
  return (
    <Header type="slim" theme={theme}>
      <HeaderContent>
        <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              ITA
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button color="primary" size="full" className="btn-icon" href="#">
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" />
            </span>
            <span className="d-none d-lg-block">
              Accedi all&#39;area personale
            </span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

const SlimHeader = ({ theme }) => {
  const [isOpen, toggleDropdown] = useState(false);
  return (
    <Header type="slim" theme={theme}>
      <HeaderContent>
        <HeaderBrand>
          <Link to="/">Ente appartenenza/Owner</Link>
        </HeaderBrand>
        <HeaderLinkZone>
          <HeaderToggler onClick={() => toggleDropdown(!isOpen)}>
            <span>Ente appartenenza/Owner</span>
            <Icon icon="it-expand" />
          </HeaderToggler>
          <Collapse isOpen={isOpen} header>
            <Nav inHeader>
              <NavItem>
                <Link to="#">Link 1</Link>
              </NavItem>
              <NavItem active>
                <Link to="#">Link 2 Active</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </HeaderLinkZone>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              ITA
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="it-access-top-wrapper">
            <Button color="primary" size="sm">
              Accedi
            </Button>
          </div>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

const CenterHeader = ({ theme, townName, townTagLine }) => {
  return (
    <Header type="center" theme={theme}>
      <HeaderContent>
        <Link to="/">
          <HeaderBrand iconName="it-pa">
            <h2>{townName}</h2>
            <h3>{townTagLine}</h3>
          </HeaderBrand>
        </Link>
        <HeaderRightZone>
          <HeaderSocialsZone label="Seguici su">
            <ul>
              <li>
                <Link to="#" aria-label="Facebook" target="_blank">
                  <Icon icon="it-facebook" />
                </Link>
              </li>
              <li>
                <Link to="#" aria-label="Github" target="_blank">
                  <Icon icon="it-github" />
                </Link>
              </li>
              <li>
                <Link to="#" aria-label="Twitter" target="_blank">
                  <Icon icon="it-twitter" />
                </Link>
              </li>
            </ul>
          </HeaderSocialsZone>
          <HeaderSearch label="Cerca" iconName="it-search" />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

const NavHeader = ({ active, theme }) => {
  const [isOpen, toggleDropdown] = useState(false);
  return (
    <Header type="navbar" theme={theme}>
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler
          onClick={() => toggleDropdown(!isOpen)}
          aria-controls="nav1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon icon="it-burger" />
        </HeaderToggler>
        <Collapse
          isOpen={isOpen}
          navbar
          header
          onOverlayClick={() => toggleDropdown(!isOpen)}
        >
          <div className="menu-wrapper">
            <Nav navbar>
              {["amministrazione", "novita", "servizi", "documenti"].map(
                label => {
                  const isActive = label === active;
                  return (
                    <NavItem active={isActive} key={label}>
                      <NavLink to={`/${label}`} active={isActive} tag={Link}>
                        <span>{capitalize(getSectionFullName(label))}</span>
                        {isActive && <span className="sr-only">current</span>}
                      </NavLink>
                    </NavItem>
                  );
                }
              )}
            </Nav>
            <Nav navbar className="navbar-secondary">
              {[
                { label: "Argomento 1" },
                { label: "Argomento 2" },
                { label: "Tutti gli argomenti...", bold: true },
              ].map(({ label, bold }) => {
                return (
                  <NavItem key={label}>
                    <NavLink to={`/${label}`} tag={Link}>
                      <span className={`${bold ? "font-weight-bold" : ""}`}>
                        {label}
                      </span>
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
};

const CompleteHeader = ({ location, sticky, theme, type, town }) => {
  const SlimTag = type === "default" ? SlimHeader : SlimHeaderFullResponsive;

  const page = getSectionFromLocation(location);
  const { name, tagLine } = town;
  return (
    <Headers sticky={!!sticky}>
      <SlimTag theme={theme} />
      <div className="it-nav-wrapper">
        <CenterHeader theme={theme} townName={name} townTagLine={tagLine} />
        <NavHeader theme={theme} active={page} />
      </div>
    </Headers>
  );
};

CompleteHeader.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string,
  town: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagLine: PropTypes.string,
  }),
};

CompleteHeader.defaultProps = {
  type: "default",
};

export default CompleteHeader;
