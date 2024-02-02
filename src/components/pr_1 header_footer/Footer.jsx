import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
      <section className='footer'>
            <div className="container">
                <div className='row footer_all'>
                    <div className='col-4'>
                        <img className='img' src="Favicon.png" alt="" />
                        <div className='d-flex me-3 mt-5 mb-3 location'>
                            <div className='me-3'>
                                <img src="location.png" alt="" />
                            </div>
                            <div className='location_data'>
                                <span>M-325, INC.</span>
                                <span>30 N GOULD ST STE R</span>
                                <span>SHERIDAN, WY 82801, USA</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mt-3 me-3 mb-5 phone'>
                            <div className='me-3'>
                                <img src="phone.png" alt="" />
                            </div>
                            <div className='phone_data'>
                                <span>+91 (960) 131 0999</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-8 d-flex footer_right'>
                        <div className='w-100 foot_parts'>
                            <h2>Address-2</h2>
                            <ul>
                                <li className='add_2'>
                                    <p>M-325, INC.
                                        30 N GOULD ST STE R
                                        SHERIDAN, WY 82801, USA</p>
                                </li>
                                <li>+1 (718) 690 929</li>
                            </ul>
                        </div>
                        <div className='w-100 foot_parts'>
                            <h2>Company </h2>
                            <ul>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>FAQs</li>
                                <li>Teams</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='w-100 foot_parts'>
                            <h2>Support</h2>
                            <ul>
                                <li>Rooms</li>
                                <li>Banquet</li>
                                <li>Restaurant</li>
                                <li>Events</li>
                                <li>Mega Functions</li>
                            </ul>
                        </div>
                        <div className='w-100 foot_parts s_media'>
                            <h2>Follow us</h2>
                            <ul>
                                <li><img src="s_media_1.png" alt="" /> <a href="javascript:void(0)">Facebook</a></li>
                                <li><img src="s_media_2.png" alt="" /> <a href="javascript:void(0)">Twitter</a></li>
                                <li><img src="s_media_3.png" alt="" /> <a href="javascript:void(0)">Telegram</a></li>
                                <li><img src="s_media_4.png" alt="" /> <a href="javascript:void(0)">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='copy_right'>
                    <h2>© 2022 All Rights Reserved</h2>
                </div>
            </div>
        </section>
  )
}

export default Footer

