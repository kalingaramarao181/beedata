import React, { useState } from 'react';
import axios from 'axios';

function SendMail() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: '',
  });

  const handleSendEmail = () => {
    axios.post('http://74.208.28.169:5000/send-email', emailData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <input type="text" name="to" placeholder="Recipient Email" onChange={handleChange} />
      <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />
      <textarea cols={20} rows={4} name="body" placeholder="Email Body" onChange={handleChange}></textarea>
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
}

export default SendMail;