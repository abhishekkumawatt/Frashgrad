import React from 'react'
import { Link } from 'react-router-dom';

const InterviewGuideDetails = () => {
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
                                    <Link to="/signup" class="default-btn two rounded-pill">Sign up</Link>
                                </div>
                            </div>
        
                        </div>
                    </div>
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
                            <Link to="/signup" class="default-btn two rounded-pill">Sign up</Link>
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
    <div class="blog-area pt-5 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center product-topper mb-45">
                        <h2>41+ Behavioral Interview Questions and Answers in 2024</h2>
                    </div>

                    <ul class="nav tabs_signup justify-content-center gap-2 pb-4" id="pills-tab" role="tablist">
                        <li class="nav-item flex" role="presentation">
                            <button class="nav-link px-5 active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">Questions and Answers</button>
                        </li>

                        <li class="nav-item flex" role="presentation">
                            <button class="nav-link px-5" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#videos" type="button" role="tab" aria-controls="videos"
                                aria-selected="false">Video</button>
                        </li>
                        <li class="nav-item flex" role="presentation">
                            <button class="nav-link px-5" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">PDF</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <img src="../assets/images/courses/video1.png" alt="" />
                            <article class="mt-4">
                               
                                <h3>1. Are the HTML tags and elements the same thing?</h3>
                                <p>No, HTML tags are used to define the structure of a web page, while HTML elements are
                                    made up
                                    of a set of tags that define a specific part of a web page.</p>
                                <h3>2. What are void elements in HTML?</h3>
                                <p>Void elements in HTML are tags that do not require a closing tag. They are used to
                                    insert
                                    images, line breaks, and other content that does not require additional information.
                                </p>
                                <h3>3. What is the advantage of collapsing white space?</h3>
                                <p>Collapsing white space in HTML can help to reduce the size of web pages and make them
                                    load
                                    faster. It involves removing unnecessary white space between HTML elements.</p>
                                <h3>4. What are HTML Entities?</h3>
                                <p>HTML Entities are special characters used to represent characters that cannot be
                                    typed on a
                                    keyboard. They are often used to display special symbols and foreign characters.</p>
                                <h3>5. How do you display a table in an HTML webpage?</h3>
                                <p>The HTML &lt;table&gt; tag is used to display data in a tabular format. It is also
                                    used to
                                    manage the layout of the page, for example, header section, navigation bar, body
                                    content,
                                    footer section. Given below are the list of HTML tags used for displaying a table in
                                    an HTML
                                    webpage:</p>
                            </article>

                        </div>

                        <div class="tab-pane fade" id="videos" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="blog-card p-3">
                                <video id="my-video" class="video-js" controls preload="auto"
                                    poster="../assets/images/courses/video1.png" data-setup='' loop>
                                    <source
                                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                                        type='video/mp4'/>
                                </video>
                                <div class="content pt-3 pb-0">
                                    <h3>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor
                                        incididunt.
                                    </h3>
                                    <ul class="course-list">
                                        <li><i class="ri-time-fill"></i> 10 hr 07 min</li>
                                        <li><i class="ri-calendar-fill"></i> 18/04/2024</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab"><embed src="../assets/images/pdf.pdf" width="100%"
                                height="2100px" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default InterviewGuideDetails
