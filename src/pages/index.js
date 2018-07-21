import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
//import sectionBannerBg from "./img-homepage.jpg"
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import get from 'lodash/get'

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: #1a492b;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroBanner = styled.div`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const HeroBannerParag = styled.p`
  font-size: 18px;
  color: #fff;
`;

const HeroBannerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 52px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroBannerSub = styled.h1`
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const BigButton = styled(Link)`
  display: block;
  background-color: #e0b02e;
  color: #1a492b;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 10px 15px;
  border-radius: 3px;
  margin-top: 15px;
  max-width: 180px;

  @media (max-width: 768px) {
    margin: 15px auto;
  }
`;

/*const IndexPage = () => (
  <div>
    <BannerContainer style={{backgroundImage:`url(` + sectionBannerBg + `)`,backgroundSize:`cover`,backgroundPosition:`center`}}>
      <HeroBanner>
          <HeroBannerTitle>Welcome to NTV Garden</HeroBannerTitle>
          <HeroBannerParag> for all your landscaping needs</HeroBannerParag>
          <BigButton to="/gallery">Learn More</BigButton>
      </HeroBanner>
    </BannerContainer>
  </div>
)*/
class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    

    return (
      <div>
        <Helmet title={siteTitle} />  
        <Img sizes={this.props.data.imageOne.sizes} />
        <BannerContainer style={{backgroundImage: `sizes`,backgroundSize:`cover`,backgroundPosition:`center`}}>
          <HeroBanner>
            <HeroBannerTitle>Welcome to NTV Garden</HeroBannerTitle>
            <HeroBannerParag> for all your landscaping needs</HeroBannerParag>
            <BigButton to="/gallery">Learn More</BigButton>
          </HeroBanner>
      </BannerContainer>
      </div>
    )
  }
}


export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    imageOne: imageSharp(id: { regex: "/img-homepage.jpg/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
