import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components";
import pic11 from '../assets/images/pic11.jpg'
import imglandscapedesign from '../assets/images/landscapedesign.jpg'
import imghardscapedesign from '../assets/images/hardscapedesign.jpg'
import imggardenmaint from '../assets/images/gardenmaint.jpg'
import imgfountain from '../assets/images/fountain.jpg'
import imgplantsupplies from '../assets/images/plantsupplies.jpg'
import imgatrium from '../assets/images/atrium.jpg'
import imgconsultation from '../assets/images/consultation.jpg'


const SectionService = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;

const SectionParag = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  padding-bottom: 0;
  color: #a9cc70;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0px;
  border: none;
  font-size: 34px;
  color: #e0b02e;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const SectionImage = styled.img`
    display: block;
    padding-top: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;



const Services = (props) => (
    <div>
        <Helmet>
            <title>Services</title>
            <meta name="Services" content="Services Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Services</h1>
                    </header>
                    <SectionService>
                        <SectionTitle>Landscape Design</SectionTitle>
                        <SectionParag>Donec eget ex magna. Interdum et malesuada fames ac.</SectionParag>
                        <SectionImage src={imglandscapedesign} alt="" />         
                    </SectionService>     
                    <SectionService>
                        <SectionTitle>Hardscape Design</SectionTitle>
                        <SectionParag>Donec eget ex magna. Interdum et malesuada fames ac.</SectionParag>
                        <SectionImage src={imghardscapedesign} alt="" />         
                    </SectionService>       
                    <SectionService>
                        <SectionTitle>Garden Maintenance</SectionTitle>
                        <SectionParag>Donec eget ex magna. Interdum et malesuada fames ac.</SectionParag>
                        <SectionImage src={imggardenmaint} alt="" />         
                    </SectionService>       
                    <SectionService>
                        <SectionTitle>Fountains and Waterfall</SectionTitle>
                        <SectionParag>Donec eget ex magna. Interdum et malesuada fames ac.</SectionParag>
                        <SectionImage src={imgfountain} alt="" />         
                    </SectionService>       
                    <SectionService>
                        <SectionTitle>Plant Supplies</SectionTitle>
                        <SectionParag>Donec eget ex magna. Interdum et malesuada fames ac.</SectionParag>
                        <SectionImage src={imgplantsupplies} alt="" />         
                    </SectionService>       
                    <SectionService>
                        <SectionTitle>Atriums</SectionTitle>
                        <SectionParag>Donec eget ex magna. Interdum et malesuada fames ac.</SectionParag>
                        <SectionImage src={imgatrium} alt="" />         
                    </SectionService>       
                    <SectionService>
                        <SectionTitle>Consultation</SectionTitle>
                        <SectionParag>Donec eget ex magna. Interdum et malesuada fames ac.</SectionParag>
                        <SectionImage src={imgconsultation} alt="" />         
                    </SectionService>                             
                </div>
            </section>
        </div>

    </div>
)

export default Services