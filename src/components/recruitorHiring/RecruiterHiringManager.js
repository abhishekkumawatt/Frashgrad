import React, { Component } from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import Slider from "react-slick";
import hiringmanagerimg from "../../assets/images/hiring-manager.png";
import client1 from "../../assets/images/client-logo/client1.png";
import client2 from "../../assets/images/client-logo/client2.png";
import client3 from "../../assets/images/client-logo/client3.png";
import client4 from "../../assets/images/client-logo/client4.png";
import client5 from "../../assets/images/client-logo/client5.png";
import client6 from "../../assets/images/client-logo/client6.png";
import hire1 from "../../assets/images/hire1.jpg";
import hire2 from "../../assets/images/hire2.jpg";
import hire3 from "../../assets/images/hire3.jpg";
import Innovatively from "../../assets/images/Innovatively.png";
import shape1 from "../../assets/images/home-one/shape1.png";
import shape2 from "../../assets/images/home-one/shape2.png";
import shape3 from "../../assets/images/home-one/shape3.png";
import jobme from "../../assets/images/job-me.png";
import testimonialsimg1 from "../../assets/images/testimonials/testimonials-img1.jpg";
import testimonialsimg2 from "../../assets/images/testimonials/testimonials-img2.jpg";
import testimonialsimg3 from "../../assets/images/testimonials/testimonials-img3.jpg";

const RecruiterHiringManager = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
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

      <Header />

      <div class="header_space"></div>

      <div class="recruiterbgme ptb-100">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="banner-content">
                <span
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Welcome to Hiring manager
                </span>
                <h1
                  data-aos="fade-down"
                  data-aos-delay="900"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Next Generation hiring solution.{" "}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  Powerful, agile, all-in-one hiring tool for your recruiting
                  needs, built with productivity at heart and loaded with
                  features to help your hair more effectively.
                </p>
                <div
                  class="banner-form-area"
                  data-aos="fade-down"
                  data-aos-delay="900"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <button class="default-btn rounded-pill" type="submit">
                    Free Trial
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-img" data-speed="0.05" data-revert="true">
                <img
                  src={hiringmanagerimg}
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  alt="Man"
                />

                <div
                  class="right-content job__qui"
                  data-aos="fade-down"
                  data-aos-delay="900"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div class="content">
                    <img src={jobme} alt="" />
                  </div>
                </div>
                <div
                  class="left-content applicantsuser"
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <h5>Applicants</h5>

                  <div class="content">
                    <img
                      class="50"
                      height="50"
                      src={testimonialsimg1}
                      alt="User"
                    />
                    <div>
                      <h3>San Francisco</h3>
                      <p>2H Ago</p>
                    </div>
                  </div>
                  <div class="content">
                    <img
                      class="50"
                      height="50"
                      src={testimonialsimg2}
                      alt="User"
                    />
                    <div>
                      <h3>San francisco</h3>
                      <p>4H Ago</p>
                    </div>
                  </div>
                  <div class="content">
                    <img
                      class="50"
                      height="50"
                      src={testimonialsimg3}
                      alt="User"
                    />
                    <div>
                      <h3>San francisco</h3>
                      <p>2day Ago</p>
                    </div>
                  </div>
                </div>
                <div class="banner-img-shape">
                  <div
                    class="shape1"
                    data-aos="fade-up"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <img src={shape3} alt="Shape" />
                  </div>
                  <div
                    class="shape2"
                    data-aos="fade-down"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
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

      <div class="bg-white py-5">
        <div class="container">
          <div class="title mb-35">
            <h3>
              {" "}
              We worked with <span>250+ </span> leading universities and
              companies
            </h3>
          </div>
          <div class="brand-slider owl-carousel owl-theme">
           
            <div className="slider-container">
              <Slider {...settings}>
              <div class="brand-item">
              <img src={client1} class="brand-item-logo1" alt="Images" />
            </div>
            <div class="brand-item">
              <img src={client2} class="brand-item-logo1" alt="Images" />
            </div>
            <div class="brand-item">
              <img src={client3} class="brand-item-logo1" alt="Images" />
            </div>
            <div class="brand-item">
              <img src={client4} class="brand-item-logo1" alt="Images" />
            </div>
            <div class="brand-item">
              <img src={client5} class="brand-item-logo1" alt="Images" />
            </div>
            <div class="brand-item">
              <img src={client6} class="brand-item-logo1" alt="Images" />
            </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div class="hirignProcess">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="hiring__processection p-5">
                <div class="section-title text-center">
                  <h2 class="text-white">End to end hiring process</h2>
                  <p class="text-white">
                    Recruiten is set up to allow everyone on your team to
                    contribute to the hiring effort. You can easily divvy up the
                    work and get everyone involved
                  </p>
                </div>
                <div class="row mt-4">
                  <div class="col-md-8">
                    <div class="hireone">
                      <img src={hire1} class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="hireone">
                      <img src={hire2} class="img-fluid" alt="" />
                    </div>
                    <div class="hireone">
                      <img src={hire3} class="img-fluid" alt="" />
                    </div>
                  </div>
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
                <img src={Innovatively} alt="Enrolled" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="enrolled-content">
                <div class="section-title ps-0 px-lg-5">
                  <h2>Innovatively built for recruiters and applicants</h2>
                  <p>
                    We create engaging experience with our radicitted tool, post
                    on application and let your condide-checkout these way
                    towards on new
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecruiterHiringManager;
