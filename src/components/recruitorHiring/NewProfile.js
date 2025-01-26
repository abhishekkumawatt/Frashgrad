import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import educationimg from '../../assets/images/education.png'
import instructorsdetails from '../../assets/images/instructors/instructors-details.jpg'
import instructorsimg3 from '../../assets/images/instructors/instructors-img3.jpg'
import instructorsimg6 from '../../assets/images/instructors/instructors-img6.jpg'
import { Link } from 'react-router-dom';

const NewProfile = () => {
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

<Header headers="recruiter-list"/>

    <div class="header_space"></div>


    {/* <!-- add team member -->
    <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Interview</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post">
                    <div class="modal-body">
                        <div class="row">

                            <div class="col-12 col-md-7">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Technical Interview</h6>
                                    <select name="basic" class="form-control" id="ex-multiselect" multiple>
                                        <option value="1">Rahul Sharma</option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Interview Date</h6>
                                    <input type="datetime-local" name="name" placeholder="date" class="form-control"
                                        required/>
                                </div>
                            </div>
                            <div class="col-12 col-md-12">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Interview Link</h6>
                                    <input type="text" name="name" value="https://meet.google.com/odp-nvra-ycf"
                                        placeholder="https://meet.google.com/odp-nvra-ycf" class="form-control"
                                        required/>
                                </div>
                            </div>
                            <div class="addins mb-2 text-end"><Link to="#" class="btn btn-outline-primary">+ Add</Link>
                            </div>
                            <div class="col-12 col-md-7">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Behavioral</h6>
                                    <select name="basic" class="form-control" id="ex-Behavioral" multiple>
                                        <option value="1">Rahul Sharma</option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Interview Date</h6>
                                    <input type="datetime-local" name="name" placeholder="date" class="form-control"
                                        required/>
                                </div>
                            </div>
                            <div class="col-12 col-md-12">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Interview Link</h6>
                                    <input type="text" name="name" placeholder="https://meet.google.com/odp-nvra-ycf"
                                        class="form-control" required/>
                                </div>
                            </div>
                            <div class="addins mb-2 text-end"><Link to="#" class="btn btn-outline-primary">+ Add</Link>
                            </div>
                            <div class="col-12 col-md-7">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Decision</h6>
                                    <select name="basic" class="form-control" id="ex-Decision" multiple>
                                        <option value="1">Om prakash kumawat</option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                        <option value="2">Ravi Sharma </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Interview Date</h6>
                                    <input type="datetime-local" name="name" placeholder="date" class="form-control"
                                        required/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="dd-footer d-flex gap-3 p-3 border-top">
                        <button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn default-btn w-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {/* <!-- add team member end -->

    <!-- reject post -->

    <!-- Modal --> */}
    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="exampleModalLabel">Post Delete</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Are You Sure </h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">No</button>
                    <button type="button" class="btn btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- reject post end --> */}

    <div class="recruiter_list pb-5 pt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <ul class="nav tabs_signup hiredpppp justify-content-start gap-2 mb-3">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/newprofile">Profile Request</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/recruiterinterviewing">Interviewing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/recruiterlist">Hired</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/allprofile">All</Link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-9 col-lg-10">
                    <form>
                        <div class="searchlocation dddddss">
                            <div class="iconfield">
                                <div class="icon_search">
                                    <img src="../assets/images/icon/search-icon.svg" alt=""/>
                                </div>
                                <div class="input-field">
                                    <div class="ca-search-form-container">
                                        <div class="ca-search-input-container">
                                            <div class="ca-search-typewriter-container">
                                                <span id="ca-typewriter-here">Searc</span>
                                            </div>
                                            <input type="text" id="ca-search-input" class="ca-search-input"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="iconfield">
                                <div class="icon_search">
                                    <img src="../assets/images/icon/location-icon.svg" alt=""/>
                                </div>
                                <div class="input-field">
                                    <input type="text" placeholder="USA, Florida" class="form-control" required=""/>
                                </div>
                            </div>
                            <div class="input-field ad121">
                                <input type="submit" value="Search" class="submit_btn"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-3 col-lg-2 my-3 pt-1 text-end">
                    <Link to="#" class="default-btn rounded">Request More Profile</Link>
                </div>
            </div>
            <div class="left_recruiterlists row">
                <div class="col-md-4 col-lg-4">
                    <div class="sticky-header">
                        <div class="nav flex-column recruiter_all_lists nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <div class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                                aria-selected="true">
                                <div class="card_rec position-relative">

                                    <div class="mentersvies0121">
                                        <div class="position-relative">
                                            <img src={instructorsdetails}
                                                class="img-fluid rounded" alt="Instructor"/>
                                            <span class="live_user newuser">Available</span>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="d-flex justify-content-between gap-2">
                                                <div class="comnam">
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title">Web designer</h6>
                                                </div>

                                            </div>
                                            <p class="perographsv">
                                                AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                Delhi |
                                                IIM
                                                Lucknow
                                                | ESCP Paris
                                            </p>
                                        </div>
                                    </div>
                                    <div class="skillstopic">
                                        <div>product Management</div>
                                        <div>Business Development</div>
                                        <div>Career Advice</div>
                                        <div>+3</div>

                                    </div>
                                </div>
                            </div>
                            <div class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile" type="button" role="tab"
                                aria-controls="v-pills-profile" aria-selected="false">
                                <div class="card_rec position-relative">

                                    <div class="mentersvies0121">
                                        <div class="position-relative">
                                            <img src={instructorsimg6}
                                                class="img-fluid rounded" alt="Instructor"/>
                                            <span class="live_user newuser">Available</span>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="d-flex justify-content-between gap-2">
                                                <div class="comnam">
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title">Web designer</h6>
                                                </div>

                                            </div>
                                            <p class="perographsv">
                                                AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                Delhi |
                                                IIM
                                                Lucknow
                                                | ESCP Paris
                                            </p>
                                        </div>
                                    </div>
                                    <div class="skillstopic">
                                        <div>product Management</div>
                                        <div>Business Development</div>
                                        <div>Career Advice</div>
                                        <div>+3</div>

                                    </div>
                                </div>
                            </div>
                            <div class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-messages" type="button" role="tab"
                                aria-controls="v-pills-messages" aria-selected="false">
                                <div class="card_rec position-relative">

                                    <div class="mentersvies0121">
                                        <div class="position-relative">
                                            <img src={instructorsimg3}
                                                class="img-fluid rounded" alt="Instructor"/>
                                            <span class="live_user newuser">Available</span>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="d-flex justify-content-between gap-2">
                                                <div class="comnam">
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title">Web designer</h6>
                                                </div>

                                            </div>
                                            <p class="perographsv">
                                                AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                Delhi |
                                                IIM
                                                Lucknow
                                                | ESCP Paris
                                            </p>
                                        </div>
                                    </div>
                                    <div class="skillstopic">
                                        <div>product Management</div>
                                        <div>Business Development</div>
                                        <div>Career Advice</div>
                                        <div>+3</div>

                                    </div>
                                </div>
                            </div>
                            <div class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-settings" type="button" role="tab"
                                aria-controls="v-pills-settings" aria-selected="false">
                                <div class="card_rec position-relative">

                                    <div class="mentersvies0121">
                                        <div class="position-relative">
                                            <img src={instructorsdetails}
                                                class="img-fluid rounded" alt="Instructor"/>
                                            <span class="live_user newuser">Available</span>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="d-flex justify-content-between gap-2">
                                                <div class="comnam">
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title">Web designer</h6>
                                                </div>

                                            </div>
                                            <p class="perographsv">
                                                AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                Delhi |
                                                IIM
                                                Lucknow
                                                | ESCP Paris
                                            </p>
                                        </div>
                                    </div>
                                    <div class="skillstopic">
                                        <div>product Management</div>
                                        <div>Business Development</div>
                                        <div>Career Advice</div>
                                        <div>+3</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-8">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                            aria-labelledby="v-pills-home-tab">
                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">
                                    <Link to="#" class="rejectbtn" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal3">Reject</Link>
                                    <div class="mentersvies0121">
                                        <div class="position-relative menter_pro">
                                            <img src={instructorsdetails}
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user newuser">Available</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
                                                </div>
                                                <div>
                                                    <Link to="#" class="default-btn rounded" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">Arrange Interview</Link>

                                                </div>
                                            </div>
                                            <p>
                                                AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                Delhi | IIM
                                                Lucknow
                                                | ESCP Paris
                                            </p>

                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">
                                        <div class="businessmen">
                                            <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                            <div><i class="ri-shield-user-fill"></i> Business And Management
                                            </div>
                                            <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                            <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                        </div>

                                    </div>
                                </div>

                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Metting Session
                                                    Date
                                                    and Time</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">

                                                <div id="demo"></div>
                                                <div id="demo-timegrid"></div>
                                            </div>
                                            <div class="modal-footer">

                                                <button type="button" class="default-btn rounded">Book
                                                    Session</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>About Mentor</h5>
                                        <p>
                                            Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                                            Praesent sapien
                                            massa,
                                            convallis a
                                            pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                                            porttitor at
                                            sem.
                                            Cras
                                            ultricies ligula sed
                                            magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                                            luctus
                                            et ultrices
                                            posuere
                                            cubilia.
                                        </p>
                                        <p>
                                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                            dui.
                                            Vestibulum ac
                                            diam
                                            sit
                                            amet quam
                                            vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                            nisl
                                            tempus
                                            convallis
                                            quis
                                            ac lectus.
                                        </p>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Topics</h5>
                                        <div class="skillstopic">
                                            <div>#Build a team</div>
                                            <div>#Change jobs</div>
                                            <div>#Foster team culture</div>
                                            <div>#Get a raise</div>
                                            <div>#Get your Resume/CV reviewed</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Skills</h5>
                                        <div class="skillstopic">
                                            <div> #Product Consulting</div>
                                            <div>#Product Management</div>
                                            <div>#How to get high-impact jobs - VCs/Strategy</div>
                                            <div>#Career Advice</div>
                                            <div>#CAT Preparation</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Education</h5>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Work Experience</h5>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab">
                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121">
                                        <div class="position-relative menter_pro">
                                            <img src={instructorsdetails}
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user newuser">Available</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
                                                </div>
                                                <div>
                                                    <Link to="#" class="default-btn rounded">Arrange Interview</Link>
                                                </div>
                                            </div>
                                            <p>
                                                AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                Delhi | IIM
                                                Lucknow
                                                | ESCP Paris
                                            </p>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">


                                        <div class="businessmen">
                                            <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                            <div><i class="ri-shield-user-fill"></i> Business And Management
                                            </div>
                                            <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                            <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>About Mentor</h5>
                                        <p>
                                            Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                                            Praesent sapien
                                            massa,
                                            convallis a
                                            pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                                            porttitor at
                                            sem.
                                            Cras
                                            ultricies ligula sed
                                            magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                                            luctus
                                            et ultrices
                                            posuere
                                            cubilia.
                                        </p>
                                        <p>
                                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                            dui.
                                            Vestibulum ac
                                            diam
                                            sit
                                            amet quam
                                            vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                            nisl
                                            tempus
                                            convallis
                                            quis
                                            ac lectus.
                                        </p>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Topics</h5>
                                        <div class="skillstopic">
                                            <div>#Build a team</div>
                                            <div>#Change jobs</div>
                                            <div>#Foster team culture</div>
                                            <div>#Get a raise</div>
                                            <div>#Get your Resume/CV reviewed</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Skills</h5>
                                        <div class="skillstopic">
                                            <div> #Product Consulting</div>
                                            <div>#Product Management</div>
                                            <div>#How to get high-impact jobs - VCs/Strategy</div>
                                            <div>#Career Advice</div>
                                            <div>#CAT Preparation</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Education</h5>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Work Experience</h5>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                            aria-labelledby="v-pills-messages-tab">
                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121">
                                        <div class="position-relative menter_pro">
                                            <img src={instructorsdetails}
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user newuser">Available</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
                                                </div>
                                                <div>
                                                    <Link to="#" class="default-btn rounded">Arrange Interview</Link>
                                                </div>
                                            </div>
                                            <p>
                                                AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                Delhi | IIM
                                                Lucknow
                                                | ESCP Paris
                                            </p>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">


                                        <div class="businessmen">
                                            <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                            <div><i class="ri-shield-user-fill"></i> Business And Management
                                            </div>
                                            <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                            <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>About Mentor</h5>
                                        <p>
                                            Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                                            Praesent sapien
                                            massa,
                                            convallis a
                                            pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                                            porttitor at
                                            sem.
                                            Cras
                                            ultricies ligula sed
                                            magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                                            luctus
                                            et ultrices
                                            posuere
                                            cubilia.
                                        </p>
                                        <p>
                                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                            dui.
                                            Vestibulum ac
                                            diam
                                            sit
                                            amet quam
                                            vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                            nisl
                                            tempus
                                            convallis
                                            quis
                                            ac lectus.
                                        </p>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Topics</h5>
                                        <div class="skillstopic">
                                            <div>#Build a team</div>
                                            <div>#Change jobs</div>
                                            <div>#Foster team culture</div>
                                            <div>#Get a raise</div>
                                            <div>#Get your Resume/CV reviewed</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Skills</h5>
                                        <div class="skillstopic">
                                            <div> #Product Consulting</div>
                                            <div>#Product Management</div>
                                            <div>#How to get high-impact jobs - VCs/Strategy</div>
                                            <div>#Career Advice</div>
                                            <div>#CAT Preparation</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Education</h5>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Work Experience</h5>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                            aria-labelledby="v-pills-settings-tab">
                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121">
                                        <div class="position-relative menter_pro">
                                            <img src={instructorsdetails}
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user newuser">Available</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
                                                </div>
                                                <div>
                                                    <Link to="#" class="default-btn rounded">Arrange Interview</Link>
                                                </div>
                                            </div>
                                            <p>
                                                AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                Delhi | IIM
                                                Lucknow
                                                | ESCP Paris
                                            </p>
                                        </div>
                                    </div>
                                    <div class="instructors-details-contents mt-3">


                                        <div class="businessmen">
                                            <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                            <div><i class="ri-shield-user-fill"></i> Business And Management
                                            </div>
                                            <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                            <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>About Mentor</h5>
                                        <p>
                                            Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                                            Praesent sapien
                                            massa,
                                            convallis a
                                            pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                                            porttitor at
                                            sem.
                                            Cras
                                            ultricies ligula sed
                                            magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                                            luctus
                                            et ultrices
                                            posuere
                                            cubilia.
                                        </p>
                                        <p>
                                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                            dui.
                                            Vestibulum ac
                                            diam
                                            sit
                                            amet quam
                                            vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                                            nisl
                                            tempus
                                            convallis
                                            quis
                                            ac lectus.
                                        </p>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Topics</h5>
                                        <div class="skillstopic">
                                            <div>#Build a team</div>
                                            <div>#Change jobs</div>
                                            <div>#Foster team culture</div>
                                            <div>#Get a raise</div>
                                            <div>#Get your Resume/CV reviewed</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Skills</h5>
                                        <div class="skillstopic">
                                            <div> #Product Consulting</div>
                                            <div>#Product Management</div>
                                            <div>#How to get high-impact jobs - VCs/Strategy</div>
                                            <div>#Career Advice</div>
                                            <div>#CAT Preparation</div>

                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Education</h5>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>ESCP Business School, Paris, France</h6>
                                                <span>MIM</span>
                                                <p>2016 - 2017</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Work Experience</h5>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src={educationimg} alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default NewProfile
