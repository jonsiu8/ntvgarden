import React from 'react'
import Link from 'gatsby-link'

const Menu = () =>(
  
    <div style={{
        background:'#a9cc70',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '30px',
        margin: '0px'
    }}>

        <a style={{marginLeft:'20px'}}><Link to="/" >Home</Link></a>
        <a style={{marginLeft:'20px'}}><Link to="/gallery">Gallery</Link></a>
        <a style={{marginLeft:'20px'}}><Link to="/services">Services</Link></a>
        <a style={{marginLeft:'20px'}}><Link to="/" >Contact</Link></a>

    </div>
)


export default Menu;