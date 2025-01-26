import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const CourseVideoInfo = () => {
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
                                    <Link to="/trainermentors" class="nav-link">
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
                                    <Link to="/signin" class="defaultsignin rounded-pill">Sign In</Link>
                                </div>
                                <div class="optional-item">
                                    <Link to="/signup" class="default-btn two rounded-pill">Sign up</Link>
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

    <div class="blog-area pt-2 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Course Video and PDF Files</h2>
                    <ul class="nav tabs_signup gap-2 pb-4" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link px-5 active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">Videos</button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button class="nav-link px-5" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">PDF</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <div class="blog-card p-3">
                                <video id="my-video" class="video-js" controls preload="auto"
                                    poster="assets/images/courses/video1.png" data-setup='' loop>
                                    <source
                                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                                        type='video/mp4'/>
                                </video>
                                <div class="content pt-3 pb-0">
                                    <h3 style={{color:'black'}}>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor
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
                            aria-labelledby="pills-contact-tab"><embed src="assets/images/pdf.pdf" width="100%"
                                height="2100px" />
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <article>
                        <h2 id="intermediate_html_interview_questions_and_answers">Interview Questions
                            and Answers</h2>
                        <h3>1. Are the HTML tags and elements the same thing?</h3>
                        <p>No, HTML tags are used to define the structure of a web page, while HTML elements are made up
                            of a set of tags that define a specific part of a web page.</p>
                        <h3>2. What are void elements in HTML?</h3>
                        <p>Void elements in HTML are tags that do not require a closing tag. They are used to insert
                            images, line breaks, and other content that does not require additional information.</p>
                        <h3>3. What is the advantage of collapsing white space?</h3>
                        <p>Collapsing white space in HTML can help to reduce the size of web pages and make them load
                            faster. It involves removing unnecessary white space between HTML elements.</p>
                        <h3>4. What are HTML Entities?</h3>
                        <p>HTML Entities are special characters used to represent characters that cannot be typed on a
                            keyboard. They are often used to display special symbols and foreign characters.</p>
                        <h3>5. How do you display a table in an HTML webpage?</h3>
                        <p>The HTML &lt;table&gt; tag is used to display data in a tabular format. It is also used to
                            manage the layout of the page, for example, header section, navigation bar, body content,
                            footer section. Given below are the list of HTML tags used for displaying a table in an HTML
                            webpage:</p>
                    </article>
                </div>
            </div>
        </div>
    </div>
<Footer/>
    </div>
  )
}

export default CourseVideoInfo
