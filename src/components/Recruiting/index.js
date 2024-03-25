import { Component } from "react";
import "./index.css";
import RegesterFarm from "../RegesterFarm"
import Admin from "../Admin";
import Cookies from "js-cookie";

const ratingList = [
    {
        id:1,
        ratingImg: "https://t3.ftcdn.net/jpg/05/14/95/44/240_F_514954494_iL8FDExgkI3R7A3QNZaXvNYWYog0b3KK.jpg",
        title: "SOFTWARE ADIVCE",
        descreption: "4.9 Star Rating",
    },
    {
        id:2,
        ratingImg: "https://t3.ftcdn.net/jpg/05/14/95/44/240_F_514954494_iL8FDExgkI3R7A3QNZaXvNYWYog0b3KK.jpg",
        title: "GT",
        descreption: "4.9 Star Rating",
    },
    {
        id:3,
        ratingImg: "https://t3.ftcdn.net/jpg/05/14/95/44/240_F_514954494_iL8FDExgkI3R7A3QNZaXvNYWYog0b3KK.jpg",
        title: "MEGAZINE",
        descreption: "Editor's Choice",
    },
    {
        id:4,
        ratingImg: "https://t3.ftcdn.net/jpg/05/14/95/44/240_F_514954494_iL8FDExgkI3R7A3QNZaXvNYWYog0b3KK.jpg",
        title: "CAPTERRA",
        descreption: "4.9 Star Rating",
    },
    {
        id:1,
        ratingImg: "https://t3.ftcdn.net/jpg/05/14/95/44/240_F_514954494_iL8FDExgkI3R7A3QNZaXvNYWYog0b3KK.jpg",
        title: "GETAPP",
        descreption: "4.9 Star Rating",
    },
]

const cloudCardList = [
    {
        id:1,
        imgUrl: "https://play-lh.googleusercontent.com/fcf5JT6Aky_U608mpy7XL30zOT4lPQgxKD8KUZH4HtacehXNe3GX4XcWOQ4Xz7-LfxQ",
        title: "Global Payroll",
        content: "Pay Employes & contractors in minutes with a modran payroll system that has a 100% accuracy guarantee",
        buttonText: "Learn More",
        altText: "icon6"
    },
    {
        id:2,
        imgUrl: "https://w7.pngwing.com/pngs/408/488/png-transparent-computer-icons-star-membership-benefits-miscellaneous-blue-logo.png",
        title: "Benefits",
        content: "Manage Your team benifits helth insurence to retirement - in one integted system",
        buttonText: "Learn More",
        altText: "icon6"
    },
    {
        id:3,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeT1GaKbmDyzPwv-hAV5BPtzG7khu0EguSQ&usqp=CAU",
        title: "Performance Mangement",
        content: "Paonlessly manage goals, performance reviews. calibration, and compensation.",
        buttonText: "Learn More"
    }
    ,{
        id:4,
        imgUrl: "https://www.freeiconspng.com/thumbs/recruitment-icon/recruitment-icon-2.png",
        title: "Recruiting",
        content: "Connect and automate every hiring process. Automatically give every deportment the tolls and insights they need.",
        buttonText: "Learn More",
        altText: "icon6"
    },
    {
        id:5,
        imgUrl: "https://avb.com.cy/wp-content/uploads/2020/08/58-581744_time-attendance-system-png-hd-employee-self-service112-300x294.png",
        title: "Time and Attendance",
        content: "Hourly employees can easily clock in and out, and their hours automatically sync.",
        buttonText: "Learn More",
        altText: "icon6"
    }
]

const hrCloudCardList = [
    {
        id:1,
        imgUrl: "https://play-lh.googleusercontent.com/fcf5JT6Aky_U608mpy7XL30zOT4lPQgxKD8KUZH4HtacehXNe3GX4XcWOQ4Xz7-LfxQ",
        name: "Payroll"
    },
    {
        id:2,
        imgUrl: "https://w7.pngwing.com/pngs/408/488/png-transparent-computer-icons-star-membership-benefits-miscellaneous-blue-logo.png",
        name: "Benefits"
    },
    {
        id:3,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeT1GaKbmDyzPwv-hAV5BPtzG7khu0EguSQ&usqp=CAU",
        name: "Time"
    },
    {
        id:4,
        imgUrl: "https://www.freeiconspng.com/thumbs/recruitment-icon/recruitment-icon-2.png",
        name: "More"
    },
]

class Recruiting extends Component{
    state = {pageChange:1, email:"", openRegesterFarm:false}

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    onSubbmitButton = () => {
        this.setState({openRegesterFarm: true})
    }

