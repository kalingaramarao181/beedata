import React, { useState, useEffect } from 'react';
import "./index.css"
import axios from 'axios';
const ConfirmationForm = () => {
  const [email, setEmail] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [name, setName] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [acceptData, setAcceptData] = useState([])


//GET ACCEPTED DATA
useEffect(() => {
    axios.get('http://74.208.28.169:5000/offeracpdata')
      .then(res =>{
        setAcceptData(res.data)
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({}); // Clear any previous errors when the user starts typing
  };

  const handleConfirmationChange = (e) => {
    setConfirmation(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setFormErrors({ email: 'Please enter a valid email address.' });
      return;
    }
    let check = false
    for (let user of acceptData){
        if (user.email === email){
            check = true
            break
        }
    }

    if (check){
        axios.put("http://74.208.28.169:5000/accepted" , {email, confirmation})
        .then(res => {
            alert("Updated Successfully")
        })
        .catch(err => console.log(err))
    }

    console.log('Form submitted:', { email, confirmation, name });

    // Reset the form fields
    setEmail('');
    setConfirmation('');
    setName('');
    setFormErrors({});
  };

  return (
    <div className='conformation-farm-container-main'>
    <div className='conformation-farm-container'>
      <h2 className='conformation-farm-heading'>Confirmation Form</h2>
      <form className='conformation-farm-farm' onSubmit={handleSubmit}>
        <div>
          <label className='conformation-farm-label'>Email:</label>
          <input
           className='conformation-farm-input'
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {formErrors.email && <span  className='conformation-farm-span' style={{ color: 'red' }}>{formErrors.email}</span>}
        </div>
        <div>
          <label className='conformation-farm-label'>Confirmation:</label>
          <select className='conformation-farm-input' value={confirmation} onChange={handleConfirmationChange}>
            <option value="">Select</option>
            <option value="confirm">Confirm</option>
            <option value="notConfirm">Do Not Confirm</option>
          </select>
        </div>
        <div>
          <label className='conformation-farm-label'>Name:</label>
          <input
           className='conformation-farm-input'
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <button  className='conformation-farm-button' type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ConfirmationForm;
