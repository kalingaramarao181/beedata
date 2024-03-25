import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';
const Home = () => {
    return (
        <div my-stable-container>
            <div className='card1 d-flex flex-row'>
                <div className='card21'>
                    <h1 className='head1' style={{ color: "white" }}>Magically Simplify <br />HR, IT, and Finance</h1>
                    <p className='para2' style={{ color: "white" }}>Emp Concor lets you easily manage your employees’<br /> payroll, benefits, expenses, devices, apps & more—in one place.</p>
                    <input type="text" className='inputbox' placeholder='   Enter Your Email Address' /><br />
                    <Link to='regester'>
                        <button className='button1'>Submit</button>
                    </Link>
                    <p className='para3'>By clicking "Submit" you agree to Emp Concor Privacy Notice</p>
                </div>
                <img alt="image1" className='img1' src="images\Recruitment.png" />
            </div>
            <div className='bg4'>
                <div className='card5'>
                    <h1 className='para55'>THE #1 RATED WORKFORCE PLATFORM</h1>
                    <h1 className='head5'>Explore  Emp Concor by product</h1>
                </div>
                <div className='d-flex flex-row' style={{ margin: "50px" }}>
                    <div className='card7'>
                        <div className='card8'>
                            <img alt="image1" className='img3' src="images\icone-de-nuage-orange.png" />
                            <div className='color'>
                                <h1 style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}>Hr Cloud</h1>
                                <p className='para8'>manage and automate employee lifecycle Award-winning HR software built to help</p>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card9' >
                                    <img alt="image1" className='img5' src="images\dollar-coin-outline-icon.webp" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Payroll</p>
                                </div>
                                <div className='d-flex flex-row card9' >
                                    <img alt="image1" className='img5' src="images\pngtree-euro-business-finance-logo-icon-template-png-image_5453467.png" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Benfits</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card9' >
                                    <img alt="image1" className='img5' src="images\image_c.png" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>T & A</p>
                                </div>
                                <div className='d-flex flex-row card9' >
                                    <img alt="image1" className='img5' src="images\image_d.png" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Recruting</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card9' >
                                    <img alt="image1" className='img5' src="images\simple-people-icon-icon-of-grouping-of-people-png.webp" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Pulse</p>
                                </div>
                                <div className='d-flex flex-row card9' >
                                    <img alt="image1" className='img5' src="images\image_e.png" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>PEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card71'>
                        <div className='card8'>
                            <img alt="image1" className='img3' src="images\icone-de-nuage-orange.png" />
                            <div className='color'>
                                <h1 style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}>IT Cloud</h1>
                                <p className='para8'>Easily set up, secure, and manage your people's devices and apps-100% remotely.</p>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card91' >
                                    <img alt="image1" className='img5' src="images\814070.png" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>App Management</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card91' >
                                    <img alt="image1" className='img5' src="images\monitoring-system-icon.webp" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Device Management</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card91' >
                                    <img alt="image1" className='img5' src="images\image_f.png" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Inventory Management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card71'>
                        <div className='card8'>
                            <img alt="image1" className='img3' src="images\icone-de-nuage-orange.png" />
                            <div className='color'>
                                <h1 style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}>Finance Cloud</h1>
                                <p className='para8'>Manage and report on all of your company's spend-in one place</p>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card91' >
                                    <img alt="image1" className='img5' src="images\debit-credit-card-icon.webp" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Corporate Cards</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card91' >
                                    <img alt="image1" className='img5' src="images\hand-holding-us-dollar-icon-2048x1820-v2wgzoyq.png" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Expense Management</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-row card91' >
                                    <img alt="image1" className='img5' src="images\972601.png" />
                                    <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>Bill pay</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card10'>
                    <img alt="image1" style={{ height: "60px" }} src="images\81nwobjayd181.webp" />
                    <h1 style={{ fontWeight: "bold", fontSize: "40px", paddingTop: "15px", fontFamily: "roboto" }}>Emp Concor Unity</h1>
                    <p style={{ fontFamily: "roboto", paddingTop: "10px" }}>Built on the first Unified Workforce Platform, Emp Concor has <br /> every app you need to effortlessly run a global workforce-from HR and Finance to IT</p>
                </div>
                <div className='d-flex flex-row card12'>
                    <div className='d-flex flex-row card92' >
                        <img alt="image1" className='img5' src="images\pngtree-euro-business-finance-logo-icon-template-png-image_5453467.png" />
                        <p style={{ paddingLeft: "7px", fontWeight: "bold", margin: '4px' }}>Analystics</p>
                    </div>
                    <div className='d-flex flex-row card93' >
                        <img alt="image1" className='img10' src="images\pngtree-euro-business-finance-logo-icon-template-png-image_5453467.png" />
                        <p style={{ paddingLeft: "-1px", fontWeight: "bold", margin: '4px' }}>Workflow Automation</p>
                    </div>
                    <div className='d-flex flex-row card93' >
                        <img alt="image1" className='img5' src="images\pngtree-euro-business-finance-logo-icon-template-png-image_5453467.png" />
                        <p style={{ paddingLeft: "7px", fontWeight: "bold", margin: '4px' }}>Policics</p>
                    </div>
                    <div className='d-flex flex-row card93' >
                        <img alt="image1" className='img5' src="images\pngtree-euro-business-finance-logo-icon-template-png-image_5453467.png" />
                        <p style={{ paddingLeft: "7px", fontWeight: "bold", margin: '4px' }}>Permissions</p>
                    </div>
                </div>
            </div>
            <div className='card13 d-flex flex-row'>
                <div className='card16'>
                    <h1 className='head11'>GLOBAL WORKFORCE MANAGEMENT</h1>
                    <h1 className='head12'>Everything you need to <br />run a global workforce</h1>
                    <p className='para10'>Whether you’ve got a small team in the US or a fully distributed workforce <span className='span12'>around the world</span>  Emp Concor gives you a  <span className='span12'>single system</span> to hire, pay, and manage employees and contractors.</p>
                    <div className='card15'>
                        <div className='d-flex flex-row card14' >
                            <img alt="image1" style={{ height: "50px" }} src="images\image_i.png" />
                            <p className='para14' >Onboard employees and contractors in 90 seconds</p>
                        </div>
                        <div className='d-flex flex-row card14' >
                            <img alt="image1" style={{ height: "50px" }} src="images\image_j.png" />
                            <p className='para14' >Pay everyone in their local currency—in minutes</p>
                        </div>
                        <div className='d-flex flex-row card14' >
                            <img alt="image1" style={{ height: "50px" }} src="images\image_k.png" />
                            <p className='para14' >Manage HR, IT, and Finance in one global system</p>
                        </div>
                        <div className='d-flex flex-row card14' >
                            <img alt="image1" style={{ height: "50px" }} src="images\check.png" />
                            <p className='para14' >Automate your global compliance work</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt="image1" className='img11' src="images\globe-home.png" />
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
            <div className='bg7 d-flex'>
                <div className='card17'>
                    <img alt="image1" style={{ height: "50px" }} src="images\image_l.png" />
                    <p className='para17'>See how you can automate your workflows and reporting with Emp Concor growing library of pre-built templates.</p>
                    <h1 className='head17'>Browse All Templates</h1>
                </div>
                <div className='card18'>
                    <h1>Get a demo—live or on demand</h1>
                    <p className='para18'>See how Emp Concor can help you manage all of your employee data and operations in one place, and easily grow your business from employees.</p>
                    <button className='button10'>Request Live demo</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home