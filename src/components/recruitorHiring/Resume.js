import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import profile1 from '../../assets/images/profile1.jpg';
import { Link } from 'react-router-dom';


const Resume = () => {
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
                    <li class="list-group-item"><Link to="/profile"> <i
                          class="ri-shield-user-fill"></i> My Profile</Link></li>
                    <li class="list-group-item"><Link to="/mycourses"> <i class="ri-bookmark-fill"></i> My Courses</Link>
                    </li>
                    <li class="list-group-item"><Link class="active" to="/resume"> <i class="ri-bookmark-fill"></i> Resume</Link>
                    </li>
                    <li class="list-group-item"><Link to="/profileforgotpassword"> <i class="ri-lock-password-fill"></i> Reset Password</Link>
                    </li>
                    <li class="list-group-item"><Link to="#" class="logoutbtn2"> <i class="ri-logout-box-fill"></i>
                        LOGOUT</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8 d-flex">
                <div class="flexdr position-relative shadow-lg">
                 
                  <div class="resumefile">
                    <page size="A4">
                      <div class="d-flex">
                        <div class="leftPanel">
                          <img src={profile1} />
                          <div class="details">
                            <div class="item bottomLineSeparator">
                              <h2>
                                CONTACT
                              </h2>
                              <div class="smallText">
                                <p>
                                  <i class="fa fa-phone contactIcon" aria-hidden="true"></i>
                                  (+33) 777 777 77
                                </p>
                                <p>
                                  <i class="fa fa-envelope contactIcon" aria-hidden="true"></i>
                                  <Link to="mailto:lorem@ipsum.com@gmail.com">
                                    lorem@ipsum.com
                                  </Link>
                                </p>
                                <p>
                                  <i class="fa fa-map-marker contactIcon" aria-hidden="true"></i>
                                  New York, USA
                                </p>
                                <p>
                                  <i class="fa fa-linkedin-square contactIcon" aria-hidden="true"></i>
                                  <Link to="#">
                                    in/loremipsum
                                  </Link>
                                </p>
                                <p class="lastParagrafNoMarginBottom">
                                  <i class="fa fa-skype contactIcon" aria-hidden="true"></i>
                                  <Link to="#">
                                    loremipsum
                                  </Link>
                                </p>
                              </div>
                            </div>
                            <div class="item bottomLineSeparator">
                              <h2>
                                SKILLS
                              </h2>
                              <div class="smallText">
                                <div class="skill">
                                  <div>
                                    <span>Accounting</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span class="alignright">14</span>
                                    <span class="alignleft">years</span>
                                  </div>
                                </div>

                                <div class="skill">
                                  <div>
                                    <span>Word</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span class="alignright">3</span>
                                    <span class="alignleft">years</span>
                                  </div>
                                </div>

                                <div class="skill">
                                  <div>
                                    <span>Powerpoint</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span class="alignright">3</span>
                                    <span class="alignleft">years</span>
                                  </div>
                                </div>

                                <div class="skill">
                                  <div>
                                    <span>Accounting</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span class="alignright">2</span>
                                    <span class="alignleft">years</span>
                                  </div>
                                </div>

                                <div class="skill">
                                  <div>
                                    <span>Marketing</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span class="alignright">2</span>
                                    <span class="alignleft">years</span>
                                  </div>
                                </div>

                                <div class="skill">
                                  <div>
                                    <span>Photoshop</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span class="alignright">2</span>
                                    <span class="alignleft">years</span>
                                  </div>
                                </div>

                                <div class="skill">
                                  <div>
                                    <span>French</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span class="alignright">2</span>
                                    <span class="alignleft">years</span>
                                  </div>
                                </div>

                                <div class="skill">
                                  <div>
                                    <span>English</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span class="alignright">1</span>
                                    <span class="alignleft">year</span>
                                  </div>
                                </div>

                                <div class="skill">
                                  <div>
                                    <span>Management</span>
                                  </div>
                                  <div class="yearsOfExperience">
                                    <span>1 year</span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            <div class="item">
                              <h2>
                                EDUCATION
                              </h2>
                              <div class="smallText">
                                <p class="bolded white">
                                  Bachelor of Economics
                                </p>
                                <p>
                                  The University of Sydney
                                </p>
                                <p>
                                  2010 - 2014
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="rightPanel">
                          <div>
                            <h2>
                              Jhon Doe
                            </h2>
                            <div class="smallText">
                              <h3>
                                Accountant
                              </h3>
                            </div>
                          </div>
                          <div>
                            <h2>
                              About me
                            </h2>
                            <div class="smallText">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis, justo sed
                                feugiat pulvinar., quam ipsum tincidunt enim, ac gravida est metus sit amet neque.
                                Curabitur ut arcu ut nunc finibus accumsan id id elit.
                              </p>
                              <p>
                                Vivamus non magna quis neque viverra finibus quis a tortor.
                              </p>
                            </div>
                          </div>
                          <div class="workExperience">
                            <h2>
                              Work experience
                            </h2>
                            <ul>
                              <li>
                                <div class="jobPosition">
                                  <span class="bolded">
                                    Accountant
                                  </span>
                                  <span>
                                    Jun 2014 - Sept 2015
                                  </span>
                                </div>
                                <div class="projectName bolded">
                                  <span>
                                    Accounting project name | Company name
                                  </span>
                                </div>
                                <div class="smallText">
                                  <p>
                                    Quisque rutrum mollis ornare. In pharetra diam libero, non interdum dui imperdiet
                                    quis. Quisque aliquam sapien in libero finibus sodales. Mauris id commodo metus. In
                                    in laoreet dolor.
                                  </p>
                                  <ul>
                                    <li>
                                      Integer commodo ullamcorper mauris, id condimentum lorem elementum sed. Etiam
                                      rutrum eu elit ut hendrerit. Vestibulum congue sem ac auctor semper. Aenean quis
                                      imperdiet magna. Sed eget ullamcorper enim. Vestibulum consequat turpis eu neque
                                      efficitur blandit sed sit amet neque. Curabitur congue semper erat nec blandit.
                                    </li>
                                  </ul>
                                  <p>
                                    <span class="bolded">Skills: </span>Accounting, Word, Powerpoint
                                  </p>
                                </div>
                              </li>


                              <li>
                                <div class="jobPosition">
                                  <span class="bolded">
                                    Digital Marketing Expert
                                  </span>
                                  <span>
                                    Nov 2020 - Sept 2021
                                  </span>
                                </div>
                                <div class="projectName bolded">
                                  <span>
                                    Project name | Company name
                                  </span>
                                </div>
                                <div class="smallText">
                                  <p>
                                    Morbi rhoncus, tortor vel luctus tincidunt, sapien lacus vehicula augue, vitae
                                    ultrices eros diam eget mauris. Aliquam dictum nulla vel augue tristique bibendum.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas.
                                  </p>
                                  <ul>
                                    <li>
                                      <p>
                                        Phasellus ac accumsan ligula. Morbi quam massa, pellentesque nec nunc nec,
                                        consectetur gravida dolor. Mauris vulputate sagittis pellentesque. Donec luctus
                                        lorem luctus purus condimentum, id ultrices lacus aliquam.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Quisque et lorem sagittis lacus lobortis euismod non id mi. Nulla sed tincidunt
                                        libero, placerat imperdiet magna. Quisque lectus quam, viverra eu congue ut,
                                        congue vitae metus. Sed in varius sapien. Cras et elementum tellus.
                                      </p>
                                    </li>
                                  </ul>
                                  <p>
                                    <span class="bolded">Skills: </span> Writing, Photoshop
                                  </p>
                                </div>
                              </li>

                              <li>
                                <div class="jobPosition">
                                  <span class="bolded">
                                    Accountant
                                  </span>
                                  <span>
                                    Jun 2017 - May 2020
                                  </span>
                                </div>
                                <div class="projectName bolded">
                                  <span>
                                    Project name | Company name
                                  </span>
                                </div>
                                <div class="smallText">
                                  <p>
                                    Maecenas eget semper sapien. Sed convallis nunc egestas dui convallis dictum id nec
                                    metus. Donec vestibulum justo mauris, ac congue lacus tincidunt id. Vivamus rhoncus
                                    risus ac ex varius gravida. Donec eget ullamcorper ipsum.
                                  </p>

                                  <ul>
                                    <li>
                                      <p>
                                        Maecenas auctor euismod felis vel semper. Nulla facilisi. Quisque quis odio dui.
                                        Morbi venenatis magna quis libero mollis facilisis. Ut semper, eros eu dictum
                                        efficitur, ligula felis aliquet ante, sed commodo odio nisi a augue.
                                      </p>
                                    </li>

                                  </ul>
                                  <p>
                                    <span class="bolded">Skills: </span>Management, French
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </page>

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

export default Resume
