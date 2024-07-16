import React, { createContext, useState } from 'react';

const RegistrationContext = createContext();

const RegistrationProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    nik: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <RegistrationContext.Provider value={{ formData, handleChange }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export { RegistrationContext, RegistrationProvider };
