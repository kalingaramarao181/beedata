import "./index.css"
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import moment from "moment";

const EmployeDashBoard = () => {
    const [employeData, setEmployeData] = useState([])
    const [attendStatus, setAttendStatus] = useState("TIMEIN")
    const [employeId, setEmployeId] = useState("")
    const [msg, setMsg] = useState()
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [errMsg,setErrMsg] = useState();
    const [attendanceDataToday,setAttendanceDataToday] = useState([])
   
    //GET EMPLOYE DATA
    useEffect(() => {
    axios.get('http://74.208.28.169:5000/employedata')
      .then(res => setEmployeData(res.data))
      .catch(err => {
        alert(err);
      });
    }, []);

    //GET TODAY ATTENDANCE DATA
  useEffect(()=>{
    axios.get('http://74.208.28.169:5000/empattendancetoday')
    .then(res => setAttendanceDataToday(res.data))
    .catch(err=>console.log(err));
  },[])

    useEffect(() => {
      const interval = setInterval(() => {
        const momentNow = moment();
        setDate(momentNow.format('dddd').substring(0, 3).toUpperCase() + ' - ' + momentNow.format('MMMM DD, YYYY'));
        setTime(momentNow.format('hh:mm:ss A'));
      }, 100);
      return () => clearInterval(interval);
      }, []);

    const employeIdList = []
    let name
    for (let employes of employeData){
        employeIdList.push(employes.employeid)
        if (employeId === employes.employeid){
            name = employes.name
        }
    }

    //MAKE TODAY EMPLOYES LIST
    let attendenceList = []
    for (let todayData of attendanceDataToday){
      attendenceList.push(todayData.employeid)
    }

    const onSubmitTimeFarm = () => {
        console.log(name)
        if (employeIdList.includes(employeId)){
            if (attendStatus==="TIMEIN"){
              if (attendenceList.includes(employeId)){
                setErrMsg(`${name} Alredy Attended`)
                alert((`${name} Alredy Attended`))
              }else{
                axios.post("http://74.208.28.169:5000/attindance" , {employeId, name})
                .then(res => {
                    alert("Successfully Updated")
                })
                .catch(err => console.log(err))
                setMsg(`${name} Attended SuccessFully`)
              }
            }else if (attendStatus==="TIMEOUT"){
                axios.put("http://74.208.28.169:5000/attindance" , {employeId})
                .then(res => {
                   alert("Updated Successfully")
                })
                .catch(err => console.log(err))
            }
        }else{
            alert("Employe Id Not Matched")
        }
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const renderSelectedPage = () => {
      return(
        <div className="att-container">
          <h1 className="emp-att-name">Employe Attendance</h1>
          <div className="emp-att-card">
            <h2 className="emp-att-date">{date}</h2>
            <h1 className="emp-att-time">{time}</h1>
              <form onSubmit={onSubmitTimeFarm}className="att-form">
                  <select className="att-selection" onChange={e => setAttendStatus(e.target.value)}>
                      <option className="time-opt" value="TIMEIN">Timein</option>
                      <option className="time-opt" value="TIMEOUT">Timeout</option>
                  </select>
                  <input className="time-input" onChange={e => setEmployeId(e.target.value)} placeholder="Enter Employe Id"/>
                  <button type="submit" className="time-submit">Submit</button>
              </form>
            </div>
            {msg ? <p className="attend-msg">{msg}</p> : null}
            {errMsg ? <p className="attend-err-msg">{errMsg}</p> : null}
       </div>
      )
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return(<>{renderSelectedPage()}</>)
  }

export default EmployeDashBoard