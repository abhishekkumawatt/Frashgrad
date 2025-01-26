import React, { useState } from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import profile1 from '../../assets/images/profile1.jpg'
import video1 from '../../assets/images/courses/video1.png'
import pdfimg from '../../assets/images/courses/PDF.png'
import { Link } from 'react-router-dom';

const MyCoursesDetails = () => {
  const [isOpen, setIsOpen]=useState(false)
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
                      <h4>Web Programming</h4>

                    </div>
                    <div class="row">
                      <div class="col-md-12">

                        <table class="table videotab table-hover">
                          <thead>
                            <tr>
                              <th scope="col">Class</th>
                              <th scope="col">Video</th>
                              <th scope="col">Nots</th>
                              <th scope="col">Date</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Class 1</th>
                              <td>
                                <div class="coursetab10">
                                  <Link to="#"><img src={video1} class="img-fluid" alt="" />

                                  </Link>
                                </div>
                              </td>
                              <td>
                                <div class="coursetab11"><Link to="#"/><img src={pdfimg}
                                      class="img-fluid" alt="" />
                                </div>
                              </td>
                              <td>10/04/2024</td>
                              <td><Link to="#" class="default-btn rounded">View</Link></td>
                            </tr>
                            <tr>
                              <th scope="row">Class 2</th>
                              <td>
                                <div class="coursetab10">
                                  <Link to="#"><img src={video1} class="img-fluid" alt="" />  </Link>
                                </div>
                              </td>
                              <td>
                                <div class="coursetab11"><Link to="#"/><img src={pdfimg}
                                      class="img-fluid" alt="" />
                                </div>
                              </td>
                              <td>10/04/2024</td>
                              <td><Link to="#" class="default-btn rounded">View</Link></td>
                            </tr>
                            <tr>
                              <th scope="row">Class 3</th>
                              <td>
                                <div class="coursetab10">
                                  <Link to="#"><img src={video1} class="img-fluid" alt="" /> </Link>
                                </div>
                              </td>
                              <td>
                                <div class="coursetab11"><Link to="#"/><img src={pdfimg}
                                      class="img-fluid" alt="" />
                                </div>
                              </td>
                              <td>10/04/2024</td>
                              <td><Link to="#" class="default-btn rounded">View</Link></td>
                            </tr>
                            <tr>
                              <th scope="row">Class 4</th>
                              <td>
                                <div class="coursetab10">
                                  <Link to="#"><img src={video1} class="img-fluid" alt="" /> </Link>
                                </div>
                              </td>
                              <td>
                                <div class="coursetab11"><Link to="#"/><img src={pdfimg}
                                      class="img-fluid" alt="" />
                                </div>
                              </td>
                              <td>10/04/2024</td>
                              <td><Link to="#" class="default-btn rounded">View</Link></td>
                            </tr>
                          </tbody>
                        </table>
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

export default MyCoursesDetails
