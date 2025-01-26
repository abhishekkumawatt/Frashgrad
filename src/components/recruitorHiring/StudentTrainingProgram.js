import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';

const StudentTrainingProgram = () => {
  return (
    <div>
        <div class="bg_nav-slid bg-white">
        <div class="navbar-area ledu-area otherpages-menu">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <Link to="/">
                                <img src="assets/images/logos/logo-full.png" height="50" class="logo-one rounded-pill"
                                    alt="logo"/>

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
                                    <Link class="nav-link" to="/studentresume">Resume</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" to="/studenttrainingprogram">Training Program</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="#">Coaching Center</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/studentjobs">Jobs</Link>
                                </li>

                            </ul>

                            <div class="others-options gap-2 d-flex align-items-center">

                                <div class="optional-item">
                                    <button class="btn btn-primary rounded-pill" type="button"
                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight"><i class="ri-notification-2-line"></i></button>
                                </div>
                                <div class="navbar-category">
                                    <div class="dropdown category-list-dropdown">
                                        <button class="btn dropdown-toggle" type="button"
                                            id="dropdownMenuButtoncategory" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <img src="assets/images/profile1.jpg" height="50" width="50"
                                                class="rounded-pill" alt="" />
                                            Freshgrad
                                            <i class="ri-arrow-down-s-line"></i>
                                        </button>
                                        <div class="dropdown-menu profile_dropdown"
                                            aria-labelledby="dropdownMenuButtoncategory">
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
                                        <img src="assets/images/profile1.jpg" height="50" width="50"
                                            class="rounded-pill" alt="" />
                                        Freshgrad
                                        <i class="ri-arrow-down-s-line"></i>
                                    </button>
                                    <div class="dropdown-menu profile_dropdown"
                                        aria-labelledby="dropdownMenuButtoncategory">
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
    <div class="courses-area py-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="courses-page-sidebar pr-20">
                        <div class="courses-page-side-bar-widget">
                            <h3 class="title">Search</h3>
                            <div class="nav-widget-form m-0">
                                <form class="search-form m-0 p-0 search-form-bg w-100">
                                    <input type="search" class="form-control" placeholder="Search courses"/>
                                    <button type="submit">
                                        <i class="ri-search-line"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="courses-page-side-bar-widget">
                            <h3 class="title">Categories</h3>
                            <ul class="courses-page-content">
                                <li>
                                    <input id="check-f" type="checkbox" name="check"/>
                                    <label for="check-f">Networking <span class="fl">10</span></label>
                                </li>
                                <li>
                                    <input id="check-a" type="checkbox" name="check"/>
                                    <label for="check-a">Cybersecurity <span class="fl">34</span> </label>
                                </li>
                                <li>
                                    <input id="check-b" type="checkbox" name="check"/>
                                    <label for="check-b">Cloud <span class="fl">14</span></label>
                                </li>
                                <li>
                                    <input id="check-c" type="checkbox" name="check"/>
                                    <label for="check-c">Ui/Ux Design <span class="fl">56</span> </label>
                                </li>
                                <li>
                                    <input id="check-d" type="checkbox" name="check"/>
                                    <label for="check-d">Design <span class="fl">22</span></label>
                                </li>
                            </ul>
                        </div>
                        <div class="courses-page-side-bar-widget">
                            <h3 class="title">Price</h3>
                            <ul class="courses-page-content">
                                <li>
                                    <input id="check-g" type="checkbox" name="check"/>
                                    <label for="check-g">All </label>
                                </li>
                                <li>
                                    <input id="check-h" type="checkbox" name="check"/>
                                    <label for="check-h">Free </label>
                                </li>
                                <li>
                                    <input id="check-i" type="checkbox" name="check"/>
                                    <label for="check-i">Paid </label>
                                </li>
                            </ul>
                        </div>
                        <div class="courses-page-side-bar-widget">
                            <h3 class="title">Level</h3>
                            <ul class="courses-page-content">
                                <li>
                                    <input id="check-j" type="checkbox" name="check"/>
                                    <label for="check-j">Beginner (03) </label>
                                </li>
                                <li>
                                    <input id="check-k" type="checkbox" name="check"/>
                                    <label for="check-k">Intermediate (14) </label>
                                </li>
                                <li>
                                    <input id="check-l" type="checkbox" name="check"/>
                                    <label for="check-l">Advanced (17)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="courses-item">
                                <Link to="courses-details.html">
                                    <img src="assets/images/networking.png" alt="Courses" />
                                </Link>
                                <div class="content">
                                    <Link to="courses-details.html" class="tag-btn">Networking</Link>
                                    <div class="price-text">Free</div>
                                    <h3> <Link to="courses-details.html">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting
                                            industry.</Link></h3>
                                    <ul class="course-list">

                                        <li><i class="ri-vidicon-fill"></i> 62 Days</li>
                                    </ul>
                                    <div class="bottom-content">
                                        <Link to="#" class="user-area">
                                            <img src="assets/images/courses/courses-instructors1.jpg" alt="Instructors"/>
                                            <h3>David warner</h3>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="courses-item">
                                <Link to="courses-details.html">
                                    <img src="assets/images/Cybersecurity.png" alt="Courses" />
                                </Link>
                                <div class="content">
                                    <Link to="courses-details.html" class="tag-btn">Cybersecurity</Link>
                                    <div class="price-text">Free</div>
                                    <h3> <Link to="courses-details.html">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting
                                            industry.</Link>
                                    </h3>
                                    <ul class="course-list">

                                        <li><i class="ri-vidicon-fill"></i> 54 Days</li>
                                    </ul>
                                    <div class="bottom-content">
                                        <Link to="#" class="user-area">
                                            <img src="assets/images/courses/courses-instructors2.jpg" alt="Instructors"/>
                                            <h3>David malan</h3>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="courses-item">
                                <Link to="courses-details.html">
                                    <img src="assets/images/cloud.png" alt="Courses" />
                                </Link>
                                <div class="content">
                                    <Link to="courses-details.html" class="tag-btn">Cloud</Link>
                                    <div class="price-text">Free</div>
                                    <h3><Link to="courses-details.html">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting
                                            industry.</Link></h3>
                                    <ul class="course-list">

                                        <li><i class="ri-vidicon-fill"></i> 40 Days</li>
                                    </ul>
                                    <div class="bottom-content">
                                        <Link to="courses-details.html" class="user-area">
                                            <img src="assets/images/courses/courses-instructors3.jpg" alt="Instructors"/>
                                            <h3>Emma jhonson</h3>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="courses-item">
                                <Link to="courses-details.html">
                                    <img src="assets/images/networking.png" alt="Courses" />
                                </Link>
                                <div class="content">
                                    <Link to="courses-details.html" class="tag-btn">Networking</Link>
                                    <div class="price-text">Free</div>
                                    <h3><Link to="courses-details.html">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting
                                            industry.</Link></h3>
                                    <ul class="course-list">

                                        <li><i class="ri-vidicon-fill"></i> 62 Days</li>
                                    </ul>
                                    <div class="bottom-content">
                                        <Link to="#" class="user-area">
                                            <img src="assets/images/courses/courses-instructors1.jpg" alt="Instructors"/>
                                            <h3>David warner</h3>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="courses-item">
                                <Link to="courses-details.html">
                                    <img src="assets/images/Cybersecurity.png" alt="Courses" />
                                </Link>
                                <div class="content">
                                    <Link to="courses-details.html" class="tag-btn">Cybersecurity</Link>
                                    <div class="price-text">$129</div>
                                    <h3><Link to="courses-details.html">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting
                                            industry.</Link>
                                    </h3>
                                    <ul class="course-list">

                                        <li><i class="ri-vidicon-fill"></i> 54 Days</li>
                                    </ul>
                                    <div class="bottom-content">
                                        <Link to="#" class="user-area">
                                            <img src="assets/images/courses/courses-instructors2.jpg" alt="Instructors"/>
                                            <h3>David malan</h3>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="courses-item">
                                <Link to="courses-details.html">
                                    <img src="assets/images/cloud.png" alt="Courses" />
                                </Link>
                                <div class="content">
                                    <Link to="courses-details.html" class="tag-btn">Cloud</Link>
                                    <div class="price-text">Free</div>
                                    <h3><Link to="courses-details.html">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting
                                            industry.</Link></h3>
                                    <ul class="course-list">

                                        <li><i class="ri-vidicon-fill"></i> 40 Days</li>
                                    </ul>
                                    <div class="bottom-content">
                                        <Link to="#" class="user-area">
                                            <img src="assets/images/courses/courses-instructors3.jpg" alt="Instructors"/>
                                            <h3>Emma jhonson</h3>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 text-center">
                            <div class="pagination-area">
                                <Link to="courses-sidebar.html" class="prev page-numbers">
                                    <i class="flaticon-left-arrow"></i>
                                </Link>
                                <span class="page-numbers current" aria-current="page">1</span>
                                <Link to="courses-sidebar.html" class="page-numbers">2</Link>
                                <Link to="courses-sidebar.html" class="page-numbers">3</Link>
                                <Link to="courses-sidebar.html" class="next page-numbers">
                                    <i class="flaticon-chevron"></i>
                                </Link>
                            </div>
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

export default StudentTrainingProgram
