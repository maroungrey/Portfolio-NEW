import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const servicesData = [
  {
      id: 1,
      icon: "fa-solid fa-mobile-screen-button",
      title: 'Responsive Website Design',
      description: "I design websites optimized for seamless user experiences on all devices. With mobile-first builds and intuitive navigation that embed your brand directly into your customers' hands.",
      color: "#dbdbdb"
  },
  {
      id: 2,
      icon: "fa-solid fa-laptop",
      title: 'Ecommerce Store Creation',
      description: "I specialize in building fully customized online stores on flexible platforms like Shopify and Magento, integrating modern features and functionality to unlock new sales opportunities.",
      color: "#dbdbdb"
  },
  {
      id: 3,
      icon: "fa-solid fa-code",
      title: 'Custom Integrations',
      description: "I bring innovative visions to life by building custom features that extend your platform's functionality tailored to your specific business needs: Web Apps, AI Integrations, Dashboards.",
      color: "#dbdbdb"
  },
  {
      id: 4,
      icon: "fa-solid fa-magnifying-glass",
      title: 'SEO & Digital Marketing',
      description: "I boost online visibility and website revenue potential through analytics-driven SEO and conversion rate optimization that drive targeted traffic and identify growth opportunities.",
      color: "#dbdbdb"
  }
]

export default function Services() {
  return (
    <section id='services'>   
        <div className='text-center pt-5'>
          <h1 className='section-title'>Services</h1>
          <p className='section-subtitle'>What do I do</p>
        </div>

        <div id='services-bg'>
        <Container className='pb-5'>
            <Row className='py-5'>
                {
                    servicesData.map(services => {
                        return (
                            <Col sm={12} lg={6} className='px-4' key={services.id}>
                                <div className='d-flex justify-content-center m-2 services-card p-4' style={{backgroundColor: services.color}}>
                                  <div className='d-flex justify-content-center services-icon'>
                                    <i className={services.icon + ' align-items-center d-flex'}></i>
                                  </div>
                                  <div >
                                    <h5 className='services-title'>{services.title}</h5>
                                    <p>{services.description}</p>
                                  </div>  
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
          </Container>
        </div>
    </section>
  )
}
