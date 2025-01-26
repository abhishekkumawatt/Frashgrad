import React, { useState } from 'react'
// import '../../../assets/css/style.css'
import logofull from '../../../assets/images/logos/logo-full.png'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import profile1 from '../../../assets/images/profile1.jpg'

const Header = (props) => {
    const [isOpen, setIsOpen]=useState(false)
    const{header}=props
    const{headers}=props


    if(header==="my-course"){
        return(
            <>
            <div class="bg_nav-slid bg-white">
        <div class="navbar-area ledu-area otherpages-menu">
          <div class="mobile-responsive-nav">
            <div class="container">
              <div class="mobile-responsive-menu">
                <div class="logo">
                  <Link to="/">
                    <img src={logofull} height="50" class="logo-one rounded-pill" alt="logo"/>
    
                  </Link>
                </div>
              </div>
            </div>
          </div>
    
          <div class="desktop-nav nav-area">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-md navbar-light p-0">
                <Link class="navbar-brand" to="/">
                  <img src={logofull} class="logo-one rounded-pill" alt="Logo"/>
    
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
                  <div class="others-options">
                    <div class="navbar-category">
                      <div class={`dropdown category-list-dropdown ${isOpen && 'show'}`} onClick={()=>{setIsOpen(!isOpen)}}>
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory"
                          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <img src={profile1} height="50" width="50" class="rounded-pill" alt="" />
                          Freshgrad
                          <i class="ri-arrow-down-s-line"></i>
                        </button>
                        <div class={`dropdown-menu profile_dropdown ${isOpen && 'show'}`} aria-labelledby="dropdownMenuButtoncategory">
                          <Link to="/profile" class="nav-link-item">
                            <i class="flaticon-user"></i>
                            Edit Profile
                          </Link>
                          <Link to="/profile" class="nav-link-item">
                            <i class="ri-bookmark-fill"></i>
                            My Courses
                          </Link>
    
                          <Link to="#" class="logoutbtn">
                            <i class="ri-logout-box-line"></i>
                            Logout
                          </Link>
    
                        </div>
                      </div>
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
                  <Link to="/signin" class="default-btn two rounded-pill">Sign up</Link>
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
      </>
        )
    }
    if(headers==="recruiter-list"){
        return(
            <div class="bg_nav-slid bg-white">
        <div class="navbar-area ledu-area otherpages-menu">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <Link to="/">
                                <img src={logofull} height="50"
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
                            <img src={logofull} class="logo-one rounded-pill" alt="Logo"/>

                        </Link>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav w-100 ms-5">
                                <li class="nav-item">
                                    <Link to="/recruiterdashboard">
                                        Dashboard
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/myteam">My Team</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" to="/recruiterlist">Candidate profile</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to="/myjobs">My Job</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/interviewguide">Interview Guide</Link>
                                </li>
                            </ul>


                            <div class="others-options gap-2 d-flex align-items-center">
                                <div class="optional-item">
                                    <Link to="/jobpost" class="default-btn two p-2 px-3 rounded-pill">Job Post</Link>
                                </div>
                                <div class="optional-item">
                                    <button class="btn btn-primary rounded-pill" type="button"
                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight"><i class="ri-notification-2-line"></i></button>
                                </div>
                                <div class="navbar-category">
                                    <div class="dropdown category-list-dropdown">
                                        <button class="btn dropdown-toggle" type="button"
                                            id="dropdownMenuButtoncategory" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <img src={profile1} height="50" width="50"
                                                class="rounded-pill" alt="" />
                                            Freshgrad
                                            <i class="ri-arrow-down-s-line"></i>
                                        </button>
                                        <div class="dropdown-menu profile_dropdown"
                                            aria-labelledby="dropdownMenuButtoncategory">
                                            <Link to="/profile" class="nav-link-item">
                                                <i class="flaticon-user"></i>
                                                Edit Profile
                                            </Link>

                                            <Link to="#" class="logoutbtn">
                                                <i class="ri-logout-box-line"></i>
                                                Logout
                                            </Link>

                                        </div>
                                    </div>
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
                            <Link to="/signin" class="default-btn two rounded-pill">Sign up</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
        )
    }
   
  return (
    <div className='header'>
    <div className="bg_nav-slid bg-white" >
        <div className="navbar-area ledu-area otherpages-menu">

            <div className="desktop-nav nav-area">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light p-0" style={{height:'80px'}}>
                        {/* <Link className="navbar-brand" to="index.html">
                            <img src="" className="logo-one rounded-pill" alt="Logo"/>

                        </Link> */}
                        <Link className='NvaLink' to='/'><img src={logofull} alt="logo" style={{height:'60px',width:'130px',margin:'15px 0 15px 0'}}/></Link>
                        <div className="collapse navbar-collapse mean-menu" style={{display:'flex'}} id="navbarSupportedContent">
                            <ul className="navbar-nav w-100 ms-5" style={{display:'flex', marginTop:'auto'}}>
                                
                                <li className="nav-item">
                                    <Link to="/trainingprogram"> 
                                        Training Programs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/recruiterhiringmanager" >
                                        Recruiter
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/trainermentors">
                                        Mentorship</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/jobs" className="nav-link">
                                        Jobs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactus" className="nav-link">
                                        Contact Us
                                    </Link>
                                </li>


                            </ul>
                             {/* <div className="nav-widget-form me-3 d-none d-md-none d-lg-block">
                                    <form className="browser-default right position-relative">
                                        <input id="search-input" placeholder="Search" type="text" className="browser-default search-field"
                                           name="q" value="" autocomplete="off" aria-label="Search box"/>
                                       <label for="search-input"><i className="ri-search-line"></i></label>
                                       <i className="material-icons">cancel</i>
                            
                                       <div className="search-popup">
                                           <div className="search-content">
                                              
                                               <ul className="popup-list">
                                                   <li className=""><Link className="grey-text" to="#">Google</Link></li>
                                                   <li className=""><Link className="grey-text" to="#">Apple</Link></li>
                                                   <li className=""><Link className="grey-text" to="#">Microsoft</Link></li>
                                                   <li className=""><Link className="grey-text" to="#">Github</Link></li>
                                               </ul>
                                           </div>
                                       </div>
                                   </form> 
                                </div> */}
                            <div className="others-options login__signup gap-2 d-flex align-items-center" style={{display:'flex'}}>
                                <div className="optional-item" >
                                    <Link to="/signin" className="default-btn two rounded-pill" style={{ borderRadius:'20px',margin:'10px 0px 0px 0px'}}>Sign In</Link>
                                </div>
                                <div className="optional-item">
                                    <Link to="/signup" className="defaultsignin rounded-pill" style={{ borderRadius:'20px', margin:'10px 50px 0px 10px',height:'43px'}}>Sign up</Link>
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
            <div className="side-nav-responsive">
                <div className="container">
                    <div className="dot-menu">
                         <div className="circle-inner">
                                <span className="ri-search-line"></span>
                            </div>
                    </div>
                    <div className="mobilelogin gap-2 d-flex align-items-center">
                        <div className="optional-item" >
                        </div>
                        <div className="optional-item">
                            <Link to="signin.html" className="defaultsignin rounded-pill">Sign In</Link>
                            <Link to="signup.html" className="default-btn two rounded-pill"  >Sign up</Link>
                        </div>
                    </div>
                     <div className="container">
                            <div className="side-nav-inner">
                                <div className="side-nav justify-content-center align-items-center">
                                    <div className="side-item">
                                        <form className="search-form">
                                            <input type="search" className="form-control" placeholder="Search courses"/>
                                            <button type="submit">
                                                <i className="ri-search-line"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> 
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header