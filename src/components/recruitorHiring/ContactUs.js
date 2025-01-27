import React, { useState } from "react";
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div>
       
      {/* <div id="preloader">
        <div id="preloader-area">
            <div class="spinner"></div>
            <div class="spinner"></div>
            <div class="spinner"></div>
            <div class="spinner"></div>
            <div class="spinner"></div>
            <div class="spinner"></div>
            <div class="spinner"></div>
            <div class="spinner"></div>
        </div>
        <div class="preloader-section preloader-left"></div>
        <div class="preloader-section preloader-right"></div>
    </div> */}
    <Header/>
    <div class="header_space"></div>
    <div class="inner-banner contact_bgus inner-banner-bg ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-8 my-auto">
                    <div class="inner-title py-2">
                       <Link to="#contactus" class="default-btn bg-white text-dark fw-bold rounded">Contact Us</Link>
                </div>
                </div>
            </div>

        </div>
    </div>
    <div class="faq-area bg-light pt-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 mx-auto">
                    <div class="faq-accordion">
                        <div class="courses-details-contact">
                            <div class="tab courselfaq courses-details-tab">
                                <ul class="tabs justify-content-center">
                                    <li>
                                        Student
                                    </li>
                                    <li>
                                        Mentor
                                    </li>
                                    <li>
                                        Recruiter
                                    </li>

                                </ul>
                                <div class="section-title mb-45">
                                    <h2>Frequently Asked Question</h2>
                                </div>
                                <div class="tab_content current active">
                                    <div class="tabs_item current">
                                        <ul class="accordion">
                                            <li class="accordion-item p-3">
                                                <Link class="accordion-title " to="javascript:void(0)">
                                                    <i class="ri-add-fill"></i>
                                                    How do we create course content?
                                                </Link>
                                                <div class="accordion-content ">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam
                                                        nonummy nibh sed
                                                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                                                        ut wisi enim
                                                        veniam lorem dolore magna aliqua consectetuer adipiscing elit
                                                        diam nonummy nibh
                                                        sed
                                                        euismod tincidunt ut.
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="accordion-item p-3">
                                                <Link class="accordion-title active" to="javascript:void(0)">
                                                    <i class="ri-add-fill"></i>
                                                    How can i manage my account?
                                                </Link>
                                                <div class="accordion-content show">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam
                                                        nonummy nibh sed
                                                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                                                        ut wisi enim
                                                        veniam lorem dolore magna aliqua consectetuer adipiscing elit
                                                        diam nonummy nibh
                                                        sed
                                                        euismod tincidunt ut.
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="accordion-item p-3">
                                                <Link class="accordion-title" to="javascript:void(0)">
                                                    <i class="ri-add-fill"></i>
                                                    What are the benefits of ledu learning?
                                                </Link>
                                                <div class="accordion-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam
                                                        nonummy nibh sed
                                                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                                                        ut wisi enim
                                                        veniam lorem dolore magna aliqua consectetuer adipiscing elit
                                                        diam nonummy nibh
                                                        sed
                                                        euismod tincidunt ut.
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="accordion-item p-3">
                                                <Link class="accordion-title" to="javascript:void(0)">
                                                    <i class="ri-add-fill"></i>
                                                    Is support for learners included?
                                                </Link>
                                                <div class="accordion-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam
                                                        nonummy nibh sed
                                                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                                                        ut wisi enim
                                                        veniam lorem dolore magna aliqua consectetuer adipiscing elit
                                                        diam nonummy nibh
                                                        sed
                                                        euismod tincidunt ut.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tabs_item">
                                        <div class="courses-details-tab-content">
                                            <ul class="accordion">
                                                <li class="accordion-item p-3">
                                                    <Link class="accordion-title active" to="javascript:void(0)">
                                                        <i class="ri-add-fill"></i>
                                                        How do we create course content?
                                                    </Link>
                                                    <div class="accordion-content show">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                            diam nonummy nibh sed
                                                            euismod tincidunt ut laoreet dolore magna aliquam erat
                                                            volutpat ut wisi enim
                                                            veniam lorem dolore magna aliqua consectetuer adipiscing
                                                            elit diam nonummy nibh
                                                            sed
                                                            euismod tincidunt ut.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li class="accordion-item p-3">
                                                    <Link class="accordion-title" to="javascript:void(0)">
                                                        <i class="ri-add-fill"></i>
                                                        How can i manage my account?
                                                    </Link>
                                                    <div class="accordion-content">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                            diam nonummy nibh sed
                                                            euismod tincidunt ut laoreet dolore magna aliquam erat
                                                            volutpat ut wisi enim
                                                            veniam lorem dolore magna aliqua consectetuer adipiscing
                                                            elit diam nonummy nibh
                                                            sed
                                                            euismod tincidunt ut.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li class="accordion-item p-3">
                                                    <Link class="accordion-title" to="javascript:void(0)">
                                                        <i class="ri-add-fill"></i>
                                                        What are the benefits of ledu learning?
                                                    </Link>
                                                    <div class="accordion-content">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                            diam nonummy nibh sed
                                                            euismod tincidunt ut laoreet dolore magna aliquam erat
                                                            volutpat ut wisi enim
                                                            veniam lorem dolore magna aliqua consectetuer adipiscing
                                                            elit diam nonummy nibh
                                                            sed
                                                            euismod tincidunt ut.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li class="accordion-item p-3">
                                                    <Link class="accordion-title" to="javascript:void(0)">
                                                        <i class="ri-add-fill"></i>
                                                        Is support for learners included?
                                                    </Link>
                                                    <div class="accordion-content">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                            diam nonummy nibh sed
                                                            euismod tincidunt ut laoreet dolore magna aliquam erat
                                                            volutpat ut wisi enim
                                                            veniam lorem dolore magna aliqua consectetuer adipiscing
                                                            elit diam nonummy nibh
                                                            sed
                                                            euismod tincidunt ut.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="tabs_item">
                                        <div class="courses-details-tab-content">
                                            <ul class="accordion">
                                                <li class="accordion-item p-3">
                                                    <Link class="accordion-title active" to="javascript:void(0)">
                                                        <i class="ri-add-fill"></i>
                                                        How do we create course content?
                                                    </Link>
                                                    <div class="accordion-content show">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                            diam nonummy nibh sed
                                                            euismod tincidunt ut laoreet dolore magna aliquam erat
                                                            volutpat ut wisi enim
                                                            veniam lorem dolore magna aliqua consectetuer adipiscing
                                                            elit diam nonummy nibh
                                                            sed
                                                            euismod tincidunt ut.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li class="accordion-item p-3">
                                                    <Link class="accordion-title" to="javascript:void(0)">
                                                        <i class="ri-add-fill"></i>
                                                        How can i manage my account?
                                                    </Link>
                                                    <div class="accordion-content">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                            diam nonummy nibh sed
                                                            euismod tincidunt ut laoreet dolore magna aliquam erat
                                                            volutpat ut wisi enim
                                                            veniam lorem dolore magna aliqua consectetuer adipiscing
                                                            elit diam nonummy nibh
                                                            sed
                                                            euismod tincidunt ut.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li class="accordion-item p-3">
                                                    <Link class="accordion-title" to="javascript:void(0)">
                                                        <i class="ri-add-fill"></i>
                                                        What are the benefits of ledu learning?
                                                    </Link>
                                                    <div class="accordion-content">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                            diam nonummy nibh sed
                                                            euismod tincidunt ut laoreet dolore magna aliquam erat
                                                            volutpat ut wisi enim
                                                            veniam lorem dolore magna aliqua consectetuer adipiscing
                                                            elit diam nonummy nibh
                                                            sed
                                                            euismod tincidunt ut.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li class="accordion-item p-3">
                                                    <Link class="accordion-title" to="javascript:void(0)">
                                                        <i class="ri-add-fill"></i>
                                                        Is support for learners included?
                                                    </Link>
                                                    <div class="accordion-content">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                            diam nonummy nibh sed
                                                            euismod tincidunt ut laoreet dolore magna aliquam erat
                                                            volutpat ut wisi enim
                                                            veniam lorem dolore magna aliqua consectetuer adipiscing
                                                            elit diam nonummy nibh
                                                            sed
                                                            euismod tincidunt ut.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="contact-widget-area pt-100 pb-5" id="contactus">
        <div class="container">
             {/* <div class="row">
                <div class="col-md-4">
                    <div class="contact-info-card">
                        <i class="ri-map-pin-fill"></i>
                        <h3>Our location </h3>
                        <p>Ca 560 Bush St & 20th Ave, Apt 5</p>
                        <p>San Francisco,230909</p>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="contact-info-card">
                        <i class="ri-mail-fill"></i>
                        <h3>Email us</h3>
                        <p><Link to="#"><span class="__cf_email__">info@gmail.com</span></Link></p>
                        <p><Link to="#"><span class="__cf_email__">freshgrad@gmail.com</span></Link></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-info-card">
                        <i class="ri-phone-fill"></i>
                        <h3>Phone</h3>
                        <p><Link to="tel:+44587154756">+44 587 154756</Link></p>
                        <p><Link to="tel:+44555514574">+44 5555 14574</Link></p>
                    </div>
                </div>
            </div>  */}

            <div class="row">
                 <div class="col-md-4">
            <div class="contact-info-card contact_info me-0 me-lg-4">
                <i class="ri-map-pin-fill"></i>
                <h3>Our location </h3>
                <p>Ca 560 Bush St & 20th Ave, Apt 5</p>
                <p>San Francisco,230909</p>
            </div>
            <div class="contact-info-card contact_info me-0 me-lg-4">
                <i class="ri-mail-fill"></i>
                <h3>Email us</h3>
                <p><Link to="#"><span class="__cf_email__">info@gmail.com</span></Link></p>
                <p><Link to="#"><span class="__cf_email__">freshgrad@gmail.com</span></Link></p>
            </div>
            <div class="contact-info-card contact_info me-0 me-lg-4">
                <i class="ri-phone-fill"></i>
                <h3>Phone</h3>
                <p><Link to="tel:+44587154756">+44 587 154756</Link></p>
                <p><Link to="tel:+44555514574">+44 5555 14574</Link></p>
            </div>

           </div> 
                <div class="col-md-12 col-lg-8 my-auto">
                    <div class="section-title mb-3">
                       
                        <h2>Get In Touch With Us</h2>
                    </div>
                    <div class="contact-form p-0">
                        <form id="contactForms" class="formcontact">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-floating form-group">
                                        
                                        <input type="text" name="name" id="name" class="form-control" required
                                            data-error="Please Enter Your Name" placeholder=""/>
                                            <label class="mb-2" for="floatingInput">First Name</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating form-group">
                                        
                                        <input type="text" name="name" id="name" class="form-control" required
                                            data-error="Please Enter Your Name" placeholder=""/>
                                            <label class="mb-2" for="floatingInput">Last Name</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating form-group">
                                        
                                        <input type="email" name="email" id="email" class="form-control" required
                                            data-error="Please Enter Your Email" placeholder=""/>
                                            <label class="mb-2" for="floatingInput">Email ID</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating form-group phonefloting">
                                        <label class="mb-2" for="floatingInput">Phone Number</label>
                                        <input type="text" id="mobile_code" class="form-control" name="phone_number"
                                            required data-error="Please Enter Your number"/>
                                            
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-floating form-group">
                                        
                                        <input type="text" name="msg_subject" id="msg_subject" class="form-control"
                                            required data-error="Please Enter Your Organization"
                                            placeholder=""/>
                                            <label class="mb-2" for="floatingInput">Organization</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="d">
                                        <label class="mb-1 fw-bold">Subject</label>
                                        
                                        
                                        <div class="d-flex gap-3">
                                           
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Support
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Pasternship
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                            <label class="form-check-label" for="flexRadioDefault3">
                                                Investor
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                                            <label class="form-check-label" for="flexRadioDefault4">
                                                Feedback
                                            </label>
                                          </div>
                                          </div>
                                         
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-floating form-group">
                                      
                                       
                                        <textarea id="text_area" maxlength="1500" name="message" class="form-control" cols="30" rows="7"
                                            required data-error="Write your message"
                                            placeholder=""></textarea>
                                            <label class="mb-2" for="floatingInput">Message</label>
                                            <span id="count">100 to 1500</span>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="agree-label">
                                        <input type="checkbox" id="chb1"/>
                                        <label for="chb1">
                                            Accept <Link to="#">Terms & Conditions</Link> And <Link to="#">Privacy
                                                Policy.</Link>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn">
                                        Send Message
                                    </button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ContactUs
