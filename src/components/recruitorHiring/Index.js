import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';
import networkingimg from '../../assets/images/networking.png';
import Cybersecurityimg from '../../assets/images/Cybersecurity.png';
import cloudimg from '../../assets/images/cloud.png';
import coursesinstructors1 from '../../assets/images/courses/courses-instructors1.jpg';
import coursesinstructors2 from '../../assets/images/courses/courses-instructors2.jpg';
import coursesinstructors3 from '../../assets/images/courses/courses-instructors3.jpg';
import enrolledimg3 from '../../assets/images/enrolled/enrolled-img3.jpg';
import usersimg from '../../assets/images/users.png';
import careerbannerimg from '../../assets/images/career-banner.png';
import careerbannerimg2 from '../../assets/images/career-banner2.png';
import careerbannerimg3 from '../../assets/images/career-banner3.png';
import careerbannerimg4 from '../../assets/images/career-banner4.png';
import careerbannerimg5 from '../../assets/images/career-banner5.png';
import homevideo1 from '../../assets/images/Home-1-Video.mp4';
import menterimg from '../../assets/images/menter.png';
import instructorsimg1 from '../../assets/images/instructors/instructors-img1.jpg';
import instructorsimg2 from '../../assets/images/instructors/instructors-img2.jpg';
import instructorsimg3 from '../../assets/images/instructors/instructors-img3.jpg';
import instructorsimg4 from '../../assets/images/instructors/instructors-img4.jpg';
import testimonialsimg1 from '../../assets/images/testimonials/testimonials-img1.jpg';
import videohome from '../../assets/images/video-home.mp4';


