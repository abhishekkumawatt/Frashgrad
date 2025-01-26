import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';

const TermsCondition = () => {
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


    <div class="terms-conditions-area pt-70 pb-70">
        <div class="container">
            <div class="section-title">
                <span>Terms & Conditions</span>
                <h2>Ledu Terms & Conditions</h2>
            </div>
            <div class="row pt-45">
                <div class="col-lg-12">
                    <div class="single-content">
                        <h3>Legal Disclaimer</h3>
                        <p>
                            Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
                            augue non porta. Nam egestas dui turpis, non pulvinar nisi
                            rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
                            blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
                            tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
                            porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
                            sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed varius convallis massa, sed
                            ultrices dolor fermentum id.
                        </p>
                        <p>
                            Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
                            Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
                            posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
                            rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
                            pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
                            metus.
                        </p>
                    </div>
                    <div class="single-content">
                        <h3>01. Credit Reporting Terms of Service</h3>
                        <p>
                            Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
                            augue non porta. Nam egestas dui turpis, non pulvinar nisi
                            rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
                            blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
                            tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
                            porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
                            sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed varius convallis massa, sed
                            ultrices dolor fermentum id.
                        </p>
                        <p>
                            Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
                            Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
                            posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
                            rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
                            pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
                            metus.
                        </p>
                    </div>
                    <div class="single-content">
                        <h3>02. Ownership of Site Agreement to Terms of Use</h3>
                        <p>
                            Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
                            augue non porta. Nam egestas dui turpis, non pulvinar nisi
                            rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
                            blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
                            tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
                            porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
                            sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed varius convallis massa, sed
                            ultrices dolor fermentum id.
                        </p>
                        <p>
                            Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
                            Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
                            posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
                            rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
                            pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
                            metus.
                        </p>
                    </div>
                    <div class="single-content">
                        <h3>03. Provision of Services</h3>
                        <p>
                            Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
                            augue non porta. Nam egestas dui turpis, non pulvinar nisi
                            rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
                            blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
                            tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
                            porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
                            sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed varius convallis massa, sed
                            ultrices dolor fermentum id.
                        </p>
                        <p>
                            Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
                            Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
                            posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
                            rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
                            pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
                            metus.
                        </p>
                    </div>
                    <div class="single-content">
                        <h3>04. Limitation of Liability</h3>
                        <p>
                            Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
                            augue non porta. Nam egestas dui turpis, non pulvinar nisi
                            rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
                            blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
                            tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
                            porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
                            sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed varius convallis massa, sed
                            ultrices dolor fermentum id.
                        </p>
                        <p>
                            Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
                            Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
                            posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
                            rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
                            pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
                            metus.
                        </p>
                    </div>
                    <div class="single-content">
                        <h3>05. Accounts, Passwords and Security</h3>
                        <p>
                            Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
                            augue non porta. Nam egestas dui turpis, non pulvinar nisi
                            rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
                            blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
                            tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
                            porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
                            sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed varius convallis massa, sed
                            ultrices dolor fermentum id.
                        </p>
                        <p>
                            Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
                            Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
                            posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
                            rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
                            pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
                            metus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="newsletter-area section-bg ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="section-title mt-rs-20">
                        <span>ARE YOU IMPRESSED FOR AMAZING SERVICES?</span>
                        <h2>Subscribe our newsletter</h2>
                    </div>
                </div>
                <div class="col-lg-7">
                    <form class="newsletter-form" data-toggle="validator" method="POST">
                        <input type="email" class="form-control" placeholder="Enter Your Email Address" name="EMAIL"
                            required autocomplete="off"/>
                        <button class="subscribe-btn" type="submit">
                            Subscribe Now <i class="flaticon-paper-plane"></i>
                        </button>
                        <div id="validator-newsletter" class="form-result"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default TermsCondition
