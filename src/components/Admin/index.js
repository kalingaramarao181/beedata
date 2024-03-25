import "./index.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Cookies from "js-cookie";
import { RiDeleteBin5Line } from "react-icons/ri";
import Popup from "../Popup";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";

const Admin = () => {
  const [userData, setAdminData] = useState([]);
  const [intData, setIntData] = useState([]);
  const [intDataDB, setIntDataDB] = useState([]);
  const [offData, setOffData] = useState([])
  const [offDataDB, setOffDataDB] = useState([]);
  const [onboardingData, setOnboardingData] = useState([])
  const [onboardingDataDB, setOnboardingDataDB] = useState([])
  const [employeDataDB, setEmployeDataDB] = useState([])
  const [hrData, setHRData] = useState([]);
  const [checkboxStatus, setCheckboxStatus] = useState({isChecked:false, userId:""})
  const [intCheckboxStatus, setIntCheckboxStatus] = useState({isChecked:false, userId:""})
  const [offCheckboxStatus, setOffCheckboxStatus] = useState({isChecked:false, userId:""})
  const [onbCheckboxStatus, setONBCheckboxStatus] = useState({isChecked:false, userId:""})
  const [role, setRole] = useState("")
  const [emailData, setEmailData] = useState({to: '', name:"", subject: '', body: ''});
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [conErr, setConErr] = useState()
  const [demoData, setDemoData] = useState()
  const [dataView, setDataView] = useState("APPLICATIONS")
  const token = Cookies.get("jwt_token");
  const loginStatus = Cookies.get("login_status")

  //GET USER DATA
  useEffect(() => {
    axios.get('http://74.208.28.169:5000/user')
      .then(res => setAdminData(res.data))
      .catch(err => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://74.208.28.169:5000/')
      .then(res => console.log(res.data))
      .catch(err => {
        alert(err);
      });
  }, []);

  //GET HR & ADMIN DETAILS
  useEffect(() => {
    if (loginStatus === "HR"){
      axios.get('http://74.208.28.169:5000/hrdetails')
      .then(res => setHRData(res.data))
      .catch(err => {
        alert(err);
      });
    }else if (loginStatus === "ADMIN"){
      axios.get('http://74.208.28.169:5000/admindata')
      .then(res => setHRData(res.data))
      .catch(err => {
        alert(err);
      });
    }   
  }, [loginStatus]);

  //GET INTERVIEW DATA
  useEffect(() => {
    axios.get('http://74.208.28.169:5000/interviewdata')
      .then(res =>{
        let conData = []
        for (let dbData of res.data){
          if (dbData.accesscode === token){
            conData.push(dbData)
            setIntData(conData)
          }
        }
      })
      .catch(err => {
        alert(err);
      });
  }, [token]);

  //GET ACCEPTED DATA
  useEffect(() => {
    axios.get('http://74.208.28.169:5000/offeracpdata')
      .then(res =>{
        let conData = []
        for (let dbData of res.data){
          if (dbData.accesscode === token){
            conData.push(dbData)
            setOffData(conData)
          }
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

//GET ONBOARDING DATA
useEffect(() => {
  axios.get('http://74.208.28.169:5000/onboarding')
    .then(res =>{
      let conData = []
      for (let dbData of res.data){
        if (dbData.accesscode === token){
          conData.push(dbData)
          setOnboardingData(conData)
        }
      }
    })
    .catch(err => {
      alert(err);
    });
}, [token]);

//////////////////////////////////////////////////////////////////////////////////////

  //DELETE USER FROM DATABASE
  const onClickDelete = async (id) => {
    try{
      await axios.delete("http://74.208.28.169:5000/user/"+id)
      window.location.reload()
    }catch(err){
      alert(err)
    }
  }

  //DELETE INTERVIEW USER FROM DATABASE
  const onClickIntDelete = async (id) => {
    try{
      await axios.delete("http://74.208.28.169:5000/interviewdata/"+id)
      window.location.reload()
    }catch(err){
      alert(err)
    }
  }

  
  //DELETE OFFER USER FROM DATABASE
  const onClickOffDelete = async (id) => {
    try{
      await axios.delete("http://74.208.28.169:5000/offerdata/"+id)
      window.location.reload()
    }catch(err){
      alert(err)
    }
  }
  

  //DELETE ONBOARDING USER FROM DATABASE
  const onClickOnboardingDelete = async (id) => {
    try{
      await axios.delete("http://74.208.28.169:5000/onboarding/"+id)
      window.location.reload()
    }catch(err){
      alert(err)
    }
  }

//////////////////////////////////////////////////////////////////////////////////////

  //SELECT APPLICATION USER DATA
  const onClickAddToInterview = (id) => {
    for (let eachItem of userData){
      if (eachItem.id === id){
        setIntDataDB(eachItem)
      }
    }
  }

  //SELECT INTERVIEW USER DATA
  const onClickAddToAccept = (id) => {
    for (let eachItem of intData){
      if (eachItem.id === id){
        setOffDataDB(eachItem)
      }
    }
  }

  //SELECT OFFER ACCEPT USER DATA
  const onClickAddToOnboarding = (id) => {
    for (let eachItem of offData){
      if (eachItem.id === id){
        setOnboardingDataDB(eachItem)
      }
    }
  }

  //SELECT employe USER DATA
  const onClickAddToEmploye = (id) => {
    for (let eachItem of onboardingData){
      if (eachItem.id === id){
        setEmployeDataDB(eachItem)
      }
    }
  }

//////////////////////////////////////////////////////////////////////////////////////
  
  //ADD APPLICATION USER TO INTERVIEW DATABASE
  const onClickAddToInterviewSub = (id) => {
    if (checkboxStatus.isChecked){
    const accesscode = token
    const {name, position, experience, location, salary, email, phoneno, about, address} = intDataDB
    console.log(phoneno)
    axios.post("http://74.208.28.169:5000/interviewdata" , {accesscode, name, position, experience, location, salary, email, phoneno, about, address})
    .then(res => {
      alert("Successfully Added")
      window.location.reload()
    })
    .catch(err => alert(err))
  }else{
    alert("Please Select Data")
  }
  }

  //ADD INTERVIEW USER DATA TO OFFER_ACCEPT DATABASE
  const onClickAddToAcceptSub = async (id) => {
    if (intCheckboxStatus.isChecked){
      const accesscode = token
    const {name, position, experience, location, salary, email, phoneno, about, address} = offDataDB
    await axios.post("http://74.208.28.169:5000/offeracpdata" , {accesscode, name, position, experience, location, salary, email, phoneno, about, address})
    .then(res => {
      alert("Successfully Added")
      window.location.reload()
    })
    .catch(err => alert(err))

    await axios.delete("http://74.208.28.169:5000/interviewdata/"+id)
  }else{
      alert("Please Select Data")
    }
  }

  //ADD OFFER_ACCEPT USER DATA TO ONBOARDING DATABASE
  const onClickAddToOnboardingSub = async (id) => {
    if (offCheckboxStatus.isChecked){
      const accesscode = token
    const { name, position, experience, location, salary, email, phoneno, about, address} = onboardingDataDB
    await axios.post("http://74.208.28.169:5000/onboarding" , {accesscode, name, position, experience, location, salary, email, phoneno, about, address})
    .then(res => {
      alert("Successfully Added")
      window.location.reload()
    })
    .catch(err => alert(err))

    await axios.delete("http://74.208.28.169:5000/offerdata/"+id)
  }else{
      alert("Please Select Data")
    }
  }

  //ADD ONBOARDING USER DATA TO EMPLOYE DATABASE
  const onClickAddToEmployeSub = async (id) => {
    if (onbCheckboxStatus.isChecked){
      const accesscode = token
    const {name, position, experience, location, salary, email, phoneno, about, address} = employeDataDB
    const password = phoneno
    await axios.post("http://74.208.28.169:5000/employedata" , {accesscode, name, position, experience, location, salary, email, phoneno, about, address, password, role})
    .then(res => {
      alert("Successfully Added")
      window.location.reload()
    })
    .catch(err => console.log(err))

    await axios.delete("http://74.208.28.169:5000/onboarding/"+id)
  }else{
      alert("Please Select Data")
    }
  }

  //POST MAIL API
  const handleSendEmail = () => {
    axios.post('http://74.208.28.169:5000/send-email', emailData)
      .then(response => {
        setConErr("Successfully Send");
      })
      .catch(error => {
        setConErr("Something Wrong");
      });
    setEmailData({to:"", subject:"", body:"" })
  };


  const openPopup = (mail, sendName) => {
    setPopupOpen(true);
    setEmailData({to:mail, name:sendName})
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //ADMIN DATA VIEW ITRATION
  let LoginHRIcon = null
  let LoginHRName = null
  for (let data of hrData){
    if (data.email === token){
      LoginHRIcon = data.name[0]
      LoginHRName = data.name
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //DISPLAY USER DATA FROM DATABASE
  const displayUserData = () => {
    if (dataView === "APPLICATIONS"){
      return (
        <>
        {userData.map(user => (
              <tr className="table1">
                <td><button type="button" className="edit-button-check" onClick={e => onClickAddToInterview(user.id)}><input onChange={e => setCheckboxStatus({isChecked:e.target.checked,userId:user.id})} className="checkbox-ele" type="checkbox"/></button></td>
                <td className="db-item-name">{user.name}</td>
                <td className="db-item-name">{user.position}</td>
                <td className="db-item-name">{user.experience}</td>
                <td className="db-item-name">{user.location}</td>
                <td className="db-item-name">{user.salary}</td>
                <td className="db-item-name">{user.email}</td>
                <td className="db-item-name">{user.phoneno}</td>
                <td className="db-item-name">{user.address}</td>
                <td><button type="button" className={checkboxStatus.isChecked && checkboxStatus.userId === user.id ? `edit-button` : `edit-button-stop`} onClick={e => onClickAddToInterviewSub(user.id)}>Submit</button></td>
                <td><button type="button" className="delete-button" onClick={e => onClickDelete(user.id)}><RiDeleteBin5Line /></button></td>
              </tr>
            ))}
        </>
      )
   }else if (dataView === "INTERVIEW"){
    return (
      <>
      {intData.map(user => (
            <tr className="table1">
              <td><button type="button" className="edit-button-check" onClick={e => onClickAddToAccept(user.id)}><input onChange={e => setIntCheckboxStatus({isChecked:e.target.checked,userId:user.id})} className="checkbox-ele" type="checkbox"/></button></td>
              <td className="db-item-name">{user.name}</td>
              <td className="db-item-name">{user.position}</td>
              <td className="db-item-name">{user.experience}</td>
              <td className="db-item-name">{user.location}</td>
              <td className="db-item-name">{user.salary}</td>
              <td className="db-item-name">{user.email}</td>
              <td className="db-item-name">{user.phoneno}</td>
              <td className="db-item-name">{user.address}</td>
              <td><button type="button" className={intCheckboxStatus.isChecked && intCheckboxStatus.userId === user.id ? `edit-button` : `edit-button-stop`} onClick={e => onClickAddToAcceptSub(user.id)}>Submit</button></td>
              <td><button type="button" className="delete-button" onClick={e => onClickIntDelete(user.id)}><RiDeleteBin5Line /></button></td>
            </tr>
          ))}
      </>
    )
   }else if (dataView === "OFFER"){
    return (
      <>
      {offData.map(user => (
            <tr className="table1">
              <td><button type="button" className="edit-button-check" onClick={e => onClickAddToOnboarding(user.id)}><input onChange={e => setOffCheckboxStatus({isChecked:e.target.checked,userId:user.id})} className="checkbox-ele" type="checkbox"/></button></td>
              <td className="db-item-name">{user.name}</td>
              <td className="db-item-name">{user.position}</td>
              <td className="db-item-name">{user.experience}</td>
              <td className="db-item-name">{user.location}</td>
              <td className="db-item-name">{user.salary}</td>
              <td className="db-item-name">{user.email}</td>
              <td className="db-item-name">{user.phoneno}</td>
              <td className="db-item-name">{user.address}</td>
              <td><button type="button" className={`edit-button-1`} onClick={() => openPopup(user.email, user.name)}>SendMail</button></td>
              <td classname="conformation-icon-td">{user.accept === "confirm" ? <IoCheckmarkDoneCircleOutline className="conformation-icon-1" />: null}{user.accept === "notConfirm" ? <GiCancel  className="conformation-icon" />: null}</td>
              <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <div className="send-mail-container">
                  <input className="send-mail-input" value={emailData.to} type="text" name="to" placeholder="Recipient Email" onChange={handleChange} required/>
                  <input className="send-mail-input" value={emailData.subject} type="text" name="subject" placeholder="Subject" onChange={handleChange} required/>
                  <textarea className="send-mail-textarea" value={emailData.body} cols={20} rows={4} name="body" placeholder="Email Body" onChange={handleChange} required></textarea>
                  <button className="send-mail-btn" onClick={handleSendEmail}>Send Email</button>
                  {conErr ? <p>{conErr}</p> : null}
                </div>
              </Popup>
              <td><button type="button" className={offCheckboxStatus.isChecked && offCheckboxStatus.userId === user.id ? `edit-button` : `edit-button-stop`} onClick={e => onClickAddToOnboardingSub(user.id)}>Submit</button></td>
              <td><button type="button" className="delete-button" onClick={e => onClickOffDelete(user.id)}><RiDeleteBin5Line /></button></td>
            </tr>
          ))}
      </>
    )
   }else if (dataView === "ONBOARDING"){
    return (
      <>
      {onboardingData.map(user => (
            <tr className="table1">
              <td><button type="button" className="edit-button-check" onClick={e => onClickAddToEmploye(user.id)}><input onChange={e => setONBCheckboxStatus({isChecked:e.target.checked,userId:user.id})} className="checkbox-ele" type="checkbox"/></button></td>
              <td className="db-item-name">{user.name}</td>
              <td className="db-item-name">{user.position}</td>
              <td className="db-item-name">{user.experience}</td>
              <td className="db-item-name">{user.location}</td>
              <td className="db-item-name">{user.salary}</td>
              <td className="db-item-name">{user.email}</td>
              <td className="db-item-name">{user.phoneno}</td>
              <td className="db-item-name">{user.address}</td>
              <td>
                <select className="selection-input" onChange={e => setRole(e.target.value) }>
                  <option value="">--Select Role--</option>
                  <option value="WEB Developer">WEB Developer</option>
                  <option value="Sales Manger">Sales Manger</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Assistent Manger">Assistent Manger</option>
                </select>
              </td>
              <td><button type="button" className={onbCheckboxStatus.isChecked && onbCheckboxStatus.userId === user.id ? `edit-button` : `edit-button-stop`} onClick={e => onClickAddToEmployeSub(user.id)}>Submit</button></td>
              <td><button type="button" className="delete-button" onClick={e => onClickOnboardingDelete(user.id)}><RiDeleteBin5Line /></button></td>
              <td>{role}</td>
            </tr>
          ))}
      </>
    )
   }
  }


//RENDER PAGE
  return (
    <div className="admindata-container">
      {(
        <>
        <div className="admin-name-button-container">
          <div className="admin-name-container">
              <p className="admin-profile">{LoginHRIcon}</p>
              <h1 className="admin-name">{LoginHRName}</h1>
          </div>
          <div>
          <Link to="/empregester">
              <button className="add-admin-button">Add Employee</button>
           </Link><br/>
           <Link to="/hrr">
              <button className="signup-button" type="button">
                HR Sign Up
              </button>
            </Link>
            </div>
        </div>
        <div className="data-view-container">
            <button onClick={() => setDataView("APPLICATIONS")} className="data-view-btn" type="button">Applications<span className="data-count">{userData.length}</span></button>
            <button onClick={() => setDataView("INTERVIEW")} className="data-view-btn" type="button">Interview<span className="data-count">{intData.length}</span></button>
            <button onClick={() => setDataView("OFFER")} className="data-view-btn" type="button">Offer<span className="data-count">{offData.length}</span></button>
            <button onClick={() => setDataView("ONBOARDING")} className="data-view-btn" type="button">On Boarding<span className="data-count">{onboardingData.length}</span></button>
          </div>
          <h1>{dataView}:</h1>
          <table className='admin-data'>
            <tr className="table1">
                <th>Check</th>
                <th>Name</th>
                <th>Position</th>
                <th>Experience</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Send Mail</th>
                <th>Status</th>
                <th>Submit</th>
                <th>Delete</th>
              </tr>
            {displayUserData()}
             </table>
        </>
      )}
    </div>)
    }

export default Admin;