import { Component } from "react";
import axios from "axios"
import React from 'react'
import './index.css';


class Register extends Component {

  
  state = {
    name: "",
    position: "",
    experience: "",
    location: "",
    salary: "",
    email: "",
    phoneNo: "",
    about: "",
    address: "",
    userData: {},
    errMsg: "",
    inputStatus: false,
  }

  //ON CHANGE STATUS
  onChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  onChangePosition = (event) => {
    this.setState({position: event.target.value})
  }

  onChangeExperience = (event) => {
    this.setState({experience: event.target.value})
  }

  onChangeLocation = (event) => {
    this.setState({location: event.target.value})
  }

  onChangeSalary = (event) => {
    this.setState({salary: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  onChangeNumber = (event) => {
    this.setState({phoneNo: event.target.value})
  }

  onChangeAbout = (event) => {
    this.setState({about: event.target.value})
  }

  onChangeAddress = (event) => {
    this.setState({address: event.target.value})
  }


 //ONBLUR STATUS
  onBlurName = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required Name", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  onBlurPosition = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required Position", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  onBlurExperience = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required Experience", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  onBlurLocation = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required Location", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  onBlurSalary = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required Salary", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  onBlurEmail = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required Email", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  onBlurNumber = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required Phone No", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  onBlurAbout = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required About", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  onBlurAddress = (event) => {
    if (event.target.value === ""){
      this.setState({errMsg:"*Required Address", inputStatus: true})
    }else{
      this.setState({errMsg:"", inputStatus: false})
    }
  }

  submitRegesterFarm = (event) => {
    event.preventDefault()
    const {name, position, experience, location, salary, email, phoneNo, about, address, inputStatus} = this.state
    if (inputStatus){
      this.setState("Please fill All Details")
    }else{
      this.setState({name:"", position:"", experience:"", location:"", salary:"", email:"", phoneNo:"", about:"", address:"", errMsg:"", inputStatus:false})
      axios.post("http://74.208.28.169:5000/user" , {name, position, experience, location, salary, email, phoneNo, about, address})
      .then(res => {
        alert("User Added Successfully")
      })
      .catch(err => console.log(err))
  }
  }

  render(){
    const {name, position, experience, location, salary, email, phoneNo, about, address, inputStatus, errMsg} = this.state
  return (
    <>
    <div id='register' className='Rt-bg2'>
    <farm className='Rt-bg1' onSubmit={this.submitRegesterFarm}>
        <h1 className='Rt-head1'>EmpConcor Register</h1>
        <div className='Rt-card1'>
          <input className='Rt-input1' style={{color: "white"}} onBlur={this.onBlurName} value={name} type="text" onChange={this.onChangeName} placeholder='   Enter Your Full Name' /><br/>
          <input className='Rt-input1' style={{color: "white"}} onBlur={this.onBlurPosition} value={position} type="text" onChange={this.onChangePosition} placeholder='   Enter Your Job Position' /><br/>
          <input className='Rt-input1' style={{color: "white"}} onBlur={this.onBlurExperience} value={experience} type="text" onChange={this.onChangeExperience} placeholder='   Enter Your  Experience' /><br/>
          <input className='Rt-input1' style={{color: "white"}} onBlur={this.onBlurLocation} value={location} type="text" onChange={this.onChangeLocation} placeholder='   Enter Your Location' /><br/>
          <input className='Rt-input1' style={{color: "white"}} onBlur={this.onBlurSalary} value={salary} type="text" onChange={this.onChangeSalary} placeholder='   Enter Your Current Salary' /><br/>
          <input className='Rt-input1' style={{color: "white"}} onBlur={this.onBlurEmail} value={email} type="text" onChange={this.onChangeEmail} placeholder='   Enter Your Email' /><br/>
          <input className='Rt-input1' style={{color: "white"}} onBlur={this.onBlurNumber} value={phoneNo} type="text" onChange={this.onChangeNumber} placeholder='   Enter Your Contact Number' /><br/>
          <input className='Rt-input1' style={{color: "white"}} onBlur={this.onBlurAbout} value={about} type="text" onChange={this.onChangeAbout} placeholder='   Enter How did you here about us' /><br/>
          <textarea col="50" rows="5" style={{color: "white"}} onBlur={this.onBlurAddress} className='Rt-textarea' value={address} type="text" onChange={this.onChangeAddress} placeholder='   Enter Your Address Here' /><br/>
          <button type="submit" onClick={this.submitRegesterFarm} className={inputStatus ? "Rt-button1-err" :'Rt-button1'}>Submit</button>
          <p className="r-err-msg">{errMsg}</p>
        </div>
    </farm>
    </div>
  </>
  )
}
}

export default Register