import React from 'react'
import image from './Images/About-timeline-img-1.jpg'
import image2 from './Images/About-prize-img.png'

export default function About() {
  return (
    <div className="container-fluid bg-white py-5">
        <h2 className='text-dark py-3 text-center'>About Us</h2>
      <div className="row w-75 m-auto py-2">
        <div className='col-md-6 col-sm-12'>
          <div>
            <img className='w-100' src={image} alt="" />
          </div>
        </div>
        <div className='col-md-6 col-sm-12 d-flex align-items-center'>
          <div>
            <p className='text-muted'>DRAMA</p>
            <h3 className='text-black fw-bold'>FILM BY ALEJANDRO DURIS</h3>
            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
            <img className='w-50' src={image2} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}
