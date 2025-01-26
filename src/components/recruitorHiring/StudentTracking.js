import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';

const StudentTracking = () => {
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
                                    <Link to="/trainingprogram" class="nav-link">
                                        Training Programs
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/recruiterhiringmanager" class="nav-link">
                                        Recruiter
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to="/trainermentors" class="nav-link active">
                                        Mentorship</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contactus" class="nav-link">
                                        Contact Us
                                    </Link>
                                </li>


                            </ul>
                            {/* <!-- <div class="nav-widget-form me-3 d-none d-md-none d-lg-block">
                                <form class="browser-default right position-relative">
                                    <input id="search-input" placeholder="Search" type="text" class="browser-default search-field"
                                       name="q" value="" autocomplete="off" aria-label="Search box">
                                   <label for="search-input"><i class="ri-search-line"></i></label>
                                   <i class="material-icons">cancel</i>
                        
                                   <div class="search-popup">
                                       <div class="search-content">
                                          
                                           <ul class="popup-list">
                                               <li class=""><Link class="grey-text" to="#">Google</Link></li>
                                               <li class=""><Link class="grey-text" to="#">Apple</Link></li>
                                               <li class=""><Link class="grey-text" to="#">Microsoft</Link></li>
                                               <li class=""><Link class="grey-text" to="#">Github</Link></li>
                                           </ul>
                                       </div>
                                   </div>
                               </form> 
                            </div> --> */}
                            <div class="others-options login__signup gap-2 d-flex align-items-center">
                                <div class="optional-item">
                                    <Link to="/signin" class="default-btn two rounded-pill">Sign In</Link>
                                </div>
                                <div class="optional-item">
                                    <Link to="/signup" class="defaultsignin rounded-pill">Sign up</Link>
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
                    {/* <!-- <div class="container">
                        <div class="side-nav-inner">
                            <div class="side-nav justify-content-center align-items-center">
                                <div class="side-item">
                                    <form class="search-form">
                                        <input type="search" class="form-control" placeholder="Search courses">
                                        <button type="submit">
                                            <i class="ri-search-line"></i>
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div> --> */}
                </div>
            </div>
        </div>
    </div>

    <div class="header_space"></div>

    <div class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <h3>Student and Recruiter/Hiring Manager</h3>


                    <table class="table hiretable" id="table">
                        <thead class="bg-light">
                            <tr>
                                <th>Introduction</th>
                                <th>Technical Interview</th>
                                <th>Hiring Manager</th>
                                <th>Hr Offer</th>
                                <th>Status</th>

                            </tr>
                        </thead>

                        <tbody id="tbody">
                            <tr>
                                <td><img src="assets/images/profile1.jpg" class="mr-2" alt="image"/> David Grey </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td><label class="badge badge-gradient-success">DONE</label></td>
                            </tr>
                            <tr>
                                <td><img src="assets/images/profile1.jpg" class="mr-2" alt="image"/> David Grey </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td><label class="badge badge-gradient-success">DONE</label></td>

                            </tr>
                            <tr>
                                <td><img src="assets/images/profile1.jpg" class="mr-2" alt="image"/> David Grey </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td><label class="badge badge-gradient-success">DONE</label></td>

                            </tr>
                            <tr>
                                <td><img src="assets/images/profile1.jpg" class="mr-2" alt="image"/> David Grey </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td>
                                    <div class="form-check"><input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault"/> </div>
                                </td>
                                <td><label class="badge badge-gradient-success">DONE</label></td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default StudentTracking
