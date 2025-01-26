import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';
import trainerbanner from '../../assets/images/trainer-banner.png'
import instructorimg1 from '../../assets/images/instructors/instructors-img1.jpg'
import instructorimg2 from '../../assets/images/instructors/instructors-img2.jpg'
import instructorimg3 from '../../assets/images/instructors/instructors-img3.jpg'
import instructorimg4 from '../../assets/images/instructors/instructors-img4.jpg'
import instructorimg5 from '../../assets/images/instructors/instructors-img5.jpg'
import instructorimg6 from '../../assets/images/instructors/instructors-img6.jpg'
import instructorimg7 from '../../assets/images/instructors/instructors-img7.jpg'
import instructorimg8 from '../../assets/images/instructors/instructors-img8.jpg'
import mentorbannerimg from '../../assets/images/mentor-banner.png';
import shape1 from "../../assets/images/home-one/shape1.png";
import shape2 from "../../assets/images/home-one/shape2.png";
import shape3 from "../../assets/images/home-one/shape3.png";
import userimg from '../../assets/images/home-one/user-img.jpg';
import client1 from "../../assets/images/client-logo/client1.png";
import client2 from "../../assets/images/client-logo/client2.png";
import client3 from "../../assets/images/client-logo/client3.png";
import client4 from "../../assets/images/client-logo/client4.png";
import client5 from "../../assets/images/client-logo/client5.png";
import client6 from "../../assets/images/client-logo/client6.png";

const TrainerMentors = () => {
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
    <div class="banner-area bg-white ptb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <span data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">FOR
                            A BETTER FUTURE</span>
                        <h1 data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">
                            Take your team collaboration to the next level</h1>
                        <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">
                            Book a session with freshgrad mentors across domain & work together to build your career!
                        </p>
                        <div class="banner-form-area" data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000"
                            data-aos-once="true">
                           
                                <Link to="/recruiterlist" class="default-btn rounded" type="submit">
                                   Find Mentors
                                </Link>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-img" data-speed="0.05" data-revert="true">
                        <img src={trainerbanner} data-aos="fade-up" data-aos-delay="900"
                            data-aos-duration="1000" data-aos-once="true" alt="Man" />


                        <div class="right-content shadow" data-aos="fade-down" data-aos-delay="900"
                            data-aos-duration="1000" data-aos-once="true">
                            <i class="flaticon-checked"></i>
                            <div class="content">
                                <h3>$4578521.95</h3>
                                <p>This month total earn</p>
                            </div>
                        </div>
                        <div class="left-content shadow" data-aos="fade-up" data-aos-delay="900"
                            data-aos-duration="1000" data-aos-once="true">
                            <div class="content">
                                <img src={userimg} alt="User" />
                                <h3>User experience class</h3>
                                <p>Today at 12.00 PM</p>
                            </div>

                        </div>
                        <div class="banner-img-shape">
                            <div class="shape1" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000"
                                data-aos-once="true">
                                <img src={shape3} alt="Shape" />
                            </div>
                            <div class="shape2" data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000"
                                data-aos-once="true">
                                <img src={shape2} alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-shape">
            <div class="banner-shape1">
                <img src={shape1} alt="Shape" />
            </div>
        </div>
    </div>

    <div class="play-area pt-20">
        <div class="container">
            <div class="title mb-4">
                <h2> We worked with <span>250+ </span> leading universities and companies</h2>
            </div>
            <div class="brand-slider owl-carousel owl-theme pb-100">
                <div class="brand-item">
                    <img src={client1} class="brand-item-logo1" alt="Images"/>

                </div>
                <div class="brand-item">
                    <img src={client2} class="brand-item-logo1" alt="Images"/>
                </div>
                <div class="brand-item">
                    <img src={client3} class="brand-item-logo1" alt="Images"/>
                </div>
                <div class="brand-item">
                    <img src={client4} class="brand-item-logo1" alt="Images"/>
                </div>
                <div class="brand-item">
                    <img src={client5} class="brand-item-logo1" alt="Images"/>
                </div>
                <div class="brand-item">
                    <img src={client6} class="brand-item-logo1" alt="Images"/>
                </div>
            </div>

        </div>
    </div>
    <div class="instructors-area ">
        <div class="container">
            <div class="section-title text-center mb-45">
                <h2>Meet our top instructor</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="instructors-card">
                        <Link to="/trainerdetails">
                            <img src={instructorimg1} alt="Team Images"/>
                        </Link>
                        <div class="content">

                            <h3><Link to="/trainerdetails">Sally</Link></h3>
                            <span>Web designer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="instructors-card">
                        <Link to="/trainerdetails">
                            <img src={instructorimg2} alt="Team Images"/>
                        </Link>
                        <div class="content">

                            <h3><Link to="/trainerdetails">Jesse</Link></h3>
                            <span>Content strategist</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="instructors-card">
                        <Link to="/trainerdetails">
                            <img src={instructorimg3} alt="Team Images"/>
                        </Link>
                        <div class="content">

                            <h3><Link to="/trainerdetails">Lance</Link></h3>
                            <span>Photographer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="instructors-card">
                        <Link to="/trainerdetails">
                            <img src={instructorimg4} alt="Team Images"/>
                        </Link>
                        <div class="content">

                            <h3><Link to="/trainerdetails">Jonquil</Link></h3>
                            <span>Art director</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="instructors-card">
                        <Link to="/trainerdetails">
                            <img src={instructorimg5} alt="Team Images"/>
                        </Link>
                        <div class="content">

                            <h3><Link to="/trainerdetails">Oliva</Link></h3>
                            <span>Web designer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="instructors-card">
                        <Link to="/trainerdetails">
                            <img src={instructorimg6} alt="Team Images"/>
                        </Link>
                        <div class="content">

                            <h3><Link to="/trainerdetails">Carol</Link></h3>
                            <span>Chief programmer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="instructors-card">
                        <Link to="/trainerdetails">
                            <img src={instructorimg7} alt="Team Images"/>
                        </Link>
                        <div class="content">

                            <h3><Link to="/trainerdetails">Jessica</Link></h3>
                            <span>Creative writer</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="instructors-card">
                        <Link to="/trainerdetails">
                            <img src={instructorimg8} alt="Team Images"/>
                        </Link>
                        <div class="content">

                            <h3><Link to="/trainerdetails">David charest</Link></h3>
                            <span>Marketing director</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 text-center">
                    <Link to="/recruiterlist" class="default-btn rounded" type="submit">
                       All Mentors
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div class="enrolled-areas">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="enrolled-content">
                        <div class="section-title">
                            <h2>Become a Mentor & Guide FreshGrad Talent!</h2>
                            <p>
                                Join the community of 2000+ mentors & empower future leaders.
                            </p>
                        </div>


                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="enrolled-img" data-speed="0.05" data-revert="true">
                        <img src={mentorbannerimg} alt="Enrolled" />


                        <div class="left-content">
                            <div class="enrolled-img-content">
                                <i class="flaticon-reading-book active"></i>
                                <div class="content">
                                    <h3>110k+ students</h3>
                                    <p>Learn daily</p>
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

export default TrainerMentors
