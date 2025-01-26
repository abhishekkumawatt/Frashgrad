import React from 'react'
import { Link } from 'react-router-dom';

const JobPost = () => {
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
              <Link to="..//">
                <img src="../assets/images/logos/logo-full.png" height="50" class="logo-one rounded-pill" alt="logo"/>

              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="desktop-nav nav-area">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-md navbar-light p-0">
            <Link class="navbar-brand" to="..//">
              <img src="../assets/images/logos/logo-full.png" class="logo-one rounded-pill" alt="Logo"/>

            </Link>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav w-100 ms-5">
                <li class="nav-item">
                  <Link to="/recruiterdashboaed">
                    Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/myteam">My Team</Link>
                </li>
                <li class="nav-item">
                  <Link to="/recruiterlist">Candidate profile</Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/myjobs">My Jobs</Link>
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
                <button class="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="ri-notification-2-line"></i></button>
            </div>
                <div class="navbar-category">
                 
                  <div class="dropdown category-list-dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="../assets/images/profile1.jpg" height="50" width="50" class="rounded-pill" alt="" />
                      Freshgrad
                      <i class="ri-arrow-down-s-line"></i>
                    </button>
                    <div class="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
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


  <div class="header_space"></div>
  <div class="stepbg">

    <div class="client_filter-job pt-1 pb-0">
      <div class="stepsForm">
        <form method="post" id="msform">
          <div class="container">
            <div class="row">
              {/* <!-- <div class="col-md-4">
                <div class="sf-steps">
                  <h5 class="default-btn w-100 text-white m-0 py-3 px-4">Recruiter</h5>
                  <div class="left-slid-filter space-box-two shadow-none">
                    <div class="sf-steps-content">
                      <div class="joblisttitle sf-active">
                        <span>1</span>
                        <Linkside class="list-icons">
                          <h5>Basic Details</h5>
                        </aside>
                      </div>
                      



                    </div>
                  </div>
                </div>
              </div> --> */}
              <div class="col-md-8 mx-auto">
                <div class="flexdr position-relative">
                  <div class="sf-steps-form sf-radius">
                    <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>Basic Details</h4>
                          <h6>Fill all form field to go to next step</h6>

                        </div>
                        <div class="professional-sp row">
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Upload Logo</label>
                              <section class="bg-diffrent">
                                <div class="file-upload-contain">
                                  <input id="multiplefileupload" type="file" hidden accept=".jpg,.gif,.png" />
                                </div>
                              </section>
                            </div>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Job Title *</label>
                              <input type="text" name="uname" placeholder="Title"/>
                            </div>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Job Location</label>
                              <input type="text" name="uname" placeholder="Location"/>
                            </div>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Enter Your Organisation *</label>
                              <input type="text" name="uname" placeholder="Your Organisation"/>
                            </div>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Website URL </label>
                              <p class="small">The URL can be your organization's website or an opportunity-related
                                URL.</p>
                              <input type="text" name="uname" placeholder="" value="https://"/>
                            </div>
                          </div>
                         
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Skills to be Accessed </label>
                              <p class="small">List required skills to attract participants with matching abilities or
                                engage eager individuals seeking to improve these skills.</p>
                              <input type="text" id="newTag" />
                              <ul id="tagList">
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">

                              <select>
                                <option>Select Expertise</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                                <option>Expert</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <div class="d-flex gap-2">
                                <div class="w-100">
                                  <label class="fieldlabels">Application Start date</label>
                                  <input type="date" name="name" placeholder="start date"/>
                                </div>
                                <div class="w-100">
                                  <label class="fieldlabels">End date</label>
                                  <input type="date" name="name" placeholder="end date"/>
                                </div>
  
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Employment type</label>
                              <select class="form-controls">
                                <option>Select</option>
                                <option selected="">Full time </option>
                                <option>Part-time</option>
                                <option>Freelance</option>
                                <option>Trainee </option>
                              </select>
                            </div>
                          </div>

                         

                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Salary Range/Year</label>
                              <div class="d-flex gap-2">
                                <div>
                                  <select style="width: 100px;">
                                    <option>INR</option>
                                    <option>USA</option>
                                  </select>
                                </div>
                                <input type="number" placeholder="Crunt Enter salary" class="form-control" name="" value=""/>
                                <input type="number" placeholder="Expertise salary" class="form-control" name="" value=""/>
                              </div>
                            </div>
                          </div>
                         
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Job Description *</label>
                              <textarea id="text_area" maxlength="1500" name="message" class="form-control mb-0"
                                cols="30" rows="7" required data-error="Write your message" placeholder=""
                                style="height: 100px;">This field helps you to mention the details of the opportunity you are listing. It is better to include Rules, Eligibility, Process, Format, etc., in order to get the opportunity approved. The more details, the better!
                              Guidelines:
                              Mention all the guidelines like eligibility, format, etc.
                              Inter-college team members allowed or not.
                              Inter-specialization team members allowed or not.
                              The number of questions/ problem statements.
                              Duration of the rounds.
                              Rules:
                              Mention the rules of the competition.</textarea>
                              <span id="count">100 to 1500</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </ul>
                  </div>

                  <div class="sf-steps-navigation d-flex justify-content-between">

                    <button id="sf-prev" type="button" class="btn btn-light">Previous</button>
                    <span id="sf-msg" class="sf-msg-error"></span>
                    <button id="sf-next" type="button" class="btn default-btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default JobPost