    //HR CLOUD PAGE A
    renderHrcloudPageA = () => {
        return(
            <div className="hr-cloud-container">
            <div className="cp-container">
                <div className="cp-left-page">
                    <div className="cp-title-container">
                        <img className="cloud-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdh7YHdvUP8NZRvAyE7uPMOgicGmVJyzmww&usqp=CAU" alt="cloudIcon"/>
                        <h1 className="cp-title">Recruiting</h1>
                    </div>
                    <h1 className="cp-heading">Run your workforce on the #1 rated System</h1>
                    <div className="cp-input-container">
                        <p className="input-name">Email Address</p>
                        <input className="input" type="text" onChange={this.onChangeEmail} placeHolder="What's your Email" />
                    </div>
                    <button className="cp-btn" type="button" onClick={this.onSubbmitButton}>Visit EmpConcor</button>
                    <p className="cp-description">By clicking "See EmpConcor" you agree to EmpConcor's Privacy Notice</p>
                </div>
                <div>
                    <img className="office-img" alt="office" src="https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg" />
                </div>
            </div>
            <ul className="rating-container">
                {ratingList.map((eachItem) => (
                    <li className="list-item">
                        <img className="rating-img" src={eachItem.ratingImg} alt={eachItem.imgAlt} />
                        <h1 className="title">{eachItem.title}</h1>
                        <p className="descreption">{eachItem.descreption}</p>
                    </li>
                ))}
            </ul>
        </div>
        )
    }
    //HR CLOUD PAGE A (CLOSE)

    //DIFFERENT CLOUD PAGES RENDERING
    clickOnboarding = () => {
        this.setState({pageChange: 1})
    }
    clickTransitions = () => {
        this.setState({pageChange: 2})
    }
    clickOffboarding = () => {
        this.setState({pageChange: 3})
    }

    renderPage = () => {
        const {pageChange} = this.state
        if (pageChange === 1){
            return (
                <div className="ob-page-container">
                    <div className="ob-page-part1">
                        <h1 className="ob-page-head1">ONBOARDING AUTOMATION</h1>
                        <p className="ob-page-content">Set up employees and contractors 
                        across the globe with everything they need—from device 
                        and trainings to corporate cards—in just 90 seconds.
                        </p>
                    </div>
                    <div>
                        <img className="onboarding-image" src="https://www.lseg.com/content/dam/risk-intelligence/en_us/images/graphic-artwork/illustrations/standalone/lseg-kyc-and-digital-onboarding-825x464.svg" alt="globalImg" />
                    </div>
                </div>
            )
        }else if (pageChange === 2){
            return (
                <div className="ob-page-container">
                    <div className="ob-page-part1">
                        <h1 className="ob-page-head1">TRANSITION AUTOMATION</h1>
                        <h1 className="ob-page-head2">Promote employees in 90 seconds</h1>
                        <p className="ob-page-content">Set up employees and contractors 
                        across the globe with everything they need—from device 
                        and trainings to corporate cards—in just 90 seconds.
                        </p>
                    </div>
                    <div>
                        <img className="onboarding-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gwirt_96AjSYTPVeEvsxeHQXT9LnMaY5xA&usqp=CAU" alt="globalImg" />
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="ob-page-container">
                    <div className="ob-page-part1">
                        <h1 className="ob-page-head1">OFFBOARDING AUTOMATION</h1>
                        <h1 className="ob-page-head2">Offboard employees in 90 seconds</h1>
                        <p className="ob-page-content">Every employee life event—from a promotion to a marriage—
                        creates a cascade of paperwork and related tasks. 
                        EmpConcor automates this busy work so you can focus on the work-work.
                        </p>
                    </div>
                    <div>
                        <img className="onboarding-image" src="https://assets-global.website-files.com/6213b42b1ec3eeffac87a582/62557b2f3b4c541d63e9e200_what-is-the-employee-lifecycle.jpeg" alt="globalImg" />
                    </div>
                </div>
            )
        }
    }
    //DIFFERENT CLOUD PAGES RENDERING (CLOSE)



