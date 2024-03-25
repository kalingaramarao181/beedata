
import React, { useState } from 'react'
import './index.css'
import axios from 'axios'



const EmployeRegister = () => {
  const randomColorList = ["#6DA762", "#A2644B", "#99A24B", "#4BA29A", "#4B74A2", "#674BA2", "#884BA2", "#A24B95", "#A24B65", "#A26F4B", "#F9508A"]
  const [name,setName]=useState('')
  const [userid,setUserid]=useState('')
  const [jobposition,setJobposition]=useState('')
  const [location,setlocation]=useState('')
  const [dateofbirth,setDateofbirth]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [address,setAddress]=useState('')


  const submithandler = (event)=>{
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * 10)
    const randomcolor = randomColorList[randomNumber]
    console.log(randomcolor)
    if(name === "" && userid === "" && jobposition === "" && location === "" && dateofbirth === "" && email === "" && number === "" && address === ""){
      alert("please fill all")
    }else{
      axios.post('http://74.208.28.169:5000/employeregester', {name,userid,jobposition,location,dateofbirth,email,number,address, randomcolor})
      .then(res=>{
      alert("submitted successfully")
    })
      setName('')
      setUserid('')
      setJobposition('')
      setlocation('')
      setDateofbirth('')
      setEmail('')
      setNumber('')
      setAddress('')
    }
  }

  return (
    <>
    <div id='register' className='Er-bg2'>
      <div className='Er-bg1'>
          <h1 className='Er-head1'>Employe Register</h1>
          <form onSubmit={submithandler} >
            <div className='Er-card1'>
              <input className='Er-input1' value={name}  type="text" placeholder='   Enter Your Full Name' onChange={e =>setName(e.target.value)} /><br/>
              <input className='Er-input1' value={userid}  type="text" placeholder='   Enter Your User-ID' onChange={e =>setUserid(e.target.value)} /><br/>
              <input className='Er-input1' value={jobposition} type="text" placeholder='   Enter Your  Job-Position' onChange={e =>setJobposition(e.target.value)} /><br/>
              <input className='Er-input1' value={location} type="text" placeholder='   Enter Your Location' onChange={e =>setlocation(e.target.value)} /><br/>
              <input className='Er-input1' value={dateofbirth} type="date" placeholder='   Enter Your DateOfBirth' onChange={e =>setDateofbirth(e.target.value)} /><br/>
              <input className='Er-input1' value={email} type="text" placeholder='   Enter Your email' onChange={e =>setEmail(e.target.value)} /><br/>
              <input className='Er-input1' value={number} type="text" placeholder='   Enter Your contact-number' onChange={e =>setNumber(e.target.value)} /><br/>
              <textarea className='Er-input12' value={address}  type="text" placeholder='   Enter Your Address' onChange={e =>setAddress(e.target.value)} /><br/>
              <button  className='Er-button1'>Submit</button>
              <p className='Er-para1'>By clicking "Submit" Register your Data In our Website</p>
            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default EmployeRegister