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
import hairsalon from '../assets/hairsalon.webp';
import hairsalonOverlay from '../assets/HairSalon1.webp';


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
                        <h4 className='text-start services-title'>Purium</h4>
                        <p className='text-start'>A Shopify store offering organic food supplements, I enhanced it with custom features and accessibility compliance for an inclusive shopping experience.</p>
                        <p className='text-start'><i>Please note that the current state of the website may differ from my original work. If you would like to view the website as it was during my involvement, please <a href="https://web.archive.org/web/20221016191539/https://ishoppurium.com/" target="_blank">click here</a>.</i></p>
                        <a className='button-red float-start' href='https://ishoppurium.com/' target='_blank'><Button className=''>View Project</Button></a>
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
                    <Image src={panoplieOverlay} fluid alt='Panoplie'/>
                    <div className='image-overlay'>
                        <Image src={panoplie} fluid alt='Panoplie'/>
                    </div>
                </div>
                </Col>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Panoplie</h4>
                        <p className='text-start'>I built this Magento 2 based store from scratch, it features a curated selection of truly unique furniture pieces for discerning homeowners.</p>
                        <a className='button-red float-start' href='https://www.panoplie.com/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
            </Row>

            <Row className='mb-5 pb-5 portfolio-row'>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='py-4'>
                        <h4 className='text-start services-title'>Hair Salon</h4>
                        <p className='text-start'>I've crafted this website template with React and Bootstrap, tailored for effortless style and presentation of hair salons and other small businesses.</p>
                        <a className='button-red float-start' href='https://moonlit-syrniki-ced2ff.netlify.app/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className='d-flex align-items-center justify-content-center px-5'>
                    <div className='portfolio-image'>
                        <Image src={hairsalonOverlay} fluid alt='Hair Salon'/>
                        <div className='image-overlay'>
                            <Image src={hairsalon} fluid alt='Hair Salon'/>
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
                        <p className='text-start'>Shopify based store offering wide selection of earplugs. I've created several pages and front-end elements, optimized speed and SEO.</p>
                        <a className='button-red float-start' href='https://eargasm.com/' target='_blank'><Button className=''>View Project</Button></a>
                    </div>
                </Col>
            </Row>
                
            </Container>
        </div>           
        </section>
  )
}