    //HR CLOUD PAGE B
    renderHrcloudPageB = () => {
        return(
            <>
            <div className="pageb-container">
            <p className="title">OVERVIEW</p>
            <h1 className="heading1">All your HR. One global HR platform.</h1>
            <p>EmpConcor lets you manage and automate all of your people operations around the world in one place—from onboarding to offboarding.</p>
            <img src="https://beedatatech.com/EmpConcorpics/shot1.png" alt="shot1" />
            <img src="https://img.freepik.com/premium-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110090.jpg" className="office-img" alt="office"/>
            <img src="https://beedatatech.com/EmpConcorpics/shot2.png" alt="shot2" />
            <ul className="cloud-card-container">
                {cloudCardList.map((eachItem) => (
                    <li className="list-item1">
                        <img className="card-icon" src={eachItem.imgUrl} alt={eachItem.altText} />
                        <h1 className="card-heading">{eachItem.title}</h1>
                        <p className="card-content">{eachItem.content}</p>
                        <p className="card-button">{eachItem.buttonText}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className="page-c-container">
            <div className="page-c-part1">
                <h1 className="page-c-head1">GLOBEL HRIS</h1>
                <h1 className="page-c-head2">One HR system for your team <span className="span-el">every where</span></h1>
                <p className="page-c-content">With EmpConcor, you can finally bring all of your employee 
                    data from around the world into a single system. 
                    EmpConcor dynamically localizes everything—from fields and 
                    documents to currencies—based on work location.
                </p>
                <p className="page-c-about">Learn About EmpConcor for Globel Teams</p>
            </div>
            <div>
                <img className="global-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYVb21mLflUjNUHraNPWk3q52fBh2A9AbAg&usqp=CAU" alt="globalImg" />
            </div>
        </div>
        <div className="cloud-page-d-container">
                <ul className="cloud-page-nav">
                    <li className="cloud-page-nav-item">
                        <button className="cp-nav-button" onClick={this.clickOnboarding} type="button">Onbording</button>
                    </li>
                    <li className="cloud-page-nav-item">
                        <button className="cp-nav-button" onClick={this.clickTransitions} type="button">Transitions</button>
                    </li>
                    <li className="cloud-page-nav-item">
                        <button className="cp-nav-button" onClick={this.clickOffboarding} type="button">Offboarding
                        </button>
                    </li>
                </ul>
                {this.renderPage()}  
            </div>
            <div className="pageb-container">
            <p className="title">EMP CONCOR UNITY</p>
            <h1 className="title2">One source of truth for HR analytics, policies, and more</h1>
            <p>EmpConcor connects all of your HR systems, so you can update, automate, and report on everything in a single unified platform.</p>
            <p>Learn More</p>
            <div className="hr-card-container">
                <h1>HR Cloud</h1>
                <ul className="hr-card-items-container">
                    {hrCloudCardList.map((eachItem) => (
                        <li className="hrcloud-card-list-item">
                            <img className="hrcard-icon" src={eachItem.imgUrl} alt="text" />
                            <h1 className="hrcloud-card-heading">{eachItem.name}</h1>
                        </li>
                    ))}
                </ul>
            </div>
            <img src="https://beedatatech.com/EmpConcorpics/shot2.png" alt="shot2" />
            
            <div className="hr-bottom-card-container">
                <img className="hr-bottom-icon" src="https://www.freeiconspng.com/uploads/letter-e-icon-png-22.png" alt="icon" />
                <h1 className="hr-bottom-heading">EmpConcor Unity</h1>
                <p className="hr-bottom-descreption">Built On the first unified workforse platform EmpConcor has every add you need to Effrotlessly
                    globel workforse from HR to IT.
                </p>
            </div>
            <div className="hr-bottom2-card-container">
                <div className="hr-bottom3-card-container">
                <div className="analytics-container">
                    <img className="analytics-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBxgGkG-plps8m75vkLW4z5_XWdI2Wwu9rw&usqp=CAU" alt="analytics" />
                    <p className="analytics-name">Analytics</p>
                </div>
                <div className="analytics-container">
                    <img className="analytics-icon" src="https://banner2.cleanpng.com/20200807/ox/transparent-iteration-icon-scrum-icon-scrum-process-icon-5f2df1c78f7904.6157080215968465355877.jpg" alt="analytics" />
                    <p className="analytics-name">Workflow Automation</p>
                </div>
                <div className="analytics-container">
                    <img className="analytics-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucQXRLrlWI91j07s5ldRUDZS-V-YUYEP97Q&usqp=CAU" alt="analytics" />
                    <p className="analytics-name">Policies</p>
                </div>
                <div className="analytics-container">
                    <img className="analytics-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOxyviOYDseAio8QJGJlNyy5eMEXyZ74cWwB3I2PVltA_Jl78HmB4bzI4TQton7B_oeU&usqp=CAU" alt="analytics" />
                    <p className="analytics-name">Permissions</p>
                </div>
                </div>
                <div className="emp-group-container">
                    <img className="group-img" src="https://cdn2.hubspot.net/hubfs/548616/Imported_Blog_Media/GA-engaged.jpg" alt="groupImg" />
                    <h1 className="ending-head">Employee Graph</h1>
                    <p className="ending-content">Single sorce of truth for workforce data</p>
                </div>
            </div>  
        </div>
         </>
        )
    }
    //HR CLOUD PAGE B (CLOSE)

    renderSelectedPage = () => {
        const {openRegesterFarm, email} = this.state
        if (openRegesterFarm === true){
            return (
                <RegesterFarm email={email}/>
            )
        }else{
            return (
                <div className="hr-cloud-container">
                    {this.renderHrcloudPageA()}
                    {this.renderHrcloudPageB()}
                </div> 
            )
        }
    }


    render() {
        const token =  Cookies.get("jwt_token")
        return(
            <>{(token === undefined) ? this.renderSelectedPage() : <Admin />}</>
        )
    }
}

export default Recruiting