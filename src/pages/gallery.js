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
                        {/*<span className="image fit"><img src={pic03} alt="" /></span>*/}
                        <div className="box alt">
                            <h3>Residential</h3>
                            <div className="row 50% uniform">                   
                                <div className="6u"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic09} alt="" /></span></div>                        
                            </div>
                        </div>
                        <div className="box alt">
                            <h3>Commercial</h3>
                            <div className="row 50% uniform">                   
                                <div className="6u"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic09} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic10} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                <div className="6u"><span className="image fit"><img src={pic09} alt="" /></span></div>                        
                            </div>
                        </div>
                </div>
            </section>
        </div>
    </div>
)

export default Elements