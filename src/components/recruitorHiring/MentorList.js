import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';

const MentorList = () => {
  return (
    <div>
        <div class="bg_nav-slid bg-white">
        <div class="navbar-area ledu-area otherpages-menu">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <Link to="/">
                                <img src="assets/images/logos/logo-full.png" height="50"
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
                                    <Link to="/recruiter" class="nav-link">
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
                            <Link to="/signup" class="default-btn two rounded-pill">Sign up</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="header_space"></div>

      <div class="recruiter_list pb-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <form>
                        <div class="searchlocation">
                            <div class="iconfield">
                                <div class="icon_search">
                                    <img src="assets/images/icon/search-icon.svg" alt=""/>
                                </div>
                                <div class="input-field">
                                    <div class="ca-search-form-container">
                                        <div class="ca-search-input-container">
                                            <div class="ca-search-typewriter-container">
                                                <span id="ca-typewriter-here"></span>
                                            </div>
                                            <input type="text" id="ca-search-input" class="ca-search-input"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="iconfield">
                                <div class="icon_search">
                                    <img src="assets/images/icon/location-icon.svg" alt=""/>
                                </div>
                                <div class="input-field">
                                    <input type="text" placeholder="USA, Florida" class="form-control" required=""/>
                                </div>
                            </div>


                            <div class="input-field ad121">
                                <input type="submit" value="Search" class="submit_btn"/>
                            </div>

                        </div>
                    </form>
                    <div class="left_recruiterlist">
                        <div class="sticky-header">
                            <div class="nav flex-column recruiter_all_lists nav-pills" id="v-pills-tab" role="tablist"
                                aria-orientation="vertical">
                                <div class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                                    aria-selected="true">
                                    <div class="card_rec position-relative">

                                        <div class="mentersvies0121">
                                            <div class="position-relative">
                                                <img src="assets/images/instructors/instructors-details.jpg"
                                                    class="img-fluid rounded" alt="Instructor"/>
                                                <span class="live_user">Available</span>
                                            </div>
                                            <div class="instructors-details-contents">
                                                <div class="d-flex justify-content-between gap-2">
                                                    <div class="comnam">
                                                        <h3>Kannav </h3>
                                                        <h6 class="sub-title">Web designer</h6>
                                                    </div>
                                                    <div class="reviewsreat">
                                                        <span class="reviewd"><i
                                                                class="ri-star-fill text-warning"></i>5.0
                                                            (18
                                                            Reviews)</span>
                                                    </div>
                                                </div>
                                                <p class="perographsv">
                                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                    Delhi |
                                                    IIM
                                                    Lucknow
                                                    | ESCP Paris
                                                </p>
                                            </div>
                                        </div>
                                        <div class="skillstopic">
                                            <div>product Management</div>
                                            <div>Business Development</div>
                                            <div>Career Advice</div>
                                            <div>+3</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-profile" type="button" role="tab"
                                    aria-controls="v-pills-profile" aria-selected="false">
                                    <div class="card_rec position-relative">

                                        <div class="mentersvies0121">
                                            <div class="position-relative">
                                                <img src="assets/images/instructors/instructors-img6.jpg"
                                                    class="img-fluid rounded" alt="Instructor"/>
                                                <span class="live_user">Available</span>
                                            </div>
                                            <div class="instructors-details-contents">
                                                <div class="d-flex justify-content-between gap-2">
                                                    <div class="comnam">
                                                        <h3>Kannav </h3>
                                                        <h6 class="sub-title">Web designer</h6>
                                                    </div>
                                                    <div class="reviewsreat">
                                                        <span class="reviewd"><i
                                                                class="ri-star-fill text-warning"></i>5.0
                                                            (18
                                                            Reviews)</span>
                                                    </div>
                                                </div>
                                                <p class="perographsv">
                                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                    Delhi |
                                                    IIM
                                                    Lucknow
                                                    | ESCP Paris
                                                </p>
                                            </div>
                                        </div>
                                        <div class="skillstopic">
                                            <div>product Management</div>
                                            <div>Business Development</div>
                                            <div>Career Advice</div>
                                            <div>+3</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-messages" type="button" role="tab"
                                    aria-controls="v-pills-messages" aria-selected="false">
                                    <div class="card_rec position-relative">

                                        <div class="mentersvies0121">
                                            <div class="position-relative">
                                                <img src="assets/images/instructors/instructors-img3.jpg"
                                                    class="img-fluid rounded" alt="Instructor"/>
                                                <span class="live_user">Available</span>
                                            </div>
                                            <div class="instructors-details-contents">
                                                <div class="d-flex justify-content-between gap-2">
                                                    <div class="comnam">
                                                        <h3>Kannav </h3>
                                                        <h6 class="sub-title">Web designer</h6>
                                                    </div>
                                                    <div class="reviewsreat">
                                                        <span class="reviewd"><i
                                                                class="ri-star-fill text-warning"></i>5.0
                                                            (18
                                                            Reviews)</span>
                                                    </div>
                                                </div>
                                                <p class="perographsv">
                                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                    Delhi |
                                                    IIM
                                                    Lucknow
                                                    | ESCP Paris
                                                </p>
                                            </div>
                                        </div>
                                        <div class="skillstopic">
                                            <div>product Management</div>
                                            <div>Business Development</div>
                                            <div>Career Advice</div>
                                            <div>+3</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                    data-bs-target="#v-pills-settings" type="button" role="tab"
                                    aria-controls="v-pills-settings" aria-selected="false">
                                    <div class="card_rec position-relative">

                                        <div class="mentersvies0121">
                                            <div class="position-relative">
                                                <img src="assets/images/instructors/instructors-details.jpg"
                                                    class="img-fluid rounded" alt="Instructor"/>
                                                <span class="live_user">Available</span>
                                            </div>
                                            <div class="instructors-details-contents">
                                                <div class="d-flex justify-content-between gap-2">
                                                    <div class="comnam">
                                                        <h3>Kannav </h3>
                                                        <h6 class="sub-title">Web designer</h6>
                                                    </div>
                                                    <div class="reviewsreat">
                                                        <span class="reviewd"><i
                                                                class="ri-star-fill text-warning"></i>5.0
                                                            (18
                                                            Reviews)</span>
                                                    </div>
                                                </div>
                                                <p class="perographsv">
                                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                    Delhi |
                                                    IIM
                                                    Lucknow
                                                    | ESCP Paris
                                                </p>
                                            </div>
                                        </div>
                                        <div class="skillstopic">
                                            <div>product Management</div>
                                            <div>Business Development</div>
                                            <div>Career Advice</div>
                                            <div>+3</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                aria-labelledby="v-pills-home-tab">
                                <div class="instructors-details-img m-0">
                                    <div class="card-instrutors shadow position-relative bg-white p-4">
                                        <div class="topbatch">
                                            <i class="ri-award-fill"></i> Top Mentor
                                        </div>
                                        <div class="mentersvies0121">
                                            <div class="position-relative menter_pro">
                                                <img src="assets/images/instructors/instructors-details.jpg"
                                                    class="rounded_01top" alt="Instructor"/>
                                                <span class="live_user">Available</span>
                                            </div>

                                            <div class="instructors-details-contents mt-3">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <h3>Kannav </h3>
                                                        <h6 class="sub-title mb-2">Web designer</h6>
                                                    </div>

                                                </div>
                                                <p>
                                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                    Delhi | IIM
                                                    Lucknow
                                                    | ESCP Paris
                                                </p>
                                            </div>
                                        </div>
                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex align-items-center mb-3 justify-content-between">
                                                <div class="reviewsreat">
                                                    <span class="review"><i class="ri-star-fill text-warning"></i>5.0
                                                        (18
                                                        Reviews)</span>
                                                </div>
                                                <Link to="#" class="default-btn rounded" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Book Now</Link>
                                            </div>

                                            <div class="businessmen">
                                                <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                                <div><i class="ri-shield-user-fill"></i> Business And Management
                                                </div>
                                                <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                                <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Metting Session
                                                        Date
                                                        and Time</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">

                                                    <div id="demo"></div>
                                                    <div id="demo-timegrid"></div>
                                                </div>
                                                <div class="modal-footer">

                                                    <button type="button" class="default-btn rounded">Book
                                                        Session</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>About Mentor</h5>
                                            <p>
                                                Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                                                Praesent sapien
                                                massa,
                                                convallis a
                                                pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                                                porttitor at
                                                sem.
                                                Cras
                                                ultricies ligula sed
                                                magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                                                luctus
                                                et ultrices
                                                posuere
                                                cubilia.
                                            </p>
                                            <p>
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                dui.
                                                Vestibulum ac
                                                diam
                                                sit
                                                amet quam
                                                vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                                nisl
                                                tempus
                                                convallis
                                                quis
                                                ac lectus.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Topics</h5>
                                            <div class="skillstopic">
                                                <div>#Build a team</div>
                                                <div>#Change jobs</div>
                                                <div>#Foster team culture</div>
                                                <div>#Get a raise</div>
                                                <div>#Get your Resume/CV reviewed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Skills</h5>
                                            <div class="skillstopic">
                                                <div> #Product Consulting</div>
                                                <div>#Product Management</div>
                                                <div>#How to get high-impact jobs - VCs/Strategy</div>
                                                <div>#Career Advice</div>
                                                <div>#CAT Preparation</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Education</h5>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Work Experience</h5>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                aria-labelledby="v-pills-profile-tab">
                                <div class="instructors-details-img m-0">
                                    <div class="card-instrutors shadow position-relative bg-white p-4">
                                        <div class="topbatch">
                                            <i class="ri-award-fill"></i> Top Mentor
                                        </div>
                                        <div class="mentersvies0121">
                                            <div class="position-relative menter_pro">
                                                <img src="assets/images/instructors/instructors-details.jpg"
                                                    class="rounded_01top" alt="Instructor"/>
                                                <span class="live_user">Available</span>
                                            </div>

                                            <div class="instructors-details-contents mt-3">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <h3>Kannav </h3>
                                                        <h6 class="sub-title mb-2">Web designer</h6>
                                                    </div>

                                                </div>
                                                <p>
                                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                    Delhi | IIM
                                                    Lucknow
                                                    | ESCP Paris
                                                </p>
                                            </div>
                                        </div>
                                        <div class="instructors-details-contents mt-3">
                                            <div class="reviewsreat mb-3">
                                                <span class="review"><i class="ri-star-fill text-warning"></i>5.0
                                                    (18
                                                    Reviews)</span>
                                            </div>

                                            <div class="businessmen">
                                                <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                                <div><i class="ri-shield-user-fill"></i> Business And Management
                                                </div>
                                                <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                                <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>About Mentor</h5>
                                            <p>
                                                Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                                                Praesent sapien
                                                massa,
                                                convallis a
                                                pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                                                porttitor at
                                                sem.
                                                Cras
                                                ultricies ligula sed
                                                magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                                                luctus
                                                et ultrices
                                                posuere
                                                cubilia.
                                            </p>
                                            <p>
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                dui.
                                                Vestibulum ac
                                                diam
                                                sit
                                                amet quam
                                                vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                                nisl
                                                tempus
                                                convallis
                                                quis
                                                ac lectus.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Topics</h5>
                                            <div class="skillstopic">
                                                <div>#Build a team</div>
                                                <div>#Change jobs</div>
                                                <div>#Foster team culture</div>
                                                <div>#Get a raise</div>
                                                <div>#Get your Resume/CV reviewed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Skills</h5>
                                            <div class="skillstopic">
                                                <div> #Product Consulting</div>
                                                <div>#Product Management</div>
                                                <div>#How to get high-impact jobs - VCs/Strategy</div>
                                                <div>#Career Advice</div>
                                                <div>#CAT Preparation</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Education</h5>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Work Experience</h5>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                aria-labelledby="v-pills-messages-tab">
                                <div class="instructors-details-img m-0">
                                    <div class="card-instrutors shadow position-relative bg-white p-4">
                                        <div class="topbatch">
                                            <i class="ri-award-fill"></i> Top Mentor
                                        </div>
                                        <div class="mentersvies0121">
                                            <div class="position-relative menter_pro">
                                                <img src="assets/images/instructors/instructors-details.jpg"
                                                    class="rounded_01top" alt="Instructor"/>
                                                <span class="live_user">Available</span>
                                            </div>

                                            <div class="instructors-details-contents mt-3">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <h3>Kannav </h3>
                                                        <h6 class="sub-title mb-2">Web designer</h6>
                                                    </div>

                                                </div>
                                                <p>
                                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                    Delhi | IIM
                                                    Lucknow
                                                    | ESCP Paris
                                                </p>
                                            </div>
                                        </div>
                                        <div class="instructors-details-contents mt-3">
                                            <div class="reviewsreat mb-3">
                                                <span class="review"><i class="ri-star-fill text-warning"></i>5.0
                                                    (18
                                                    Reviews)</span>
                                            </div>

                                            <div class="businessmen">
                                                <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                                <div><i class="ri-shield-user-fill"></i> Business And Management
                                                </div>
                                                <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                                <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>About Mentor</h5>
                                            <p>
                                                Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                                                Praesent sapien
                                                massa,
                                                convallis a
                                                pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                                                porttitor at
                                                sem.
                                                Cras
                                                ultricies ligula sed
                                                magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                                                luctus
                                                et ultrices
                                                posuere
                                                cubilia.
                                            </p>
                                            <p>
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                dui.
                                                Vestibulum ac
                                                diam
                                                sit
                                                amet quam
                                                vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                                nisl
                                                tempus
                                                convallis
                                                quis
                                                ac lectus.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Topics</h5>
                                            <div class="skillstopic">
                                                <div>#Build a team</div>
                                                <div>#Change jobs</div>
                                                <div>#Foster team culture</div>
                                                <div>#Get a raise</div>
                                                <div>#Get your Resume/CV reviewed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Skills</h5>
                                            <div class="skillstopic">
                                                <div> #Product Consulting</div>
                                                <div>#Product Management</div>
                                                <div>#How to get high-impact jobs - VCs/Strategy</div>
                                                <div>#Career Advice</div>
                                                <div>#CAT Preparation</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Education</h5>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Work Experience</h5>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                aria-labelledby="v-pills-settings-tab">
                                <div class="instructors-details-img m-0">
                                    <div class="card-instrutors shadow position-relative bg-white p-4">
                                        <div class="topbatch">
                                            <i class="ri-award-fill"></i> Top Mentor
                                        </div>
                                        <div class="mentersvies0121">
                                            <div class="position-relative menter_pro">
                                                <img src="assets/images/instructors/instructors-details.jpg"
                                                    class="rounded_01top" alt="Instructor"/>
                                                <span class="live_user">Available</span>
                                            </div>

                                            <div class="instructors-details-contents mt-3">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <h3>Kannav </h3>
                                                        <h6 class="sub-title mb-2">Web designer</h6>
                                                    </div>

                                                </div>
                                                <p>
                                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                    Delhi | IIM
                                                    Lucknow
                                                    | ESCP Paris
                                                </p>
                                            </div>
                                        </div>
                                        <div class="instructors-details-contents mt-3">
                                            <div class="reviewsreat mb-3">
                                                <span class="review"><i class="ri-star-fill text-warning"></i>5.0
                                                    (18
                                                    Reviews)</span>
                                            </div>

                                            <div class="businessmen">
                                                <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                                <div><i class="ri-shield-user-fill"></i> Business And Management
                                                </div>
                                                <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                                <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>About Mentor</h5>
                                            <p>
                                                Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                                                Praesent sapien
                                                massa,
                                                convallis a
                                                pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                                                porttitor at
                                                sem.
                                                Cras
                                                ultricies ligula sed
                                                magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                                                luctus
                                                et ultrices
                                                posuere
                                                cubilia.
                                            </p>
                                            <p>
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                dui.
                                                Vestibulum ac
                                                diam
                                                sit
                                                amet quam
                                                vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                                nisl
                                                tempus
                                                convallis
                                                quis
                                                ac lectus.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Topics</h5>
                                            <div class="skillstopic">
                                                <div>#Build a team</div>
                                                <div>#Change jobs</div>
                                                <div>#Foster team culture</div>
                                                <div>#Get a raise</div>
                                                <div>#Get your Resume/CV reviewed</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Skills</h5>
                                            <div class="skillstopic">
                                                <div> #Product Consulting</div>
                                                <div>#Product Management</div>
                                                <div>#How to get high-impact jobs - VCs/Strategy</div>
                                                <div>#Career Advice</div>
                                                <div>#CAT Preparation</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Education</h5>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>ESCP Business School, Paris, France</h6>
                                                    <span>MIM</span>
                                                    <p>2016 - 2017</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="card-instrutors shadow bg-white p-4">
                                            <h5>Work Experience</h5>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                            <div class="skillstopic_education">
                                                <div class="educationicon">
                                                    <img src="assets/images/education.png" alt=""/>
                                                </div>
                                                <div>
                                                    <h6>Head of Marketing</h6>
                                                    <span>Sunstone Eduversity</span>
                                                    <p>2021 - 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default MentorList
