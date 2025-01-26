import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';
import jobbannerwebp from '../../assets/images/job-banner.webp';
import customerservice from '../../assets/images/icon/customer-service.svg'
import research from '../../assets/images/icon/research.svg'
import marketingsvg from '../../assets/images/icon/marketing.svg'
import salesvg from '../../assets/images/icon/sale.svg'
import contentwriter from '../../assets/images/icon/content-writer.svg'
import companybuilding from '../../assets/images/company-building.png'
import Inovatively from '../../assets/images/Innovatively.png'
import job1 from '../../assets/images/job-1.webp'
import job2 from '../../assets/images/job-2.webp'

const Jobs = () => {
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

    <div class="recruiterbgme jobbgre py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <span data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000"
                            data-aos-once="true">Welcome to Jobs manager</span>
                        <h1 data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">
                            Easy way to get your dream jobs </h1>
                        <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">
                            Fill your job in hours, not weeks. Search for free.</p>
                        <div class="banner-form-area" data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000"
                            data-aos-once="true">
                            <Link to="recruiter-hiring/jobs.html" class="default-btn rounded-pill" type="submit">
                                Search Jobs
                            </Link>
                        </div>

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-img" data-speed="0.05" data-revert="true">
                        <img src={jobbannerwebp} data-aos="fade-up" data-aos-delay="900"
                            data-aos-duration="1000" data-aos-once="true" alt="Man" />


                        <div class="right-content kkkkkdd job__qui" data-aos="fade-down" data-aos-delay="900"
                            data-aos-duration="1000" data-aos-once="true">

                            <div class="content">
                                <img src={job2} alt="" />
                            </div>
                        </div>
                        <div class="left-content kkkkkddsadf applicantsuser" data-aos="fade-up" data-aos-delay="900"
                            data-aos-duration="1000" data-aos-once="true">

                            <img src={job1} alt="" />

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="banner-shape">
            <div class="banner-shape1">
                <img src="assets/images/home-one/shape1.png" alt="Shape" />
            </div>
        </div>
    </div>

    <div class="instructors-area py-5">
        <div class="container">
            <div class="row align-items-center mb-45">
                <div class="col-lg-8 col-md-9">
                    <div class="section-title mt-rs-20">
                        <h2>Browse by category</h2>
                        <p>
                            Find the job that’s perfect for you. about 800+ new jobs everyday
                        </p>
                    </div>
                </div>

            </div>
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6">
                    <div class="categoryjobs">
                        <div class="image-left d-inline-flex">
                            <img decoding="async" alt="Human Resource" src={customerservice}
                                width="42" height="42"/>
                        </div>
                        <div class="text-info-right">
                            <h4>
                                Human Resource </h4>
                            <p class="font-xs mb-0">
                                No Job Available </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="categoryjobs">
                        <div class="image-left d-inline-flex">
                            <img loading="lazy" decoding="async" alt="Market Research"
                                src={research} width="42" height="42"/>
                        </div>
                        <div class="text-info-right">
                            <h4>
                                Market Research </h4>
                            <p class="font-xs mb-0">
                                1 Job Available </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="categoryjobs">
                        <div class="image-left d-inline-flex">
                            <img loading="lazy" decoding="async" alt="Software" src={marketingsvg}
                                width="42" height="42"/>
                        </div>
                        <div class="text-info-right">
                            <h4>
                                Software </h4>
                            <p class="font-xs mb-0">
                                No Job Available </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="categoryjobs">
                        <div class="image-left d-inline-flex">
                            <img loading="lazy" decoding="async" alt="Marketing &amp; Sale"
                                src={salesvg} width="42" height="42"/>
                        </div>
                        <div class="text-info-right">
                            <h4>
                                Marketing &amp; Sale </h4>
                            <p class="font-xs mb-0">
                                No Job Available </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="categoryjobs">
                        <div class="image-left d-inline-flex">
                            <img decoding="async" alt="Content Writer" src={contentwriter}
                                width="42" height="42"/>
                        </div>
                        <div class="text-info-right">
                            <h4>
                                Content Writer </h4>
                            <p class="font-xs mb-0">
                                4 Jobs Available </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="hiringbanner">
        <div class="container">
            <div class="row">
                <div class="col-md-13">
                    <div class="hiringviedessd">
                        <div>
                            <span>WE ARE</span>
                            <h1>HIRING</h1>
                        </div>
                        <div>
                            <p>Let’s Work Together & Explore Opportunities
                            </p>
                        </div>
                        <Link to="#" class="default-btn">Apply Now</Link>
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
                        <h2>Jobs of the day</h2>
                        <p>
                            Search and connect with the right candidates faster
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-3 text-end">
                    <Link to="/studentjobs" class="default-btn rounded">All Jobs</Link>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-4">
                    <div class="categoryjobs joblist010">
                        <div class="card_rec position-relative">
                            <div class="mentersvies0121">
                                <div class="companylogos position-relative">
                                    <img src={companybuilding} class="img-fluid rounded"
                                        alt="Instructor"/>
                                </div>
                                <div class="instructors-details-contents">
                                    <div class="comnam">
                                        <h3>Python Developer </h3>
                                        <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
                                    </div>

                                </div>
                            </div>
                            <p class="perographsv">
                                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
                            </p>
                            <div class="businessmen">
                                <div><i class="ri-briefcase-4-fill"></i> 5 Applied</div>
                                <div><i class="ri-calendar-2-line"></i>10 days left</div>
                            </div>

                            <Link to="#" class="rightareee"><i class="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="categoryjobs joblist010">
                        <div class="card_rec position-relative">
                            <div class="mentersvies0121">
                                <div class="companylogos position-relative">
                                    <img src={companybuilding} class="img-fluid rounded"
                                        alt="Instructor"/>
                                </div>
                                <div class="instructors-details-contents">
                                    <div class="comnam">
                                        <h3>Python Developer </h3>
                                        <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
                                    </div>

                                </div>
                            </div>
                            <p class="perographsv">
                                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
                            </p>
                            <div class="businessmen">
                                <div><i class="ri-briefcase-4-fill"></i> 5 Applied</div>
                                <div><i class="ri-calendar-2-line"></i>10 days left</div>
                            </div>

                            <Link to="#" class="rightareee"><i class="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="categoryjobs joblist010">
                        <div class="card_rec position-relative">
                            <div class="mentersvies0121">
                                <div class="companylogos position-relative">
                                    <img src={companybuilding} class="img-fluid rounded"
                                        alt="Instructor"/>
                                </div>
                                <div class="instructors-details-contents">
                                    <div class="comnam">
                                        <h3>Python Developer </h3>
                                        <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
                                    </div>

                                </div>
                            </div>
                            <p class="perographsv">
                                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
                            </p>
                            <div class="businessmen">
                                <div><i class="ri-briefcase-4-fill"></i> 5 Applied</div>
                                <div><i class="ri-calendar-2-line"></i>10 days left</div>
                            </div>

                            <Link to="#" class="rightareee"><i class="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="categoryjobs joblist010">
                        <div class="card_rec position-relative">
                            <div class="mentersvies0121">
                                <div class="companylogos position-relative">
                                    <img src={companybuilding} class="img-fluid rounded"
                                        alt="Instructor"/>
                                </div>
                                <div class="instructors-details-contents">
                                    <div class="comnam">
                                        <h3>Python Developer </h3>
                                        <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
                                    </div>

                                </div>
                            </div>
                            <p class="perographsv">
                                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
                            </p>
                            <div class="businessmen">
                                <div><i class="ri-briefcase-4-fill"></i> 5 Applied</div>
                                <div><i class="ri-calendar-2-line"></i>10 days left</div>
                            </div>

                            <Link to="#" class="rightareee"><i class="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="categoryjobs joblist010">
                        <div class="card_rec position-relative">
                            <div class="mentersvies0121">
                                <div class="companylogos position-relative">
                                    <img src={companybuilding} class="img-fluid rounded"
                                        alt="Instructor"/>
                                </div>
                                <div class="instructors-details-contents">
                                    <div class="comnam">
                                        <h3>Python Developer </h3>
                                        <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
                                    </div>

                                </div>
                            </div>
                            <p class="perographsv">
                                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
                            </p>
                            <div class="businessmen">
                                <div><i class="ri-briefcase-4-fill"></i> 5 Applied</div>
                                <div><i class="ri-calendar-2-line"></i>10 days left</div>
                            </div>

                            <Link to="#" class="rightareee"><i class="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="enrolled-areas py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="enrolled-img" data-speed="0.05" data-revert="true">
                        <img src={Inovatively} alt="Enrolled" />

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="enrolled-content">
                        <div class="section-title ps-0 px-lg-5">
                            <h2>Innovatively built for recruiters and applicants</h2>
                            <p>
                                We create engaging experience with our radicitted tool, post on application and let your
                                condide-checkout these way towards on new
                            </p>
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

export default Jobs
