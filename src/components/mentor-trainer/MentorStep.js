import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const MentorStep = () => {
  return (
    <div>
      <br/><br/><br/>
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
  <div class="stepbg">

    <div class="client_filter-job pt-1 pb-0">
      <div class="stepsForm">
        <form method="post" id="msform">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="sf-steps">
                  <h5 class="default-btn w-100 text-white m-0 py-3 px-4">Mentors</h5>
                  <div class="left-slid-filter space-box-two shadow-none">
                    <div class="sf-steps-content">
                      <div class="joblisttitle sf-active">
                        <span>1</span>
                        <aside class="list-icons">
                          <h5>Become an FreshGrad Mentor!</h5>
                        </aside>
                      </div>
                       <div class="joblisttitle">
                        <span>2</span>
                        <aside class="list-icons">
                          <h5>Application Details</h5>
                        </aside>
                      </div>
                      <div class="joblisttitle">
                        <span>3</span>
                        <aside class="list-icons">
                          <h5>Salary Range/Year</h5>
                        </aside>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8 mx-auto">
                <div class="flexdr position-relative">
                  <div class="sf-steps-form sf-radius">
                    <ul class="sf-content m-0"/>
                      <div class="find-com-box p-0">
                        <div class="professional-sp">
                          <h4>Become an FreshGrad Mentor!</h4>
                          <h6>Fill all form field to go to next step</h6>

                        </div>
                        <ul>

                        <div class="professional-sp row">
                          <div class="col-12 col-md-12 mb-3 text-center border-bottom pb-3">
                            <div class="form-group">
                              <label class="fieldlabels">Upload Profile image</label>
                              <div id='profile-upload'>
                                <div class="hvr-profile-img"><input type="file" name="logo" id='getval'
                                    class="upload w180" title="Dimensions 180 X 180"/></div>
                                <i class="fa ri-camera-2-fill"></i>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div class="form-group">
                              <label class="fieldlabels">First Name</label>
                              <input type="text" name="uname" placeholder="First Name" value="OP"/>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div class="form-group">
                              <label class="fieldlabels">Last Name</label>
                              <input type="text" name="uname" placeholder="Last Name" value="Kumawat"/>
                            </div>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Verify email ID *</label>
                              <input type="email" name="uname" placeholder="Email ID" value="opfreshgrad@gmail.com"/>
                            </div>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group mb-3">
                              <label class="fieldlabels">Verify Phone Number *</label>
                              <input type="text" id="mobile_code" class="form-control" placeholder="7894567892"
                                value="7894567890" name="name"/>
                            </div>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Linkedin Profile link </label>

                              <input type="text" name="uname" placeholder="" value="https://"/>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <h5>Location</h5>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group">
                              <label for="floatingInput">Country</label>
                              <div class="niceCountryInputSelector form-control" data-selectedcountry="US"
                                data-showspecial="false" data-showflags="true" data-i18nall="All selected"
                                data-i18nnofilter="No selection" data-i18nfilter="Filter"
                                data-onchangecallback="onChangeCallback"></div>

                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group">
                              <label for="floatingInput">State</label>
                              <select class="form-control">
                                <option>Select</option>
                                <option>Rajasthan</option>

                              </select>

                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group">
                              <label for="floatingInput">City</label>
                              <select class="form-control">
                                <option>Select</option>
                                <option>Jaipur</option>
                              </select>

                            </div>
                          </div>

                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label class="fieldlabels">Profession</label>
                              <input type="text" id="newTag" class="m-1" />
                              <ul id="tagList">
                              </ul>
                            </div>
                          </div>
                          <div class="col-12 col-md-12 mt-3">
                           
                              <div class="form-group d-flex gap-4">
                                <div class="form-check radiobtnin0111">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1"/>
                                  <label class="form-check-label" for="flexRadioDefault1">
                                    Interviewer
                                  </label>
                                </div>
                                <div class="form-check radiobtnin0111">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked/>
                                  <label class="form-check-label" for="flexRadioDefault2">
                                    Trainer
                                  </label>
                                </div>
                              </div>
                        
                          </div>
                        </div>
                    </ul>
                  </div>

                  <div class="sf-steps-navigation d-flex justify-content-between">

                    <button id="sf-prev" type="button" class="btn btn-light">Previous</button>
                    <span id="sf-msg" class="sf-msg-error"></span>
                    <button id="sf-next" type="button" class="btn default-btn">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer/>
    </div>
  )
}

export default MentorStep
