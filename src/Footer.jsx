import React from 'react'
import cinemaImage from './Images/logo-cinema-1.png'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div className="container footer pt-5">
        <div className="row g-4">
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className="inner">
                    <img className='w-50' src={cinemaImage} alt="" />
                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className="inner">
                    <h5 className='h6'>Useful Links</h5>
                    <div className="line "></div>
                    <div className='row'>
                        <div className='col-6'>
                           <div>
                            <ul className='list-unstyled py-3'>
                                <li className='py-1'> <Link to='/home'>Home</Link></li>
                                <li className='py-1'> <Link to='/movies'>Movie</Link></li>
                                <li className='py-1'> <Link to='/people'>People</Link></li>
                            </ul>
                           </div>
                        </div>
                        <div className='col-6'>
                           <div>
                            <ul className='list-unstyled py-3'>
                                <li className='py-1'> <Link to='/tv'>Tv</Link></li>
                                <li className='py-1'> <Link to='/about'>About</Link></li>
                            </ul>
                           </div>
                        </div>
                        <div className='col-6'></div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className="inner">
                    <h5 className='h6'>Subscribe</h5>
                    <div className="line mb-3"></div>
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                   <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <p className='text-center bg-black py-2'>Copyright © 2022, All Right Reserved Mohamed Ahmed</p>
    </div>
  )
}
