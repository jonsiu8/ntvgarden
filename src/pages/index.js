import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/landscapedesign.jpg'
import pic02 from '../assets/images/hardscapedesign.jpg'
import pic03 from '../assets/images/fountain.jpg'
import pic04 from '../assets/images/consultation.jpg'


class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Services</h3>
                                <p>Services</p>
                            </header>
                            <Link to="/services" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Gallery</h3>
                                <p>Projects</p>
                            </header>
                            <Link to="/gallery" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>About</h3>
                                <p>About us</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Contact</h3>
                                <p>Contact us</p>
                            </header>
                            <Link to="/contact" className="link primary"></Link>
                        </article>                       
                    </section>                
                </div>
            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`