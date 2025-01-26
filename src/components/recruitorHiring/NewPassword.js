import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import login_2_gif from '../../assets/images/login_2.gif';
import loginbottom from '../../assets/images/login-bottom.png';   

const NewPassword = () => {
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
                        <div class="contact-form m-0 py-0">
                            {/* <!-- <img src="assets/images/logos/logo-full.png" class="logo_login rounded-pill" alt="Logo"> --> */}
                            <h3 class="user-title"> Create New Password</h3>

                            <form id="contactForms" class="mt-2">
                                <div class="row">
                                  
                                    <div class="col-12 col-lg-12">
                                        <div class="form-floating form-group">
                                            <input type="password" class="form-control" id="floatingPassword"
                                                placeholder="xxxxxxxx"/>
                                            <label for="floatingPassword">New Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-12">
                                        <div class="form-floating form-group">
                                            <input type="password" class="form-control" id="floatingPassword"
                                                placeholder="xxxxxxxx"/>
                                            <label for="floatingPassword">Confirm password</label>
                                        </div>
                                    </div>
                                   
                                  
                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn w-100 rounded">
                                            SAVE
                                        </button>

                                      
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

export default NewPassword
