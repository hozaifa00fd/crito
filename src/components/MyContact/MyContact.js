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

  const [submitStatus, setSubmitStatus] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!validateLength(formData.name, 3)) {
      newErrors = { ...newErrors, name: 'You should write your full name' };
    }

    if (!validateEmail(formData.email)) {
      newErrors = { ...newErrors, email: 'Please enter a valid email address' };
    }

    if (!validateLength(formData.message, 3)) {
      newErrors = { ...newErrors, message: 'Please write your message here' };
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('Form submitted successfully!');
        } else {
          setSubmitStatus('Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('An error occurred. Please try again later.');
      }
    } else {
      setSubmitStatus('');
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
        {submitStatus && <div>{submitStatus}</div>}
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
