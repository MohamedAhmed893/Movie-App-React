import React from 'react'
import imageContact from './Images/communication-concept-with-email-message-box-and-contacts-icons-connection-with-modern-network-technology-contact-us-business-communication-without-borders-customer-suppo.jpg'

export default function Contacts() {
  return (
    <div className='container contact py-5'>
      <h2 className='text-center text-info my-5'>Contact Us</h2>
      <div className="row w-75 m-auto">
        <div className='col-md-6 col-sm-12'>
          <div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <button className='btn btn-outline-info my-3'>Send Message</button>
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
