import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';

const StudentResume = () => {
  return (
    <div>
      <div class="bg_nav-slid bg-white">
    <div class="navbar-area ledu-area otherpages-menu">
      <div class="mobile-responsive-nav">
        <div class="container">
          <div class="mobile-responsive-menu">
            <div class="logo">
              <Link to="/">
                <img src="assets/images/logos/logo-full.png" height="50" class="logo-one rounded-pill" alt="logo"/>

              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="desktop-nav nav-area">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-md navbar-light p-0">
            <Link class="navbar-brand" to="/">
              <img src="assets/images/logos/logo-full.png" class="logo-one rounded-pill" alt="Logo"/>

            </Link>


            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav w-100 ms-5">

                <li class="nav-item">
                  <Link to="/dashboard" class="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/studentresume">Resume</Link>
                </li>
                <li class="nav-item">
                  <Link to="/studenttrainingprogram">Training Program</Link>
                </li>

                <li class="nav-item">
                  <Link to="#">Coaching Center</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/studentjobs">Jobs</Link>
                </li>

              </ul>

              <div class="others-options gap-2 d-flex align-items-center">

                <div class="optional-item">
                  <button class="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
                      class="ri-notification-2-line"></i></button>
                </div>
                <div class="navbar-category">
                  <div class="dropdown category-list-dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="assets/images/profile1.jpg" height="50" width="50" class="rounded-pill" alt="" />
                      Freshgrad
                      <i class="ri-arrow-down-s-line"></i>
                    </button>
                    <div class="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
                      <Link to="#" class="nav-link-item">

                        User Account center
                      </Link>
                      <Link to="#" class="nav-link-item">

                        Hiring Dashboard
                      </Link>
                      <Link to="#" class="nav-link-item">

                        Freshgrad Profile/Resume
                      </Link>

                      <Link to="#" class="logoutbtn">
                        <i class="ri-logout-box-line"></i>
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </nav>
        </div>
      </div>
      <div class="side-nav-responsive">
        <div class="container">
          <div class="dot-menu">
            {/* <!-- <div class="circle-inner">
                        <span class="ri-search-line"></span>
                    </div> --> */}
          </div>
          <div class="mobilelogin gap-2 d-flex align-items-center">
            <div class="others-options">
              <div class="navbar-category">
                <div class="dropdown category-list-dropdown">
                  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="assets/images/profile1.jpg" height="50" width="50" class="rounded-pill" alt="" />
                    Freshgrad
                    <i class="ri-arrow-down-s-line"></i>
                  </button>
                  <div class="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
                    <Link to="#" class="nav-link-item">

                      User Account center
                    </Link>
                    <Link to="#" class="nav-link-item">
                      Hiring Dashboard
                    </Link>
                    <Link to="#" class="nav-link-item">

                      Freshgrad Profile/Resume
                    </Link>

                    <Link to="#" class="logoutbtn">
                      <i class="ri-logout-box-line"></i>
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="header_space"></div>

  <div class="stepbg">
    <div class="client_filter-job pt-2 pb-5">
      <div class="stepsForm">
        <form method="post" id="msform">
          <div class="container">
            <div class="row">

              <div class="col-md-12 col-lg-8 mx-auto">
                <div class="text-end mb-3">
                  <Link to="#" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#feedback">
                    <i class="ri-edit-2-line pe-2"></i>Edit
                  </Link>
                </div>
                <div class="flexdr position-relative shadow-lg">

                  <div class="resumefile">
                    <page size="A4">
                      <div class="d-flex">
                        <div class="leftPanel">
                          <img src="assets/images/profile1.jpg" />
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
                                  2023 - 2042
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="rightPanel">
                          <div>
                            <h3>
                              Jhon Doe
                            </h3>
                            <div class="smallText">
                              <h5>
                                Accountant
                              </h5>
                            </div>
                          </div>
                          <div>
                            <h3>
                              About me
                            </h3>
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
                            <h4>
                              Work experience
                            </h4>
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
  <Footer/>
    </div>
  )
}

export default StudentResume
