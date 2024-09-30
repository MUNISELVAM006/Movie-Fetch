import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        'service_n5z1dy7',  // Replace with your service ID
        'template_ujc1g8j',  // Replace with your template ID
        formData,
        'fLOXR8YhtQRoC4878'       // Replace with your user ID
      )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className="contact-page">
      <h2 className='contact' >Contact Us</h2>
      {isSubmitted ? (
        <div className="success-message">
          <p className='u'>Thank you for reaching out! We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;