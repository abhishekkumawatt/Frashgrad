import React from 'react'
import { Link } from 'react-router-dom';

const InterviewGuide = () => {
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
    <div class="bg_nav-slid bg-white">
        <div class="navbar-area ledu-area otherpages-menu">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <Link to="/">
                                <img src="../assets/images/logos/logo-full.png" height="50"
                                    class="logo-one rounded-pill" alt="logo"/>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="desktop-nav nav-area">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light p-0">
                        <Link class="navbar-brand" to="/">
                            <img src="../assets/images/logos/logo-full.png" class="logo-one rounded-pill" alt="Logo"/>
                        </Link>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav w-100 ms-5">
                                <li class="nav-item">
                                    <Link to="/recruiterdashboaed">
                                        Dashboard
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/myteam">My Team</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/recruiterlist">Candidate profile</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to="/myjobs">My Jobs</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" to="/interviewguide">Interview Guide</Link>
                                </li>
                            </ul>

                            <div class="others-options gap-2 d-flex align-items-center">
                                <div class="optional-item">
                                    <Link to="/jobpost" class="default-btn two p-2 px-3 rounded-pill">Job Post</Link>
                                </div>
                                <div class="optional-item">
                                    <button class="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="ri-notification-2-line"></i></button>
                                </div>
                                <div class="navbar-category">
                                    <div class="dropdown category-list-dropdown">
                                        <button class="btn dropdown-toggle" type="button"
                                            id="dropdownMenuButtoncategory" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <img src="../assets/images/profile1.jpg" height="50" width="50"
                                                class="rounded-pill" alt="" />
                                            Freshgrad
                                            <i class="ri-arrow-down-s-line"></i>
                                        </button>
                                        <div class="dropdown-menu profile_dropdown"
                                            aria-labelledby="dropdownMenuButtoncategory">
                                            <Link to="/profile" class="nav-link-item">
                                                <i class="flaticon-user"></i>
                                                Edit Profile
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
                        <div class="optional-item">
                            <Link to="/signin" class="defaultsignin rounded-pill">Sign In</Link>
                        </div>
                        <div class="optional-item">
                            <Link to="/signin" class="default-btn two rounded-pill">Sign up</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="header_space"></div>


    <div class="blog-area pt-5 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="text-center product-topper mb-45">
                        <h2>Interview Guide Template</h2>
                        <p>Discover effective interview tips and tricks that will enhance your <br />chances of acing
                            the job
                            interview.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="courses-item">
                        <Link to="interview-guide-detals.html">
                            <img src="../assets/images/courses/video3.jpg" alt="Courses"/>
                        </Link>
                        <div class="content">
                            <Link to="interview-guide-detals.html" class="tag-btn">Design</Link>

                            <h3><Link to="interview-guide-detals.html">UI/UX design pattern for succesfull software
                                    applications</Link></h3>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="courses-item">
                        <Link to="interview-guide-detals.html">
                            <img src="../assets/images/courses/video1.png" alt="Courses"/>
                        </Link>
                        <div class="content">
                            <Link to="interview-guide-detals.html" class="tag-btn">Accounting</Link>

                            <h3><Link to="interview-guide-detals.html">Basic knowledge about hodiernal bharat in
                                    history</Link>
                            </h3>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="courses-item">
                        <Link to="interview-guide-detals.html">
                            <img src="../assets/images/courses/video2.jpg" alt="Courses"/>
                        </Link>
                        <div class="content">
                            <Link to="interview-guide-detals.html" class="tag-btn">Business</Link>

                            <h3><Link to="interview-guide-detals.html">The complete accounting &amp; bank financial
                                    course
                                    2021</Link>
                            </h3>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="courses-item">
                        <Link to="interview-guide-detals.html">
                            <img src="../assets/images/courses/video4.jpg" alt="Courses"/>
                        </Link>
                        <div class="content">
                            <Link to="interview-guide-detals.html" class="tag-btn">Business</Link>

                            <h3><Link to="interview-guide-detals.html">The complete accounting &amp; bank financial
                                    course
                                    2021</Link>
                            </h3>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    </div>
  )
}

export default InterviewGuide
