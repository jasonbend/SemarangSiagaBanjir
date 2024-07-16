import React, { useContext } from 'react';
import { RegistrationContext } from '../RegistrationContext';
import './Registration.css';
import InputField from './InputField';

function Registration() {
  const { formData, handleChange } = useContext(RegistrationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
  };

  return (
    <div className="registration">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="NIK"
          type="text"
          name="nik"
          value={formData.nik}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
