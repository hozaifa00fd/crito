import React, { useState } from 'react';

const MyContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateLength(formData.name, 3)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'You should write your full name',
      }));
    }

    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address',
      }));
    }

    if (!validateLength(formData.message, 3)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Please write your message here',
      }));
    }

    if (Object.values(errors).every((error) => !error)) {
      console.log('Formuläret är giltigt och kan skickas:', formData);
      // Här kan du skicka formuläret till en server eller göra något annat med datan
    } else {
      console.log('Formuläret är ogiltigt. Vänligen korrigera fel.');
    }
  };

  const validateLength = (value, minLength = 2) => {
    return value.trim().length >= minLength;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='outer-form'>
      <div className="form">
        <h2>Leave us a message <br /> for any information</h2>
        <form onSubmit={handleSubmit} action="#" method="post">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
          />
          <span className='error-message'>{errors.name}</span>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
          />
          <span className='error-message'>{errors.email}</span>

          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message*"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <span className='error-message'>{errors.message}</span>

          <button type="submit">Send message <i className="fa-solid fa-arrow-right"></i></button>
        </form>
      </div>
    </div>
  );
};

export default MyContact;
