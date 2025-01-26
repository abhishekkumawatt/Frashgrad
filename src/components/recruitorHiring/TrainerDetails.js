import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';
import instructorsdetails from '../../assets/images/instructors/instructors-details.jpg';
import education from '../../assets/images/education.png';
import instructors1 from '../../assets/images/courses/instructors1.jpg';
import coursesimg1 from '../../assets/images/courses/courses-img1.jpg';
import coursesimg2 from '../../assets/images/courses/courses-img2.jpg';
import coursesimg3 from '../../assets/images/courses/courses-img3.jpg';
import coursesinstructors1 from '../../assets/images/courses/courses-instructors1.jpg';
import coursesinstructors2 from '../../assets/images/courses/courses-instructors2.jpg';
import coursesinstructors3 from '../../assets/images/courses/courses-instructors3.jpg';

const TrainerDetails = () => {
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
<Header/>
<div class="header_space"></div>

<div class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8 my-auto">
                <div class="inner-title py-2">
                        <li>
                            <Link to="/trainermentors" class="text-white">All Mentors</Link>
                        </li>
                        <li>Mentors Details</li>
                </div>
            </div>
        </div>

    </div>
</div>

<div class="instructors-details-area py-5 o-grid o-grid--wide js-stickyWrapper">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="instructors-details-img m-0">
                    <div class="card-instrutors shadow position-relative bg-white p-4">
                        <div class="topbatch">
                            <i class="ri-award-fill"></i> Top Mentor
                        </div>
                        <div class="mentersvies0121">
                            <div class="position-relative menter_pro">
                                <img src={instructorsdetails} class="rounded_01top"
                                    alt="Instructor" />
                                <span class="live_user">Available</span>
                            </div>

                            <div class="instructors-details-contents mt-3">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <h3>Kannav </h3>
                                        <h6 class="sub-title mb-2">Web designer</h6>
                                    </div>
                                    <div class="reviewsreat">
                                      <Link to="#" class="default-btn rounded">Book Now</Link>
                                    </div>
                                </div>
                                <p>
                                    AVP of Revenue at Emeritus | Former Management Consultant | IIT Delhi | IIM
                                    Lucknow
                                    | ESCP Paris
                                </p>
                            </div>
                        </div>
                        <div class="instructors-details-contents mt-3">
                            <div class="reviewsreat mb-3">
                                <span class="review"><i class="ri-star-fill text-warning"></i>5.0 (18
                                    Reviews)</span>
                            </div>

                            <div class="businessmen">
                                <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                <div><i class="ri-shield-user-fill"></i> Business And Management</div>
                                <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                            </div>

                        </div>
                    </div>
                    <div class="instructors-details-contents mt-3">
                        <div class="card-instrutors shadow bg-white p-4">
                            <h5>About Mentor</h5>
                            <p>
                                Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Praesent sapien
                                massa,
                                convallis a
                                pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                                sem.
                                Cras
                                ultricies ligula sed
                                magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere
                                cubilia.
                            </p>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac
                                diam
                                sit
                                amet quam
                                vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus
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
                                    <img src={education} alt="" />
                                </div>
                                <div>
                                    <h6>ESCP Business School, Paris, France</h6>
                                    <span>MIM</span>
                                    <p>2016 - 2017</p>
                                </div>
                            </div>
                            <div class="skillstopic_education">
                                <div class="educationicon">
                                    <img src={education} alt="" />
                                </div>
                                <div>
                                    <h6>ESCP Business School, Paris, France</h6>
                                    <span>MIM</span>
                                    <p>2016 - 2017</p>
                                </div>
                            </div>
                            <div class="skillstopic_education">
                                <div class="educationicon">
                                    <img src={education} alt="" />
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
                                    <img src={education} alt="" />
                                </div>
                                <div>
                                    <h6>Head of Marketing</h6>
                                    <span>Sunstone Eduversity</span>
                                    <p>2021 - 2022</p>
                                </div>
                            </div>
                            <div class="skillstopic_education">
                                <div class="educationicon">
                                    <img src={education} alt="" />
                                </div>
                                <div>
                                    <h6>Head of Marketing</h6>
                                    <span>Sunstone Eduversity</span>
                                    <p>2021 - 2022</p>
                                </div>
                            </div>
                            <div class="skillstopic_education">
                                <div class="educationicon">
                                    <img src={education} alt="" />
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
            <div class="col-lg-4">
                <div class="courses-details-tab-content shadow p-3 sticky2 js-sticky">
                    <div class="courses-details-review-form">
                        <h3 class="m-0">What mentees say</h3>

                        <div class="review-comments m-0">
                            <div class="review-item mt-3 pe-0">
                                <div class="content">
                                    <img src={instructors1} alt="Images"/>
                                    <div class="content-dtls">
                                        <h4>Heather Joanne </h4>
                                        <span>15 Jan, 2022 AT 06:30 PM</span>
                                    </div>
                                    <div class="rating">
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-half-fill"></i>
                                    </div>
                                </div>


                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>

                            </div>
                            <div class="review-item pe-0">
                                <div class="content">
                                    <img src={instructors1} alt="Images"/>
                                    <div class="content-dtls">
                                        <h4>Heather Joanne </h4>
                                        <span>15 Jan, 2022 AT 06:30 PM</span>
                                    </div>
                                    <div class="rating">
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-half-fill"></i>
                                    </div>
                                </div>


                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>

                            </div>
                            <div class="review-item pe-0">
                                <div class="content">
                                    <img src={instructors1} alt="Images"/>
                                    <div class="content-dtls">
                                        <h4>Heather Joanne </h4>
                                        <span>15 Jan, 2022 AT 06:30 PM</span>
                                    </div>
                                    <div class="rating">
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-fill"></i>
                                        <i class="ri-star-half-fill"></i>
                                    </div>
                                </div>


                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>

                            </div>
                        </div>
                        <div class="pagination-area mb-0">
                            <Link to="#" class="prev page-numbers">
                                <i class="flaticon-left-arrow"></i>
                            </Link>
                            <span class="page-numbers current" aria-current="page">1</span>
                            <Link to="#" class="page-numbers">2</Link>
                            <Link to="#" class="page-numbers">3</Link>
                            <Link to="#" class="next page-numbers">
                                <i class="flaticon-chevron"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="courses-area py-5">
    <div class="container">
        <div class="section-title text-center mb-45">
            <h2>Similar Mentors</h2>

        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="courses-item">
                    <Link to="/coursesdetails">
                        <img src={coursesimg1} alt="Courses" />
                    </Link>
                    <div class="content">
                        <Link to="/courses" class="tag-btn">Design</Link>
                        <div class="price-text">Free</div>
                        <h3><Link to="/coursesdetails">UI/UX design pattern for succesfull software
                                applications</Link></h3>
                        <ul class="course-list">

                            <li><i class="ri-vidicon-fill"></i> 67 lectures</li>
                        </ul>
                        <div class="bottom-content">
                            <Link to="/instructorsdetails" class="user-area">
                                <img src={coursesinstructors1} alt="Instructors"/>
                                <h3>David warner</h3>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="courses-item">
                    <Link to="/coursesdetails">
                        <img src={coursesimg2} alt="Courses" />
                    </Link>
                    <div class="content">
                        <Link to="/courses" class="tag-btn">Accounting</Link>
                        <div class="price-text">Free</div>
                        <h3><Link to="/coursesdetails">Basic knowledge about hodiernal bharat in history</Link>
                        </h3>
                        <ul class="course-list">

                            <li><i class="ri-vidicon-fill"></i> 27 lectures</li>
                        </ul>
                        <div class="bottom-content">
                            <Link to="/instructorsdetails" class="user-area">
                                <img src={coursesinstructors2} alt="Instructors"/>
                                <h3>David malan</h3>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="courses-item">
                    <Link to="/coursesdetails">
                        <img src={coursesimg3} alt="Courses" />
                    </Link>
                    <div class="content">
                        <Link to="/courses" class="tag-btn">Physics</Link>
                        <div class="price-text">Free</div>
                        <h3><Link to="/coursesdetails">Visual effects for games in unity beginner to
                                intermediate</Link></h3>
                        <ul class="course-list">

                            <li><i class="ri-vidicon-fill"></i> 17 lectures</li>
                        </ul>
                        <div class="bottom-content">
                            <Link to="/instructorsdetails" class="user-area">
                                <img src={coursesinstructors3} alt="Instructors"/>
                                <h3>Emma jhonson</h3>
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

export default TrainerDetails
