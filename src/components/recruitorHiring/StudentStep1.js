import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Link } from 'react-router-dom';

const StudentStep1 = () => {
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
  <div class="stepbg">

    <div class="client_filter-job pt-1 pb-0 container">
      <div class="stepsForm">
        <form method="post" id="msform">
            <div class="row">
              <div class="col-md-4">
                <div class="sf-steps">
                  <h5 class="default-btn w-100 text-white m-0 py-3 px-4">All Steps</h5>
                  <div class="left-slid-filter space-box-two shadow-none">
                    <div class="sf-steps-content">
                      <div class="joblisttitle sf-active">
                        <span>1</span>
                        <aside class="list-icons">

                          <h5>Linkedin Profile</h5>
                        </aside>
                      </div>
                      <div class="joblisttitle">
                        <span>2</span>
                        <aside class="list-icons">
                          <h5>Education</h5>
                        </aside>
                      </div>
                      <div class="joblisttitle">
                        <span>3</span>
                        <aside class="list-icons">
                          <h5>Certification</h5>
                        </aside>
                      </div>
                      <div class="joblisttitle">
                        <span>4</span>
                        <aside class="list-icons">
                          <h5>Skills</h5>
                        </aside>
                      </div>
                      <div class="joblisttitle">
                        <span>5</span>
                        <aside class="list-icons">
                          <h5>University Projects</h5>
                        </aside>
                      </div>
                      {/* <!-- <div class="joblisttitle">
                        <span>5</span>
                        <Linkside class="list-icons">
                          <h5>University Projects</h5>
                        </aside>
                      </div> --> */}
                      <div class="joblisttitle">
                        <span>6</span>
                        <aside class="list-icons">
                          <h5>Professional experience</h5>
                        </aside>
                      </div>

                      <div class="joblisttitle">
                        <span>7</span>
                        <aside class="list-icons">
                          <h5>Other</h5>
                        </aside>
                      </div>
                      {/* <!-- <div class="joblisttitle">
                        <span>7</span>
                        <Linkside class="list-icons">
                          <h5>Provide all certifications name </h5>
                        </aside>
                      </div> --> */}


                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8 d-flex">
                <div class="flexdr position-relative">
                  <div class="sf-steps-form sf-radius">
                    <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>Linkedin Profile </h4>
                          <h6>Fill all form field to go to next step</h6>

                        </div>
                        <div class="professional-sp row">
                          {/* <!-- <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Ethnicity/Race</label>
                              <select class="form-controls">
                                <option>Select</option>
                                <option selected="">American Indian </option>
                                <option>Alaska Native</option>
                                <option>Asian</option>
                                <option>Black </option>
                                <option>African American</option>
                                <option>Indian</option>
                                <option>Hispanic</option>
                                <option>Native Hawaiian </option>
                              </select>
                            </div>
                          </div> --> */}

                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Linkedin Profile Url</label>
                              <input type="text" name="uname"
                                placeholder="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"/>
                            </div>
                          </div>

                          {/* <!-- <div class="col-md-6">
                            <div class="form-group">
                              <label class="fieldlabels">First Name: *</label>
                              <input type="text" name="fname" placeholder="First Name" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="fieldlabels">Last Name: *</label>
                              <input type="text" name="lname" placeholder="Last Name" />
                            </div>
                          </div>

                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <label class="fieldlabels w-100">Contact No.: *</label>
                              <input type="text" id="mobile_code" class="form-control" placeholder="Phone Number"
                                name="name"/>
                            </div>
                          </div> --> */}
                          <div class="col-lg-12 form-condition">
                            <div class="agree-label d-flex gap-2">
                              <input type="checkbox" id="chb1" class="termcheck"/>
                              <label for="chb1" class="small text-muted">
                                All your information is collected, stored and processed as per our data
                                processing guidelines. By signing up on FreshGard, you agree to our <Link to="#">Privacy
                                  Policy</Link> and <Link to="#">Terms of Use</Link>
                              </label>
                            </div>
                          </div>
                        </div>

                      </div>

                    </ul>
                    <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>Bachelor Degree</h4>
                        </div>
                        <div class="professional-sp">
                          <div class="col-12 col-md-12">
                            <div class="form-group">

                              <label class="fieldlabels">Bachelor Degree <span class="text-danger fw-bold">
                                </span></label>
                              <div class="mb-3">
                                <input type="text" class="m-0" name="name" placeholder="Degree Name"/>
                              </div>

                            </div>
                          </div>

                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">University Name</label>
                              <input type="text" name="name" placeholder="University Name"/>

                              <div class="d-flex w-100 gap-2">
                                <div class="w-100">
                                  <label class="fieldlabels">Start date</label>
                                  <input type="date" name="name" placeholder="start date"/>
                                </div>
                                <div class="w-100">
                                  <label class="fieldlabels">End date</label>
                                  <input type="date" name="name" placeholder="end date"/>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div class="float-right mb-3">
                            <Link to="javascript:void(0)" id="add"
                              class="add2 default-btn cursor-pointer p-0 rounded px-3 py-2">Add +</Link>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="professional-sp">
                              <h4>Master Degree</h4>
                            </div>

                            <div class="form-group">
                              <label class="fieldlabels">Master Degree</label>
                              <input type="text" name="name" placeholder="Master Degrees"/>
                              <label class="fieldlabels">University Name</label>
                              <input type="text" name="name" placeholder="University Name"/>
                              <div class="d-flex gap-2">
                                <div class="w-100">
                                  <label class="fieldlabels">Start date</label>
                                  <input type="date" name="name" placeholder="start date"/>
                                </div>
                                <div class="w-100">
                                  <label class="fieldlabels">End date</label>
                                  <input type="date" name="name" placeholder="end date"/>
                                </div>

                              </div>
                            </div>
                            <div class="float-right mb-3">
                              <Link to="javascript:void(0)" id="add"
                                class="add2 default-btn cursor-pointer p-0 rounded px-3 py-2">Add +</Link>
                            </div>
                          </div>

                          <div class="col-12 col-md-12">
                            <div class="professional-sp">
                              <h4>PHD Degree</h4>
                            </div>
                            <div class="form-group">
                              <label class="fieldlabels">PHD</label>
                              <input type="text" name="uname" placeholder="PHD"/>
                            </div>
                            <div class="form-group">

                              <label class="fieldlabels">University Name</label>
                              <input type="text" name="name" placeholder="University Name"/>
                              <div class="d-flex gap-2">
                                <div class="w-100">
                                  <label class="fieldlabels">Start date</label>
                                  <input type="date" name="name" placeholder="start date"/>
                                </div>
                                <div class="w-100">
                                  <label class="fieldlabels">End date</label>
                                  <input type="date" name="name" placeholder="end date"/>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </ul>
                    <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp d-flex align-items-center justify-content-between">
                          <div>
                            <h4>Certifications: (Optionals) </h4>
                            <h6>Fill all form field to go to next step</h6>
                          </div>
                          <div class="float-right mb-3">
                            <Link to="javascript:void(0)" id="add"
                              class="btn-lg default-btn py-2 px-3 cursor-pointer rounded">Add Certification +</Link>
                          </div>
                        </div>
                        <div class="professional-sp row">

                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="fieldlabels">Certification</label>
                              <input type="text" name="uname" placeholder="Certification"/>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="fieldlabels">Date</label>
                              <input type="date" name="uname" placeholder="Expire Date"/>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Organization</label>
                              <input type="text" name="uname" placeholder="Organization"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>

                    <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>Skills Updates</h4>
                          <h6>Fill all form field to go to next step</h6>

                        </div>
                        <div class="professional-sp">
                          <label class="fieldlabels">Skills</label>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <input type="text" class="m-0" name="uname" placeholder="Skills"/>
                              </div>
                            </div>
                            <div class="col-md-6">
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
                            {/* <!-- <div class="col-md-4">
                              <div class="form-group">
                                <select>
                                  <option>Select Year</option>
                                  <option>1+ Year</option>
                                  <option>2+ Year</option>
                                  <option>3+ Year</option>
                                  <option>4+ Year</option>
                                </select>

                              </div>
                            </div> --> */}
                          </div>
                          <div class="items2 mb-3"></div>
                          <Link to="javascript:void(0)" class="default-btn rounded">Add
                            +</Link>
                        </div>
                      </div>
                    </ul>
                    <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>University Projects </h4>
                          <h6>Fill all form field to go to next step</h6>
                        </div>

                        <div class="professional-sp row">
                          <div class="col-md-4">
                            <div class="form-group mb-3">
                              <label class="fieldlabels">Project title</label>
                              <input type="text" class="m-0" name="uname" placeholder="Project title"/>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group mb-3">
                              <label class="fieldlabels">Website Link</label>
                              <input type="text" class="m-0" name="uname" placeholder="Project"/>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group mb-3">
                              <label class="fieldlabels">What was your role?</label>
                              <input type="text" class="m-0" name="uname" placeholder="Projects"/>
                            </div>
                          </div>
                          <div class="col-md-4">
                          <div class=" mb-3"></div>
                          <Link to="javascript:void(0)" class="default-btn rounded">Add
                            +</Link>
                          </div>
                          {/* <!-- <div class="col-12">
                            <div class="form-group">
                              <label class="fieldlabels">Date From</label>
                              </div>
                          </div> --> */}
                          {/* <!-- <div class="col-12 col-md-4">
                            <div class="form-group">
                             
                              <input type="date" class="m-0" name="date" placeholder="date">
                            </div>
                          </div>
                          <div class="col-12 col-md-1 text-center my-auto">
                            <h6 class="md-0">TO</h6>
                          </div>
                          <div class="col-12 col-md-4">
                            <div class="form-group">
                                <input type="date" name="date_to" id="project_date_to" class="form-control m-0">
                            </div>
                          </div>
                          <div class="col-lg-3 my-auto form-condition">
                            <div class="agree-label d-flex gap-2">
                              <input type="checkbox" id="chb1" class="termcheck">
                              <label for="chb1" class="small text-muted">
                                Still Working
                              </label>
                            </div>
                          </div> --> */}
                        </div>
                      </div>
                    </ul>

                    <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>Professional experience </h4>
                          <h6>Fill all form field to go to next step</h6>

                        </div>
                        <div class="professional-sp">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Title*</label>
                              <input type="text" placeholder="retall sales manager" class="form-control" />
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
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Company name*</label>
                              <input type="text" placeholder="Microsoft" class="form-control" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Location*</label>
                              <input type="text" placeholder="London, united kingdom" class="form-control" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Location type*</label>

                              <div class="d-flex gap-4">
                                <div class="form-check checkiform">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1"/>
                                  <label class="form-check-label" for="flexRadioDefault1">
                                    On-site
                                  </label>
                                </div>
                                <div class="form-check checkiform">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked/>
                                  <label class="form-check-label" for="flexRadioDefault2">
                                    Hybrid
                                  </label>
                                </div>
                                <div class="form-check checkiform">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault3" checked/>
                                  <label class="form-check-label" for="flexRadioDefault3">
                                    Hybrid
                                  </label>
                                </div>

                              </div>
                            </div>
                            <div class="col-md-12 mb-3">
                              <div class="form-group">
                                <div class="agree-label d-flex gap-2">
                                  <input type="checkbox" id="chb1" class="termcheck"/>
                                  <label for="chb1" class="small text-muted">
                                    I am currently working in this role
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex gap-2">
                              <div class="w-100">
                                <label class="fieldlabels">Start date</label>
                                <input type="date" name="name" placeholder="start date"/>
                              </div>
                              <div class="w-100">
                                <label class="fieldlabels">End date</label>
                                <input type="date" name="name" placeholder="end date"/>
                              </div>

                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Industry*</label>
                              <input type="text" placeholder="Information Technology" class="form-control" />
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </ul>


                    <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>Other </h4>
                          <h6>Fill all form field to go to next step</h6>

                        </div>
                      
                        <div class="professional-sp row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">DOB</label>
                              <input type="date" name="phno_2" placeholder="dob"/>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <div class="agree-label d-flex gap-2">
                                <input type="checkbox" id="Consent" class="termcheck"/>
                                <label for="Consent" class="small text-muted">
                                  We will help you to find a job if you complete successfully training program so please consent this form. "I authorize FreshGrad to submit my profiles/resume and contact details to other companies."
                                </label>
                              </div>
                            </div>
                          </div>
                          


                        </div>
                      </div>
                    </ul>
                    {/* <!-- <ul class="sf-content m-0">
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>Provide all certifications name </h4>
                          <h6>Fill all form field to go to next step</h6>

                        </div>
                        <hr>
                        <div class="professional-sp">
                          <div class="form-group">
                            <label class="fieldlabels">Certification</label>
                            <input type="text" name="uname" placeholder="Certification">
                            class="add2 default-btn cursor-pointer p-0 rounded px-3">Add
                            +</Link>
                          </div>
                          <div class="items2 mb-3"></div>

                        </div>
                      </div>
                    </ul>  --> */}

                  </div>

                  <div class="sf-steps-navigation d-flex justify-content-between">

                    <button id="sf-prev" type="button" class="btn btn-light">Previous</button>
                    <span id="sf-msg" class="sf-msg-error"></span>
                    <button id="sf-next" type="button" class="btn default-btn">Next</button>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
          </div>
        <Footer/>
      </div>
    </div>

  )
}

export default StudentStep1
