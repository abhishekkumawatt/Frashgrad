import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import login_2_gif from '../../assets/images/login_2.gif';
import loginbottom from '../../assets/images/login-bottom.png';     
import { Link } from 'react-router-dom';

const Otp = () => {
  return (
    <div>
      <Header/>
    <div class="header_space"></div>
    <div class="user-area p-0 p-md-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 p-0 d-none d-md-block d-lg-block">
                    <div class="user_login">
                        <img src={login_2_gif} class="imgk-fluid w-100" alt="login-banner" />
                    </div>
                </div>
                <div class="col-lg-6 d-flex p-0">
                    <div class="user-all-form userlogin position-relative">
                        <div class="login_bottom">
                            <img src={loginbottom} alt="" />
                        </div>
                        <div class="contact-form">
                           
                            {/* <!-- <img src="assets/images/logos/logo-full.png" class="logo_login rounded-pill" alt="Logo"> --> */}
                            <h3 class="user-title">Enter OTP</h3>
                            <p>Code Just Sent to <Link class="fw-bold">opinfo@gmail.com</Link></p>
                            <form id="contactForms" class="mt-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-floating form-group">
                                            <div class="otp-input-fields">
                                                <input type="number" class="otp__digit otp__field__1"/>
                                                <input type="number" class="otp__digit otp__field__2"/>
                                                <input type="number" class="otp__digit otp__field__3"/>
                                                <input type="number" class="otp__digit otp__field__4"/>
                                                <input type="number" class="otp__digit otp__field__5"/>
                                                <input type="number" class="otp__digit otp__field__6"/>
                                              </div>
                                        </div>
                                    </div>
                               
                                    <div class="col-lg-12 col-md-12">
                                        <Link to="/" type="submit" class="default-btn w-100 rounded">
                                            Verify
                                        </Link>

                                        <h6 class="mt-4 text-center fw-normal text-muted">Didn't get the otp? <Link class="fw-bold" to="#">Resend</Link></h6>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default Otp
