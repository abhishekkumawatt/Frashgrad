import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';
import trainerbannerimg from '../../assets/images/trainer-banner.png';
import userimg from '../../assets/images/home-one/user-img.jpg';
import networkingimg from '../../assets/images/networking.png';
import Cybersecurityimg from '../../assets/images/Cybersecurity.png';
import cloudimg from '../../assets/images/cloud.png';
import coursesinstructors1 from '../../assets/images/courses/courses-instructors1.jpg';
import coursesinstructors2 from '../../assets/images/courses/courses-instructors2.jpg';
import coursesinstructors3 from '../../assets/images/courses/courses-instructors3.jpg'; 
import instructorsimg1 from '../../assets/images/instructors/instructors-img1.jpg';
import instructorsimg2 from '../../assets/images/instructors/instructors-img2.jpg';
import instructorsimg3 from '../../assets/images/instructors/instructors-img3.jpg';
import instructorsimg4 from '../../assets/images/instructors/instructors-img4.jpg';
import shape1 from '../../assets/images/home-one/shape1.png'
import shape2 from '../../assets/images/home-one/shape2.png'
import shape3 from '../../assets/images/home-one/shape3.png'

const TrainingProgram = () => {
  return (
    <div>
        <Header/>
      <div class="header_space"></div>
    <div class="banner-area bg-white py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <span data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">FOR
                            A BETTER FUTURE</span>
                        <h1 data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">
                            Take your team collaboration to the next level</h1>
                        <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">
                            Book a session with freshgrad mentors across domain & work together to build your career!</p>
                        <div class="banner-form-area" data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000"
                            data-aos-once="true">
                           
                        </div>
                      
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-img" data-speed="0.05" data-revert="true">
                        <img src={trainerbannerimg} data-aos="fade-up" data-aos-delay="900"
                            data-aos-duration="1000" data-aos-once="true" alt="Man" />
                       
                       
                        <div class="right-content shadow" data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000"
                            data-aos-once="true">
                            <i class="flaticon-checked"></i>
                            <div class="content">
                                <h3>$4578521.95</h3>
                                <p>This month total earn</p>
                            </div>
                        </div>
                        <div class="left-content shadow" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000"
                            data-aos-once="true">
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
    <div class="courses-area py-5 bg-light">
        <div class="container">
            <div class="section-title text-center mb-45">
                <h2>All Courses</h2>
                <p>
                    We found 09 courses available for you
                </p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="courses-item">
                        <Link to="/coursesdetails">
                            <img src={networkingimg} alt="Courses" />
                        </Link>
                        <div class="content">
                            <Link to="/coursesdetails" class="tag-btn">Networking</Link>
                            <div class="price-text">Free</div>
                            <h3> <Link to="/coursesdetails">Lorem Ipsum is simply dummy text of the printing and
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
                            <div class="price-text">$129</div>
                            <h3><Link to="/coursesdetails">Lorem Ipsum is simply dummy text of the printing and
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
                <div class="col-lg-12 col-md-12 text-center">
                    <Link to="#" class="default-btn rounded">View All</Link>
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
                    <Link to="#" class="default-btn">View all instructor</Link>
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
                            <h3><Link to="/trainerdetails">Sally</Link></h3>
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
                            <h3><Link to="/trainerdetails">Jesse</Link></h3>
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
                            <h3><Link to="/trainerdetails">Lance</Link></h3>
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
                            <h3><Link to="/trainerdetails">Jonquil</Link></h3>
                            <span>Art director</span>
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

export default TrainingProgram
