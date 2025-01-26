import React, { useState } from 'react'
import Header from '../common/Header/Header'
import profile1 from '../../assets/images/profile1.jpg'
import mycoursesimg1 from '../../assets/images/courses/video1.png';
import mycoursesimg2 from '../../assets/images/courses/video2.jpg';
import mycoursesimg3 from '../../assets/images/courses/video3.jpg';
import { Link } from 'react-router-dom';

const MyCourses = () => {
//  const [isOpen, setIsOpen]=useState(false)
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

  <div class="stepbg">
    <div class="header_space"></div>
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
                  <div class="personal_user_info">

                    <div class="border-bottom">
                      <h4>My Courses </h4>

                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="videoviews">
                          <Link to="/mycoursesdetails">
                            <img src={mycoursesimg1} class="img-fluid" alt="" />
                          </Link>
                          <div class="card-body">
                            <Link to="/mycoursesdetails">
                              <h6>Web Programming</h6>
                            </Link>
                            <ul class="course-list nav">
                              <li><i class="ri-time-fill"></i> 10 hr 07 min</li>
                              <li><i class="ri-calendar-fill"></i> 18/04/2024</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="videoviews">
                          <Link to="/mycoursesdetails">
                            <img src={mycoursesimg2} class="img-fluid" alt="" />
                          </Link>
                          <div class="card-body">
                            <Link to="/mycoursesdetails">
                              <h6>Building Successful Business</h6>
                            </Link>
                            <ul class="course-list nav">
                              <li><i class="ri-time-fill"></i> 10 hr 07 min</li>
                              <li><i class="ri-calendar-fill"></i> 18/04/2024</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="videoviews">
                          <Link to="/mycoursesdetails">
                            <img src={mycoursesimg3} class="img-fluid" alt="" />
                          </Link>
                          <div class="card-body">
                            <Link to="/mycoursesdetails">
                              <h6>English Pro Course</h6>
                            </Link>
                            <ul class="course-list nav">
                              <li><i class="ri-time-fill"></i> 10 hr 07 min</li>
                              <li><i class="ri-calendar-fill"></i> 18/04/2024</li>
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
        </form>
      </div>
    </div>
  </div>
  {/* <Footer/> */}
    </div>
  )
}

export default MyCourses
