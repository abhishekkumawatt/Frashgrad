import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import profile1 from '../../assets/images/profile1.jpg';
import { Link } from 'react-router-dom';

const EditProfile = () => {
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
  <Header header="my-course"/>
  
  <div class="stepbg">
    <div class="header_space"></div>
    <div class="client_filter-job pt-2 pb-5">
      <div class="stepsForm">
        <form method="post" id="msform">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="sf-steps profileview border shadow-lg">
                  <div class="profile_avtar pt-3 pt-md-5">
                    <img src={profile1} height="120" width="120" class="rounded-pill" alt="" />
                    <span></span>
                  </div>
                  <h5 class="mt-3 mb-1">Nathaniel Poole</h5>
                  <p>Networking</p>
                  <ul class="list-group profilemenu">
                    <li class="list-group-item"><Link class="active" to="/profile"> <i
                          class="ri-shield-user-fill"></i> My Profile</Link></li>
                    <li class="list-group-item"><Link to="/mycourses"> <i class="ri-bookmark-fill"></i> My
                        Courses</Link> </li>
                    <li class="list-group-item"><Link to="/resume"> <i class="ri-bookmark-fill"></i> Resume</Link> </li>
                    <li class="list-group-item"><Link to="/profileforgotpassword"> <i
                          class="ri-lock-password-fill"></i> Reset Password</Link>
                    </li>
                    <li class="list-group-item"><Link to="#" class="logoutbtn2"> <i class="ri-logout-box-fill"></i>
                        LOGOUT</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8 d-flex">
                <div class="flexdr position-relative p-3 p-md-4 shadow-lg">
                  <div class="professional-sp row">
                    <div class="col-12 col-md-12 mb-3 text-center border-bottom pb-3">
                      <div class="form-group">
                        <label class="fieldlabels">Upload Profile image</label>
                        <div id='profile-upload'>
                          <div class="hvr-profile-img"><input type="file" name="logo" id='getval' class="upload w180"
                              title="Dimensions 180 X 180" /></div>
                          <i class="fa ri-camera-2-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label class="fieldlabels">First Name</label>
                        <input type="text" name="uname" placeholder="First Name" value="Abhishek" disabled/>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label class="fieldlabels">Last Name</label>
                        <input type="text" name="uname" placeholder="Last Name" value="Kumawat" disabled/>
                      </div>
                    </div>
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label class="fieldlabels">Verify email ID *</label>
                        <input type="email" name="uname" placeholder="Email ID" value="akfreshgrad@gmail.com"/>
                      </div>
                    </div>
                    <div class="col-12 col-md-12">
                      <div class="form-group mb-3">
                        <label class="fieldlabels">Verify Phone Number *</label>
                        <input type="text" id="mobile_code" class="form-control" placeholder="9876543210"
                          value="9876543210" name="name"/>
                      </div>
                    </div>
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label class="fieldlabels">Linkedin Profile link </label>
                        <input type="text" name="uname" placeholder="https://in.linkedin.com/"
                          value="https://in.linkedin.com/op34w"/>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <h5>Location</h5>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label for="floatingInput">Country</label>
                        <div class="niceCountryInputSelector form-control countryf451s" data-selectedcountry="US"
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
                        <label class="fieldlabels">DOB</label>
                        <input type="date" name="uname" placeholder="DOB" value="DOB"/>
                      </div>
                    </div>
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label class="fieldlabels">Degree Name</label>
                        <input type="text" id="newTag" class="m-1" />
                        <ul id="tagList">
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <Link to="#" class="default-btn rounded px-5">Submit</Link>
                      </div>
                    </div>

                  </div>
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

export default EditProfile
