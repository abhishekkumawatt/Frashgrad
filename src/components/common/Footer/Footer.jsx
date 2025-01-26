import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer-area">
        <div classNamename="container pt-5">
            <div className="row" style={{display:'flex', justifyContent:'space-evenly',padding:'55px 160px 0 150px'}}>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget">
                        <p>
                            Lorem ipsum dolor sit amet, consec tetur
                            adipiscing elit eiusmod tempor incididunt
                            labore dolore magna aliqua consec tetur
                            adipiscing elite sed do labor.
                        </p>
                        <ul className="social-link">
                            <li className="social-title">Follow Us:</li>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/" target="_blank">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget ps-5">
                        <h3>About us</h3>
                        <ul className="footer-list">
                            <li>
                                <a href="#aboutus">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/trainermentors">
                                    Mentorship
                                </a>
                            </li>
                            <li>
                                <a href="/recruiterhiringmanager">
                                    Recruiter
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget ps-5">
                        <h3>Resources</h3>
                        <ul className="footer-list">
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/contactus">
                                    Contact us
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Terms & conditions
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget ps-5">
                        <h3>Official Info</h3>
                        <ul className="footer-contact">
                            <li>
                                <i className="ri-map-pin-2-fill"></i>
                                <div className="content">
                                    <h4>Location:</h4>
                                    <span>0452 Sunrise Road Las Vegas</span>
                                </div>
                            </li>
                            <li>
                                <i className="ri-mail-fill"></i>
                                <div className="content">
                                    <h4>Email:</h4>
                                    <span><a href="#"><span className="__cf_email__">freshgrad@gmail.com</span></a></span>
                                </div>
                            </li>
                            <li>
                                <i className="ri-phone-fill"></i>
                                <div className="content">
                                    <h4>Phone:</h4>
                                    <span><a href="tel:+11234567890">+1 1234567890</a></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area" style={{textAlign:'center'}}>
            <div className="container">
                <div className="copy-right-text text-center">
                    <p>
                        Copyright @2025

                        <script>document.write(new Date().getFullYear())</script> <b>FreshGard</b> All Rights
                        Reserved

                    </p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
