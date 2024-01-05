import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    gender: '',
    contactNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('your_backend_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, you can handle the success response from the backend
      } else {
        console.error('Failed to submit form');
        // Optionally, you can handle the error response from the backend
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle other potential errors, such as network issues
    }

  };

  return (
    <div className='FormContainer'>
      <form onSubmit={handleSubmit}>
        <div className="formTopic">
          <span className="topic">Sign Up</span>
        </div>
        <div className="formBox">
          <div className="inputs">
            <div className="inputItem">
              <span className="inputName">Name</span>
              <input
                type="text"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="inputItem">
              <span className="inputAge">Password</span>
              <input
                type="password"
                className="input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="inputItem">
              <span className="inputPassword">Gender</span>
              <label>
                Female
                <input
                  type="radio"
                  className="input"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
              </label>
              <label>
                Male
                <input
                  type="radio"
                  className="input"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="inputItem">
              <span className="inputAddress">Contact Number</span>
              <input
                type="text"
                className="input"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="signInButton">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
