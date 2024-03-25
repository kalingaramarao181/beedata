import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Footer from '../Footer';
import './index.css';

const ITCloud = () => {
  return (
    <>
      <div className='hr-card1 d-flex flex-row'>
        <div className='hr-card21'>
          <div className='d-flex flex-row'>
            <img alt="image1" style={{ height: "40px" }} src="images\icone-de-nuage-orange.png" />
            <h1 style={{ fontSize: "20px", paddingTop: "10px" }}> IT CLOUD</h1>
          </div>
          <h1 className='hr-head1'>MAKE It EASY TO <br /> MANAGE YOUR IT</h1>
          <p>Effortlessly manage employees' apps, devices, data, and security—no matter where they are—in one unified system</p>
          <input type="text" className='hr-inputbox' placeholder='   Enter Your Email Address' /><br />
          <button className='hr-button1'>Submit</button>
          <p className='hr-para3'>By clicking "Submit" you agree to Emp Concor Privacy Notice</p>
        </div>
        <img alt="image1" className='hr-img1' src="images\Payroll.png" />
      </div>
      <div className='hr-card5'>
        <h1 className='hr-para55'>IT CLOUD OVERVIEW</h1>
        <h1 className='hr-head5'>One IT platform to rule them all</h1>
        <p className='hr-para55'>Emp Concor brings all your IT systems and HR data together<br />So you can easily manage everyone's IT—from onboarding to offboarding.</p>
      </div>
      <div className='hr-bg1'>
        <Container>
          < div className='d-flex flex-row it-bg'>
            <div className='it-bg1'>
              <Col xs={6} md={4}>
                <Image alt="image1" style={{ height: "60px" }} src="images\image_g.png" rounded />
                <p className='it-p1'>Onboarding</p>
              </Col>
              <Col xs={6} md={4}>
                <Image alt="image1" className='it-img1' style={{ height: "60px" }} src="images\EI-icon2048.webp" roundedCircle />
                <p className='it-p2'>Employee Changes</p>
              </Col>
              <Col xs={6} md={4}>
                <Image alt="image1" className='it-img1' style={{ height: "60px" }} src="images\image_h.png" roundedCircle />
                <p className='it-p1'>Offboarding</p>
              </Col>
            </div>
            <div class="embed-responsive embed-responsive-16by9" className='it-bg2'>
              <iframe title='head' style={{ height: "400px", width: "600px" }} class="embed-responsive-item" src="https://rippling.imgix.net/images/ITCloud-DeviceOnboarding_enUS.mp4" allowfullscreen></iframe>
            </div>
            <div className='it-bg3'>
              <Col xs={6} md={4}>
                <Image alt="image1" style={{ height: "60px" }} src="images\main-menu-icon-in-flat-design-style-application-list-signs-illustration-png (1).webp" rounded />
                <p className='it-p11'>Apps</p>
              </Col>
              <Col xs={6} md={4}>
                <Image alt="image1" className='it-img1' style={{ height: "60px" }} src="images\image_m.png" roundedCircle />
                <p className='it-p3'>Devices</p>
              </Col>
              <Col xs={6} md={4}>
                <Image alt="image1" className='it-img1' style={{ height: "60px" }} src="images\pngtree-delivery-design-order-package-vector-picture-image_10448897.png" roundedCircle />
                <p className='it-p1'>Inventory</p>
              </Col>
            </div>
          </div>
        </Container>
      </div>
      <div className='it-card5'>
        <h1 className='it-para55'>THE EMP CONCOR DIFFERENCE</h1>
        <h1 className='it-head5'>Why run your IT on Emp Concor</h1>
      </div>
      <div className='d-flex flex-row it-bg12'>
        <div className='it-bg10'>
          <img alt="image1" style={{ height: "30px" }} src="images\image_n.png" />
          <h1 className='it-head10'>Set up new hires 10x faster</h1>
          <p className='it-para10'>Emp Concor next-generation workflow automation allows anyone—from HR to IT—to fully set up employee’s computers and apps in just 90 seconds.</p>
        </div>
        <div className='it-bg11'>
          <img alt="image1" style={{ height: "30px" }} src="images\image_o.png" />
          <h1 className='it-head10'>Quickly secure your company</h1>
          <p className='it-para10'>Deploy security best practices across your apps and devices in minutes. Just toggle on a security feature, like SSO, and customize it to fit your needs.</p>
        </div>
        <div className='it-bg11' >
          <img alt="image1" style={{ height: "30px" }} src="images\icon-of-energy-thunder-lightning-bolt-symbol-or-electricity-power-electric-sign-symbol-free-png.webp" />
          <h1 className='it-head10'>Simplify compliance, like SOC</h1>
          <p className='it-para10'>Emp Concor lets you implement the security protocols—and pull the audit data—required for SOC, GDPR, and other compliance standards. All in a few clicks.</p>
        </div>
        <div className='it-bg11'>
          <img alt="image1" style={{ height: "30px" }} src="images\Black Recycling Symbol (U+267B).png" />
          <h1 className='it-head10'>Bring IT and HR together</h1>
          <p className='it-para10'>Only Emp Concorconnects all your HR and IT data to one employee record, right out of the box. That way all your HR and IT systems stay in sync, automatically.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ITCloud