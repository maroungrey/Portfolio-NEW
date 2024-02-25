import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import happyDays from '../assets/HappyDays.webp';
import happyDaysOverlay from '../assets/HappyDays1.webp';
import purium from '../assets/Purium.webp';
import puriumOverlay from '../assets/Purium1.webp';
import panoplie from '../assets/panoplie.webp';
import panoplieOverlay from '../assets/Panoplie1.webp';
import eargasm from '../assets/Eargasm.webp';
import eargasmOverlay from '../assets/Eargasm1.webp';
import landing from '../assets/Landing.webp';
import landingOverlay from '../assets/Landing1.webp';


export default function Portfolio() {
  return (
        <section id='portfolio'>

        <div id='portfolio-bg'>
        <Container className='text-center my-5 py-3 portfolio-wrap'>
            <div className='text-center py-5 '>
                <h1 className='section-title' >Portfolio</h1>
                <p className='section-subtitle'>My Recent Projects</p>
            </div> 
            <Row className='mb-5 pb-5 portfolio-row'>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center px-5'>
                <div className='portfolio-image'>
                    <Image src={happyDays} fluid alt='Happy Days Cafe'/>
                    <div className='image-overlay'>
                        <Image src={happyDaysOverlay} fluid alt='Happy Days Cafe'/>
                    </div>
                </div>
                </Col>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Happy Days Cafe</h4>
                        <p className='text-start'>Leveraged my own custom React and Bootstrap template to rapidly build responsive front-end. Coordinated with photographer to capture visually stunning images that met website needs. Wrote SEO-friendly copy and optimized it for maximum search impact and speed through web performance best practices.</p>
                        <a className='button-red float-start' href='https://happydayscafe.com/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
            </Row>

            <Row className='mb-5 pb-5 portfolio-row'>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Purium Blog</h4>
                        <p className='text-start'>A Wordpress Blog offering educational content for organic food supplements, I enhanced it with custom front-end features like custom smart search bar plugin that queries a comprehensive site FAQ that highlights matching keywords and only displays FAQ questions relevant to the search query.</p>
                        <a className='button-red float-start' href='https://blog.puriumcorp.com/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='portfolio-image'>
                        <Image src={puriumOverlay} fluid alt='Purium'/>
                        <div className='image-overlay'>
                            <Image src={purium} fluid alt='Purium'/>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='mb-5 pb-5 portfolio-row'>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center px-5'>
                <div className='portfolio-image'>
                    <Image src={eargasmOverlay} fluid alt='Eargasm'/>
                    <div className='image-overlay'>
                        <Image src={eargasm} fluid alt='Eargasm'/>
                    </div>
                </div>
                </Col>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Eargasm</h4>
                        <p className='text-start'>Shopify based store offering wide selection of earplugs. I've created several custom pages and front-end elements beyond the original theme capabilities like minimalist header design, custom categories section on the home page, partnerships page, optimized loading speed and SEO.</p>
                        <a className='button-red float-start' href='https://eargasm.com/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
            </Row>

            <Row className='mb-5 pb-5 portfolio-row'>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Purium Landing Page</h4>
                        <p className='text-start'> I have created this landing page using HTML, CSS, Bootstrap 5 and Javascript. The purpose of this project is to redirect customers from the old websites that are getting deprecated to the new systems.</p>
                        <a className='button-red float-start' href='https://puriumsuperfoods.com/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='portfolio-image'>
                        <Image src={landingOverlay} fluid alt='Purium Landing Page'/>
                        <div className='image-overlay'>
                            <Image src={landing} fluid alt='Purium Landing Page'/>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='mb-5 pb-5 portfolio-row'>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center px-5'>
                <div className='portfolio-image'>
                    <Image src={panoplieOverlay} fluid alt='Panoplie'/>
                    <div className='image-overlay'>
                        <Image src={panoplie} fluid alt='Panoplie'/>
                    </div>
                </div>
                </Col>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Panoplie</h4>
                        <p className='text-start'>I built this Magento 2 based home furniture store from scratch using WeltPixel theme and enhanced it with custom HTML, CSS and JavaScript. Examples include better cart and checkout design and minimalistic product pages.</p>
                        <a className='button-red float-start' href='https://www.panoplie.com/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
            </Row>
                
            </Container>
        </div>           
        </section>
  )
}
