import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Photo from '../assets/about.webp'

export default function About() {
  return (
    <section id='about'>
        <div className='pt-5 text-center'>
        <h1 className='section-title'>About Me</h1>
        <p className='section-subtitle'>My formal details</p>
        </div>
    <Container className='pb-5'> 
            <Row>
                <Col sm={12} lg={6} className='d-flex align-items-center justify-content-center'>
                    <Image src={Photo} fluid alt="Professional photo of Maroun"/>
                </Col>
                <Col sm={12} lg={6} className='d-flex align-items-center justify-content-center p-3'>
                    <div className='about-text'>
                        <h3 className="text-center text-lg-left services-title">Small Business Web Design Focused on Your Goals</h3>
                        <p className="about-me-description text-center text-lg-left">I create custom websites tailored to each client's unique needs. Whether you need a completely custom web design from scratch, your existing WordPress or Shopify site rebuilt for better performance, or expert web development and coding work, I have the skills to make it happen. I work with small businesses across all industries to build the website they envision, with a focus on driving real results - whether your goals are more traffic, increased conversions, or building your brand. My passion is using expert web design, web development and digital marketing strategies to create the ideal online presence for each client.</p>
                        <a className='about-button button-red' href='https://maroun-barqawi.tiiny.site/' target='_blank'><Button id='view_resume'>View Resume</Button></a>
                    </div>
                </Col>
            </Row>
    </Container>
</section>
  )
}
