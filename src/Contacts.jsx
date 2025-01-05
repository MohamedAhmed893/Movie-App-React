import React from 'react'
import imageContact from './Images/communication-concept-with-email-message-box-and-contacts-icons-connection-with-modern-network-technology-contact-us-business-communication-without-borders-customer-suppo.jpg'

export default function Contacts() {
  return (
    <div className='container py-5'>
      <h2 className='text-center text-info my-5'>Contact Us</h2>
       <div className="row w-75 m-auto">
        <div className='col-md-6 col-sm-12'>
          <div>
          <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input  id="first_name" type="text" className="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <textarea id="message" class="materialize-textarea"></textarea>
        <label for="message">Message</label>
        </div>
      </div>
      <button className='btn btn-outline-info'>Send Message</button>
    </form>
  </div>
          </div>
        </div>
        <div className='col-md-6 col-sm-12'>
          <div>
            <img className='w-100' src={imageContact} alt="" />
          </div>
        </div>
       </div>

    </div>
  )
}
