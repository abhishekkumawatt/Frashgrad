import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';

const Mentor = () => {
  return (
    <div>
        <Header/>
    <div class="header_space"></div>

    <div class="user-area p-0 p-md-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 p-0 d-none d-md-block d-lg-block">
                    <div class="user_login">
                        <img src="assets/images/login_2.gif" class="imgk-fluid w-100" alt="login-banner" />
                    </div>
                </div>
                <div class="col-lg-6 d-flex p-0">
                    <div class="user-all-form userlogin position-relative">
                        <div class="login_bottom">
                            <img src="assets/images/login-bottom.png" alt="" />
                        </div>
                        <div class="contact-form m-0 py-0">
                            {/* <!-- <img src="assets/images/logos/logo-full.png" class="logo_login rounded-pill" alt="Logo"> --> */}
                            <h3 class="user-title"> Sign up for an account</h3>

                            <ul class="nav tabs_signup justify-content-start gap-2">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="/signup">Student</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/recruiter">Recruiter</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" to="/mentor">Mentor</Link>
                                </li>

                            </ul>



                            
                            <div class="pt-3 text-center">
                               
                                <Link to="#" class="linkedbtn"><i class="ri-linkedin-box-fill"></i> Linkedin</Link>
                                <h6 class="text-center m-0 mt-2">Or Continue with</h6>
                            </div>
                            


                            <form id="contactForms">
                                <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <h5>Location</h5>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-floating form-group">
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option selected>USA</option>
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                                <option>Andorra</option>
                                                <option>Benin</option>
                                                <option>India</option>
                                            </select>
                                            <label for="floatingInput">Country</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-floating form-group">
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Rajasthan</option>

                                            </select>
                                            <label for="floatingInput">State</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-floating form-group">
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Jaipur</option>
                                            </select>
                                            <label for="floatingInput">City</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-floating form-group">
                                            <input type="text" class="form-control" id="floatingInput"
                                                placeholder=""/>
                                            <label for="floatingInput">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-floating form-group">
                                            <input type="text" class="form-control" id="floatingInput"
                                                placeholder=""/>
                                            <label for="floatingInput">Last Name</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-floating form-group">
                                            <input type="email" class="form-control" id="floatingInput" placeholder=""/>
                                            <label for="floatingInput">Email ID</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="form-floating form-group">
                                            <input type="password" class="form-control" id="floatingPassword"
                                                placeholder=""/>
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="form-floating form-group">
                                            <input type="password" class="form-control" id="floatingPassword"
                                                placeholder=""/>
                                            <label for="floatingPassword">Confirm Password</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 position-relative">
                                        <div class="form-floating form-group">
                                            <input type="text" id="mobile_code" class="form-control"
                                                placeholder="" name="name"/>

                                        </div>
                                    </div>

                                    
                                    <div class="col-lg-12 form-condition">
                                        <div class="agree-label">
                                            <input type="checkbox" id="chb1"/>
                                            <label for="chb1" class="small text-muted">
                                                All your information is collected, stored and processed as per our data
                                                processing guidelines. By signing up on FreshGard, you agree to our <Link to="#">Privacy
                                                Policy</Link> and <Link to="#">Terms of Use</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <Link to="/studentstep1" type="submit" class="default-btn w-100 rounded">
                                            Sign Up
                                        </Link>

                                        <h6 class="mt-4 text-center fw-normal text-muted">Already have an account? <Link
                                                class="fw-bold" to="/signin">Login</Link></h6>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Mentor
