import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import login_2_gif from '../../assets/images/login_2.gif';
import loginbottom from '../../assets/images/login-bottom.png';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
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
                            
                            <h3 class="user-title">Forgot Password</h3>
                            <p>Enter your email and we'll send you a link to reset you password</p>
                            <form id="contactForms" class="mt-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-floating form-group">
                                            <input type="email" class="form-control" id="floatingInput"
                                                placeholder=""/>
                                            <label for="floatingInput">Enter Email ID</label>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="col-lg-12 col-md-12">
                                        <Link to="/forgotOTP" type="submit" class="default-btn w-100 rounded">
                                            Get OTP
                                        </Link>

                                        <h6 class="mt-4 text-center fw-normal text-muted">Don’t have an account? <Link
                                                class="fw-bold" to="/signup">Create an account</Link></h6>
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

export default ForgotPassword
