import React from 'react';
import './index.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import Footer from '../Footer';


const HRCloud = () => {
  return (
    <>
      <div className='hr-card1 d-flex flex-row'>
        <div className='hr-card21'>
          <div className='d-flex flex-row'>
            <img alt="image1" style={{ height: "40px" }} src="images\icone-de-nuage-orange.png" />
            <h1 style={{ fontSize: "20px", paddingTop: "10px" }}>HR CLOUD</h1>
          </div>
          <h1 className='hr-head1'>Run your workforce <br />on the #1 rated HR system</h1>
          <input type="text" className='hr-inputbox' placeholder='   Enter Your Email Address' /><br />
          <button className='hr-button1'>Submit</button>
          <p className='hr-para3'>By clicking "Submit" you agree to Emp Concor Privacy Notice</p>
        </div>
        <img alt="image1" className='hr-img1' src="images\Core-HR.png" />
      </div>
      <div className='hr-card5'>
        <h1 className='hr-para55'>OVERVIEW</h1>
        <h1 className='hr-head5'>All your HR. One global HR platform.</h1>
        <p className='hr-para55'>Emp Concor lets you manage and automate all of your people operations around the world<br /> in one place—from onboarding to offboarding.</p>
      </div>
      <div className='hr-bg1'>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image alt="image1" style={{ height: "100px" }} src="images\image_g.png" rounded />
              <p className='hr-p1'>Onboarding</p>
            </Col>
            <Col xs={6} md={4}>
              <Image alt="image1" style={{ height: "100px" }} src="images\EI-icon2048.webp" roundedCircle />
              <p className='hr-p2'>Employee Changes</p>
            </Col>
            <Col xs={6} md={4}>
              <Image alt="image1" style={{ height: "100px" }} src="images\image_h.png" roundedCircle />
              <p className='hr-p1'>Offboarding</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='d-flex flex-row hr-bg10'>
        <div className='hr-card23'>
          <img alt="image1" style={{ height: "50px" }} src="images\dollar-bill-icon-in-flat-design-style-american-currency-signs-illustration-png.webp" />
          <h1 className='hr-head20'>Global Payroll</h1>
          <p className='hr-para20'>Pay employees and contractors in minutes with a modern payroll system that has a 100% accuracy guarantee.</p>
          <h1 className='hr-head21'>Learn More</h1>
        </div>
        <div className='hr-card24'>
          <img alt="image1" style={{ height: "50px" }} src="images\medical-drone-1945847-1645532.webp" />
          <h1 className='hr-head20'>Benefits</h1>
          <p className='hr-para20'>Connect and automate every hiring process. Automatically give every department the tools and insights they need..</p>
          <h1 className='hr-head21'>Learn More</h1>
        </div>
        <div className='hr-card24'>
          <img alt="image1" style={{ height: "50px" }} src="images\icon-4.png" />
          <Link to="/Recruiting" >
            <h1 className='hr-head20'>Recruiting</h1>
          </Link>
          <p className='hr-para20'>Painlessly manage goals, performance reviews, calibration, and compensation.</p>
          <h1 className='hr-head21'>Learn More</h1>
        </div>
        <div className='hr-card24'>
          <img alt="image1" style={{ height: "50px" }} src="images\pngtree-time-is-money-yellow-clock-icon-with-dollar-symbol-on-white-png-image_4952424.png"/>
          <h1 className='hr-head20'>Time-Attendance</h1>
          <p className='hr-para20'>Hourly employees can easily clock in and out, and their hours automatically sync.</p>
          <h1 className='hr-head21'>Learn More</h1>
        </div>
      </div>
      <div>
        <div className='card110'>
          <img alt="image1" style={{ height: "60px" }} src="images\empConcorlogo.png" />
          <h1 style={{ fontWeight: "bold", fontSize: "30px", paddingTop: "15px", fontFamily: "roboto" }}> Why Emp Concor </h1>
        </div>
        <div className='bg8'>
          <Carousel data-bs-theme="dark" className='bg6'>
            <Carousel.Item>
              <h5 className='head16'> <span className='span10'>Emp Concor Saves</span><br /> Time Money And headaches</h5>
            </Carousel.Item>
            <Carousel.Item>
              <h5 className='head16'>   <span className='span10'>Emp Concor  Makes</span><br /> Its Easy To Manage My Global Team</h5>
            </Carousel.Item>
            <Carousel.Item>
              <h5 className='head16'>   <span className='span10'>Emp Concor  Greate </span><br />Choice For Remote Teams</h5>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HRCloud




