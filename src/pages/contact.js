import React from 'react'
import Helmet from 'react-helmet'

const Contact = (props) => (    
    <section id="contact">
         <Helmet>
            <title>Contact</title>
            <meta name="Contact" content="Contact Page" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact us</h1>
                    </header>                                   
                </div>
            </section>
        </div>
        <div className="inner">                  
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">ntvgarden@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(+63) 927 123 4567</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Cebu City<br />
                        Philippines</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
