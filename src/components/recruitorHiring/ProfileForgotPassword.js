import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import profile1 from '../../assets/images/profile1.jpg';
import { Link } from 'react-router-dom';

const ProfileForgotPassword = () => {
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
   <Header header="my-course"/>

  <div class="header_space"></div>
  <div class="stepbg">
    <div class="client_filter-job pt-2 pb-5">
      <div class="stepsForm">
        <form method="post" id="msform">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="sf-steps profileview border shadow-lg">
                  <div class="profile_avtar pt-3 pt-md-5">
                    <img src={profile1} height="120" width="120" class="rounded-pill" alt="" />
                    <span></span>
                  </div>
                  <h5 class="mt-3 mb-1">Nathaniel Poole</h5>
                  <p>Networking</p>
                  <ul class="list-group profilemenu">
                    <li class="list-group-item"><Link to="/profile"> <i class="ri-shield-user-fill"></i> My Profile</Link></li>
                    <li class="list-group-item"><Link class="active" to="/mycourses"> <i class="ri-bookmark-fill"></i> My Courses</Link> </li>
                    <li class="list-group-item"><Link to="/resume"> <i class="ri-bookmark-fill"></i> Resume</Link> </li>
                    <li class="list-group-item"><Link to="/profileforgotpassword"> <i class="ri-lock-password-fill"></i> Reset Password</Link>
                    </li>
                    <li class="list-group-item"><Link to="#" class="logoutbtn2"> <i class="ri-logout-box-fill"></i>
                        LOGOUT</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8 d-flex">
                <div class="flexdr position-relative p-3 p-md-4 shadow-lg">
                  <div class="sf-steps-form personal_user_info">
                   
                      <h4>Reset Password</h4>
                     
                    <div class="row">          
                      <div class="col-12 col-lg-12">
                          <div class="form-groups emailforgot">
                            <label>Email address</label>
                            <input type="email" placeholder="ravi@gmail.com" value="ra*****@gmail.com" disabled/>
                          </div>
                      </div>
                      
                      <div class="col-lg-12 col-md-12">
                          <Link type="submit" class="default-btn py-2 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                              Send OTP
                          </Link>

                        
                      </div>
                  </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>


  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">OTP VERIFICATION</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="title">
            
                <h6 class="info">An otp has been sent to <Link to="#"> ravi*****@gmail.com</Link></h6>
                <p class="mb-3">Please enter OTP to verify</p>
              </div>
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
            <div class="modal-footer">
              
                <Link type="button" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" class="default-btn py-2 rounded w-100">Verify</Link>
            </div>
        </div>
    </div>
</div>

{/* <!-- otp popup --> */}
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New Password</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
           
            <form class="form_field">
              <div class="mb-3">
                  <label class="form-label">New Password</label>
                  <input type="text" class="form-control" id="password" placeholder="password" required=""/>
              </div> 
              <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input type="text" class="form-control" id="password" placeholder="confirm password" required=""/>
            </div> 
             
             
              
          </form>
        </div>
        <div class="modal-footer">
          <Link class="default-btn py-2 rounded w-100">Save</Link>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </div>
  )
}

export default ProfileForgotPassword
