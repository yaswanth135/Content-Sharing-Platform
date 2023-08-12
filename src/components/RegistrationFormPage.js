import React, { useState } from 'react';
import './RegistrationFormPage.css';

const RegistrationFormPage= (props)=> {
  const {onRegister}=props
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const onChangeName=(event)=>{
    setName(event.target.value)
  }

  const onChangeContactNo=(event)=>{
    setContactNumber(event.target.value)
  }

  const handleRegister = () => {
    onRegister({ name, contactNumber });
  }; 

  return (
    <div className="registration-form">
      <h3>Registration Form</h3>
      <label for="name">Name: </label>
      <input id="name"
        type="text"
        placeholder="Please Enter Your Name"
        value={name}
        onChange={onChangeName}
      /><br></br>
      <label for="contact">Contact: </label>
      <input
      id="contact"
        type="text"
        placeholder="Please Enter Your Contact Number"
        value={contactNumber}
        onChange={onChangeContactNo}
      /><br></br>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default RegistrationFormPage;