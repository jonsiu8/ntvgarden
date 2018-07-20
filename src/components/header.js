import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import logo from "./logo.svg"

const Logo = styled.img`
  width: 110px;
  margin-bottom: 0;

  @media (max-width: 767px) {
    width: 70px;
  }
`;

const Header = ({ siteTitle }) => (
  <div style={{background: '#1a492b',margin: 'auto',}}>
    <div style={{margin: 'auto',padding: '15px 50px'}}>
       <Link to="/" style={{ textDecoration: `none`}}>
          <Logo src={logo}/>
       </Link>
    </div>
  </div>
  
)

export default Header
