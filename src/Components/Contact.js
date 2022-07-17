import React, { Component, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("Message");

  function sendEmail(e) {
    const form = document.querySelector('#contactForm');
    const statusMessage = document.querySelector('.status-message');


    e.preventDefault();
    // console.log(data);
    generateContactNumber();
    emailjs.sendForm('service_5r8zjjy', 'template_uxxecit', e.target, 'GWuMTG9nkIhwj4ZSq')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message success";
        setTimeout(()=> {
          statusMessage.className = 'status-message'
        }, 5000);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }


  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  return (
    <section id="contact">
      <div className="row section-head">

        <div className="two columns header-col">

          <h1><span></span></h1>

        </div>

        <div className="ten columns">

          <p className="lead">Get in Touch</p>
          <p className='status-message'>{statusMessage}</p>


        </div>

      </div>


      <div className="row">
        <div className="eight columns">

          <form onSubmit={sendEmail} id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" size="35" name="name" className='form-control' />
              </div>

              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="email" size="35" name="user_email" className='form-control' />
              </div>

              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea rows="4" id="contactMessage" name="message" className='form-control' ></textarea>
                <input type='hidden' name='contact_number' value={contactNumber} />

              </div>

              <div>
                <input type="submit" name="Send" className=" submit form-control btn btn-primary" value='Send'/>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}; 

export default Contact;