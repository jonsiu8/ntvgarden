import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Elements = (props) => (
    <div>
        <Helmet>
            <title>Gallery</title>
            <meta name="Gallery" content="Gallery Page" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Gallery</h1>
                    </header>                   
                        <span className="image fit"><img src={pic03} alt="" /></span>
                        <div className="box alt">
                            <div className="row 50% uniform">
                                <div className="4u"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src={pic08} alt="" /></span></div>
                            </div>
                        </div>
                        <h4>Left &amp; Right</h4>
                        <p><span className="image left"><img src={pic09} alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget tempus vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>
                        <p><span className="image right"><img src={pic10} alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget tempus vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>
                </div>
            </section>
        </div>
    </div>
)

export default Elements