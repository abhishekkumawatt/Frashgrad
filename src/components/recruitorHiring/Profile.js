import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import profile1 from '../../assets/images/profile1.jpg'
import { Link } from 'react-router-dom';


const Profile = () => {
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
  <br/><br/><br/>
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
                    <li class="list-group-item"><Link class="active" to="/profile"> <i class="ri-shield-user-fill"></i> My Profile</Link></li>
                    <li class="list-group-item"><Link to="/mycourses"> <i class="ri-bookmark-fill"></i> My Courses</Link> </li>
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
                  <div class="personal_user_info border p-4 rounded">
                   
                    <div class="d-flex justify-content-between">
                    <h4>Personal Information</h4>
                    <Link to="/editprofile" class="default-btn rounded p-2">Edit <i class="ri-edit-2-fill"></i></Link>  
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>First Name</p>
                          <h6>Nathaniel</h6>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>Last Name</p>
                          <h6>Poole</h6>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>Email ID</p>
                          <h6>freshgrad@gmail.com</h6>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>Phone Number</p>
                          <h6>01 1234567890</h6>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>Dob</p>
                          <h6>14 July 1995</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="personal_user_info mt-4 border p-4 rounded">
                    <div class="d-flex justify-content-between">
                    <h4>Address</h4>
                    <Link to="/editprofile" class="default-btn rounded p-2">Edit <i class="ri-edit-2-fill"></i></Link>    
                  </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>Country</p>
                          <h6>USA</h6>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>State</p>
                          <h6>Alabama</h6>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>City</p>
                          <h6>Andalusia</h6>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group info__profile">
                          <p>Citizen</p>
                          <h6>United States</h6>
                        </div>
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
  <Footer/>
    </div>
  )
}

export default Profile
