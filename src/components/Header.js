import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import logo from "./logo.svg"

const Logo = styled.img`
  width: 105px;
  margin-bottom: 0;

  @media (max-width: 1023px) {
    width: 70px;
  }
`;

const Header = (props) => (
    <header id="header" className="alt">
        {/*<Link to="/" className="logo"><strong>NTV Garden</strong></Link>*/}
        <Link to="/" className="logo"><Logo src={logo}/></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