const Index = () => {
  return (
    <div>
        
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/>
      {/* <div id="preloader">
        <div id="preloader-area">
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

    <div class="hero-slider-areas pt-50 position-relative">
        <div class="univery_add">
            {/* <!-- <div class="firstbanner"><img src="assets/images/hero_img_2_1.png" alt="" /></div>
            <div class="firstbanner2"><img src="assets/images/hero_img_2_2.png" alt="" /></div> --> */}
        </div>
        <div class="hero-slider owl-carousel owl-theme">
            <div class="hero-item">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 col-xl-8 mx-auto text-center">
                            <div class="hero-content">
                                <span class="top-title">Empower Your Future</span>
                                <h1> Train, Thrive, and Secure Your Career Journey as a Fresh Graduate.</h1>
                                <p>
                                    Flexible easy to access learning opportunities can bring a significant
                                    change in
                                    how
                                    to learn! The Ellen can offer you to enjoy the beauty of eLearning!
                                </p>
                                <div class="banner-btn">
                                    <Link to="#" class="default-btn border-radius-50">Find courses</Link>
                                    <Link to="https://www.youtube.com/watch?v=Zd00oIDAt60" class="play-btn">
                                        <i class="flaticon-play-button-arrowhead"></i>
                                        <span class="ms-3 text-white">Watch video</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="hero-item">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 col-xl-8 mx-auto text-center">
                            <div class="hero-content">
                                <span class="top-title">Empower Your Future</span>
                                <h1> Train, Thrive, and Secure Your Career Journey as a Fresh Graduate.</h1>
                                <p>
                                    Flexible easy to access learning opportunities can bring a significant
                                    change in
                                    how
                                    to learn! The Ellen can offer you to enjoy the beauty of eLearning!
                                </p>
                                <div class="banner-btn">
                                    <Link to="#" class="default-btn border-radius-50">Find courses</Link>
                                    <Link to="https://www.youtube.com/watch?v=Zd00oIDAt60" class="play-btn">
                                        <i class="flaticon-play-button-arrowhead"></i>
                                        <span class="title-text">Watch video</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="hero-item">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-8 col-xl-8 mx-auto text-center">
                            <div class="hero-content">
                                <span class="top-title">Empower Your Future</span>
                                <h1> Train, Thrive, and Secure Your Career Journey as a Fresh Graduate.</h1>
                                <p>
                                    Flexible easy to access learning opportunities can bring a significant
                                    change in
                                    how
                                    to learn! The Ellen can offer you to enjoy the beauty of eLearning!
                                </p>
                                <div class="banner-btn">
                                    <Link to="#" class="default-btn border-radius-50">Find courses</Link>
                                    <Link to="https://www.youtube.com/watch?v=Zd00oIDAt60" class="play-btn">
                                        <i class="flaticon-play-button-arrowhead"></i>
                                        <span class="title-text">Watch video</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        {/* <!-- <div class="hero-shape">
            <div class="shape1">
                <img src="assets/images/home-three/shape.png" alt="Shape" />
            </div>
            <div class="shape2">
                <img src="assets/images/home-three/shape2.png" alt="Shape" />
            </div>
        </div> --> */}
    </div>

    {/* <!-- video --> */}
    <div class="video_home">
        <video width="100%" height="100%" class="rounded" autoplay muted playsinline loop >
            <source src={videohome} type="video/mp4"/>
        </video>
    </div>

    {/* <!-- video end --> */}
    <div class="header_space"></div>
    <div class="courses-area py-5 bg-light">
        <div class="container">
            <div class="section-title text-center mb-45">
                <h2>Free Training Program</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Student Training Program</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            "You are allowed to complete only one training program for FREE" & "If you miss 3
                            consecutive days, then you will have to start your program from beginning day 1"
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="courses-item">
                        <Link data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src={networkingimg} alt="Courses" />
                        </Link>
                        <div class="content">
                            <Link data-bs-toggle="modal" data-bs-target="#exampleModal" class="tag-btn">Networking</Link>
                            <div class="price-text">Free</div>
                            <h3> <Link data-bs-toggle="modal" data-bs-target="#exampleModal">Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting
                                    industry.</Link></h3>
                            <ul class="course-list">

                                <li><i class="ri-vidicon-fill"></i> 62 Days </li>
                            </ul>
                            <div class="bottom-content">
                                <Link to="#" class="user-area">
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
                            <img src={Cybersecurityimg} alt="Courses" />
                        </Link>
                        <div class="content">
                            <Link to="/coursesdetails" class="tag-btn">Cybersecurity</Link>
                            <div class="price-text">Free</div>
                            <h3> <Link to="/coursesdetails">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry.</Link>
                            </h3>
                            <ul class="course-list">

                                <li><i class="ri-vidicon-fill"></i> 54 Days</li>
                            </ul>
                            <div class="bottom-content">
                                <Link to="#" class="user-area">
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
                            <img src={cloudimg} alt="Courses" />
                        </Link>
                        <div class="content">
                            <Link to="/coursesdetails" class="tag-btn">Cloud</Link>
                            <div class="price-text">Free</div>
                            <h3><Link to="/coursesdetails">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry.</Link></h3>
                            <ul class="course-list">

                                <li><i class="ri-vidicon-fill"></i> 40 Days</li>
                            </ul>
                            <div class="bottom-content">
                                <Link to="/coursesdetails" class="user-area">
                                    <img src={coursesinstructors3} alt="Instructors"/>
                                    <h3>Emma jhonson</h3>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="courses-item">
                        <Link to="/coursesdetails">
                            <img src={networkingimg} alt="Courses" />
                        </Link>
                        <div class="content">
                            <Link to="/coursesdetails" class="tag-btn">Networking</Link>
                            <div class="price-text">Free</div>
                            <h3><Link to="/coursesdetails">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry.</Link></h3>
                            <ul class="course-list">

                                <li><i class="ri-vidicon-fill"></i> 62 Days</li>
                            </ul>
                            <div class="bottom-content">
                                <Link to="#" class="user-area">
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
                            <img src={Cybersecurityimg} alt="Courses" />
                        </Link>
                        <div class="content">
                            <Link to="/coursesdetails" class="tag-btn">Cybersecurity</Link>
                            <div class="price-text">Free</div>
                            <h3><Link to="courses-details.html">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry.</Link>
                            </h3>
                            <ul class="course-list">

                                <li><i class="ri-vidicon-fill"></i> 54 Days</li>
                            </ul>
                            <div class="bottom-content">
                                <Link to="#" class="user-area">
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
                            <img src={cloudimg} alt="Courses" />
                        </Link>
                        <div class="content">
                            <Link to="/coursesdetails" class="tag-btn">Cloud</Link>
                            <div class="price-text">Free</div>
                            <h3><Link to="/coursesdetails">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry.</Link></h3>
                            <ul class="course-list">

                                <li><i class="ri-vidicon-fill"></i> 40 Days</li>
                            </ul>
                            <div class="bottom-content">
                                <Link to="#" class="user-area">
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

    <div class="enrolled-area-two py-5" id="aboutus">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="enrolled-img-three mb-30 pr-20">
                        <img src={enrolledimg3} alt="Enrolled"/>
                        <div class="enrolled-img-content">
                            <i class="flaticon-discount"></i>
                            <div class="content">
                                <h3>Get 40% off</h3>
                                <p>Every course</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="enrolled-content mb-30">
                        <div class="section-title">
                            <span>About Our FreshGard</span>
                            <h2>A Few Words About the FreshGard.</h2>
                            <p>
                                Education is a vital aspect of human development, providing individuals with
                                knowledge,
                                skills, and opportunities to acquire new information.encompasses formal learning
                                institutions
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-6">
                                <ul class="enrolled-list">
                                    <li><i class="flaticon-check"></i> Full lifetime access</li>
                                    <li><i class="flaticon-check"></i> Certificate of completion</li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-6">
                                <ul class="enrolled-list">
                                    <li><i class="flaticon-check"></i> 20+ downloadable resources</li>
                                    <li><i class="flaticon-check"></i> Free trial 7 days</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="featured-area bg-light py-5" id="career_home">
        <div class="container">
            <div class="row align-items-center mb-45">
                <div class="col-lg-8 col-md-9">
                    <div class="section-title mt-rs-20">
                        <h2>Unlock Your Career</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a
                            galley of type and scrambled it to make a type specimen book.</p>

                    </div>
                </div>
                <div class="col-lg-4  col-md-3 text-end">
                    <img src={usersimg} alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-9">
                    <div class="row career-se">
                        <div class="col-lg-8 col-12 mb-3">
                            <div class="banner-item position-relative">
                                <div class="banner-content">
                                    <span>Free</span>
                                    <h3>Germany Foundation<br/>
                                        Document</h3>
                                    <Link to="#" class="e-btn">View
                                        Courses</Link>
                                </div>
                                <div class="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                                    <img src={careerbannerimg} alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12 mb-3">
                            <div class="banner-item trainer-ban position-relative">
                                <div class="banner-content">
                                    <span>Trainer</span>
                                    <h3>Trainer skills<br/> daily</h3>
                                    <Link to="#" class="e-btn">View</Link>
                                </div>
                                <div class="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                                    <img src={careerbannerimg2} alt="img"/>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-lg-4 col-12 mb-3">
                            <div class="banner-item careerbg trainer-ban position-relative">
                                <div class="banner-content">
                                    <span>Careers</span>
                                    <h3>Jobs <br/>Explore</h3>
                                    <Link to="#" class="e-btn">View</Link>
                                </div>
                                <div class="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                                    <img src={careerbannerimg3} alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-12 mb-3">
                            <div class="banner-item menterbg position-relative">
                                <div class="banner-content">
                                    <span>Top Mentors</span>
                                    <h3>Mentorship
                                      <br/>  Guidance</h3>
                                    <Link to="#" class="e-btn">View
                                        Courses</Link>
                                </div>
                                <div class="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                                    <img src={careerbannerimg4} alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="banner-item companybg trainer-ban position-relative">
                        <div class="banner-content">
                            <span>Company</span>
                            <h3>Compete Battle  For Excellence<br/></h3>
                            <Link to="#" class="e-btn">View</Link>
                        </div>
                        <div class="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                            <img src={careerbannerimg5} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="enrolled-area-two py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="rowf">
                        {/* <!-- <div class="col-12 col-md-6 my-auto enrolled-img-three">
                                <img src="assets/images/tr1.webp" alt="tr">

                                <div>
                                    <img src="assets/images/trainer.webp" alt="tr">
                                </div>
                            </div> --> */}

                        <div class="video_players">
                            <video width="100%" class="rounded" autoplay muted playsinline loop>
                                <source src={homevideo1} type="video/mp4"/>
                            </video>

                            {/* <!-- <div class="enrolled-img-three mb-30 pr-20">
                                    <img src="assets/images/enrolled/enrolled-img3.jpg" class="img-fluid"
                                        alt="Enrolled">

                                </div> --> */}
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="enrolled-content mb-30">
                        <div class="section-title">
                            <span>FLEXIBLE SUPPORTED LEARNING</span>
                            <h2>Expertise Across AllDisciplines</h2>
                            <p>
                                Education is a vital aspect of human development, providing individuals with
                                knowledge,
                                skills, and opportunities to acquire new information.encompasses formal learning
                                institutions
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-6">
                                <div class="counter-content">
                                    <i class="flaticon-online-course"></i>
                                    <h3><span class="odometer" data-count="15000">00000</span>+</h3>
                                    <p>Courses & videos</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-6">
                                <div class="counter-content">
                                    <i class="flaticon-student"></i>
                                    <h3><span class="odometer" data-count="145000">000000</span>+</h3>
                                    <p>Students enrolled</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-6">
                                <div class="counter-content">
                                    <i class="flaticon-online-course-1"></i>
                                    <h3><span class="odometer" data-count="10000">00000</span>+</h3>
                                    <p>Courses instructors</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-6">
                                <div class="counter-content">
                                    <i class="flaticon-customer-satisfaction"></i>
                                    <h3><span class="odometer" data-count="100">000</span>%</h3>
                                    <p>Satisfaction rate</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="featured-area bg-light py-5" id="trainer-mentor">
        <div class="container">
            <div class="row align-items-center mb-45">
                <div class="col-lg-8 col-md-9">
                    <div class="section-title mt-rs-20">
                        <h2>Personalised Mentor Support</h2>
                        <p>Select a mentor from a pool of 2000+ industry experts & get 1-on-1 mentorship!</p>
                    </div>
                </div>
                <div class="col-lg-4  col-md-3 text-end">
                    <Link to="/trainermentors" class="default-btn border-radius-50">View more</Link>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="featured-item-one">
                        <img src={menterimg} alt="" class="rounded img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="instructors-area py-5">
        <div class="container">
            <div class="row align-items-center mb-45">
                <div class="col-lg-8 col-md-9">
                    <div class="section-title mt-rs-20">
                        <h2>Meet our top Mentors</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-3 text-end">
                    <Link to="/trainermentors" class="default-btn">View all instructor</Link>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6">
                    <div class="instructors-item">
                        <div class="instructors-img">
                            <Link to="/trainerdetails">
                                <img src={instructorsimg1} alt="Team Images"/>
                            </Link>

                        </div>
                        <div class="content">
                            <h3><Link to="/trainerdetails">Sally welch</Link></h3>
                            <span>Web designer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="instructors-item">
                        <div class="instructors-img">
                            <Link to="/trainerdetails">
                                <img src={instructorsimg2} alt="Team Images"/>
                            </Link>

                        </div>
                        <div class="content">
                            <h3><Link to="/trainerdetails">Jesse joslin</Link></h3>
                            <span>Content strategist</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="instructors-item">
                        <div class="instructors-img">
                            <Link to="/trainerdetails">
                                <img src={instructorsimg3} alt="Team Images"/>
                            </Link>

                        </div>
                        <div class="content">
                            <h3><Link to="/trainerdetails">Lance altman</Link></h3>
                            <span>Photographer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="instructors-item">
                        <div class="instructors-img">
                            <Link to="/trainerdetails">
                                <img src={instructorsimg4} alt="Team Images"/>
                            </Link>

                        </div>
                        <div class="content">
                            <h3><Link to="/trainerdetails">Jonquil von</Link></h3>
                            <span>Art director</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="testimonials-area bg-light py-5">
        <div class="container">
            <div class="section-title text-center">
                <span>TESTIMONIAL</span>
                <h2>What people say about us</h2>
            </div>
            <div class="testimonials-slider-two owl-carousel owl-theme">
                <div class="testimonials-card-two">
                    <div class="rating">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </div>
                    <p>“Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa
                        vel,
                        porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur
                        ridiculus.”</p>
                    <div class="content">
                        <img src={testimonialsimg1} alt="testimonials" />
                        <h3>Nikolas brooten</h3>
                        <span>Student</span>
                    </div>
                    <div class="quote"> <i class="flaticon-quote"></i></div>
                </div>
                <div class="testimonials-card-two">
                    <div class="rating">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </div>
                    <p>“Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa
                        vel,
                        porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur
                        ridiculus.”</p>
                    <div class="content">
                        <img src="assets/images/testimonials/testimonials-img2.jpg" alt="testimonials" />
                        <h3>Terry ambady</h3>
                        <span>Content strategist</span>
                    </div>
                    <div class="quote"> <i class="flaticon-quote"></i></div>
                </div>
                <div class="testimonials-card-two">
                    <div class="rating">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </div>
                    <p>“Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa
                        vel,
                        porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur
                        ridiculus.”</p>
                    <div class="content">
                        <img src="assets/images/testimonials/testimonials-img3.jpg" alt="testimonials" />
                        <h3>Cory zamora</h3>
                        <span>Photographer</span>
                    </div>
                    <div class="quote"> <i class="flaticon-quote"></i></div>
                </div>
                <div class="testimonials-card-two">
                    <div class="rating">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </div>
                    <p>“Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa
                        vel,
                        porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur
                        ridiculus.”</p>
                    <div class="content">
                        <img src="assets/images/testimonials/testimonials-img3.jpg" alt="testimonials" />
                        <h3>Jonquil von</h3>
                        <span>Photographer</span>
                    </div>
                    <div class="quote"> <i class="flaticon-quote"></i></div>
                </div>
            </div>
        </div>
    </div>




     <div class="blog-area pt-100 pb-70"></div>
     <Footer/>
    </div>
  )
}

export default Index
