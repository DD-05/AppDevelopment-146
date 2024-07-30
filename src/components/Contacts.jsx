import React from 'react';
import './../assets/css/Contacts.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contacts = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="hero-section">
        <h1>CONTACT US</h1>
      </div>
     
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>193, Admin Street, Valayapati, Namakkal</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 23676 35471</p>
          </div>
          <div className="info-item">
            <h3>Email Address</h3>
            <p>trackpro@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Looking For Something In Particular?</h3>
            <p>
            We are here to help you with all of your queries related to Focus Softnet products. Get support by Call,
             Chat, Email or submit your feedback/complaints regarding our products and services to our experts for 
             instant support.
            </p>
            {/* <button>Learn More</button> */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contacts;
