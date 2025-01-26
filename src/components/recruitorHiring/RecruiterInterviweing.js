import React from 'react'
import Header from '../common/Header/Header'
import { Link } from 'react-router-dom';

const RecruiterInterviweing = () => {
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

    <div class="recruiter_list pb-5 pt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <ul class="nav tabs_signup hiredpppp justify-content-start gap-2 mb-3">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/newprofile">New Profile</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/recruiterinterviewing">Interviewing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/recruiterlist">Hired</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/allprofile">All</Link>
                        </li>
                    </ul>
                </div>
                <div class="col-12">
                    <form>
                        <div class="searchlocation">
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

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Interview</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <form method="post">
                                <div class="modal-body">
                                    <div class="row">

                                        {/* <!-- <div class="col-12 col-md-7">
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
                                                required>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <div class="form-group mb-2 myteamform">
                                                <h6>Interview Link</h6>
                                                <input type="text" name="name" value="https://meet.google.com/odp-nvra-ycf" placeholder="https://meet.google.com/odp-nvra-ycf" class="form-control"
                                                required>
                                            </div>
                                        </div>
                                        <hr> --> */}
                                        {/* <!-- <div class="col-12 col-md-7">
                                                <div class="form-group mb-2 myteamform">
                                                    <h6>Behavioral</h6>
                                                    <select name="basic" class="form-control" id="ex-Behavioral"
                                                        multiple>
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
                                                    <input type="datetime-local" name="name" placeholder="date"
                                                        class="form-control" required/>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-12">
                                                <div class="form-group mb-2 myteamform">
                                                    <h6>Interview Link</h6>
                                                    <input type="text" name="name"
                                                        placeholder="https://meet.google.com/odp-nvra-ycf"
                                                        class="form-control" required/>
                                                </div>
                                            </div>
                                            <hr> --> */}
                                        <div class="col-12 col-md-12">
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
                                        <div class="col-12 col-md-12">
                                            <div class="form-group mb-2 myteamform">
                                                <h6>Interview Date</h6>
                                                <input type="datetime-local" name="name" placeholder="date"
                                                    class="form-control" required/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="dd-footer d-flex gap-3 p-3 border-top">
                                    <button type="button" class="btn btn-secondary w-100"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn default-btn w-100">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- add team member end --> */}


                {/* <!-- feedback --> */}
                <div class="modal fade" id="feedback" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Schedule Interview</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <form method="post">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="form-group">
                                                <div class="d-flex gap-4">
                                                    <label class="m-0 fw-normal">Recommend </label>
                                                    <div class="form-check text-success">
                                                        <input class="form-check-input text-success" type="radio"
                                                            name="flexRadioDefault" id="flexRadioDefault1"/>
                                                        <label class="form-check-label text-success"
                                                            for="flexRadioDefault1">
                                                            Hire
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input text-danger" type="radio"
                                                            name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                        <label class="form-check-label text-danger"
                                                            for="flexRadioDefault2">
                                                            Reject
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <div class="form-group d-flex align-items-center gap-4">
                                                <label>Star Ratting</label>
                                                <div class="reviewsreat">
                                                    <div class="rate">
                                                        <input type="radio" id="star5" name="rate" value="5" />
                                                        <label for="star5" title="text">5 stars</label>
                                                        <input type="radio" id="star4" name="rate" value="4" />
                                                        <label for="star4" title="text">4 stars</label>
                                                        <input type="radio" id="star3" name="rate" value="3" />
                                                        <label for="star3" title="text">3 stars</label>
                                                        <input type="radio" id="star2" name="rate" value="2" />
                                                        <label for="star2" title="text">2 stars</label>
                                                        <input type="radio" id="star1" name="rate" value="1" />
                                                        <label for="star1" title="text">1 star</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <div class="form-group mb-2">
                                                <label>Top 5 Skills</label>
                                                <input type="text" class="form-control" id="newTag" />
                                                <ul id="tagList">
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <div class="form-group mb-2 myteamform">
                                                <lable>Metting Link (Optional)</lable>
                                                <input type="text" name="name"
                                                    placeholder="https://meet.google.com/odp-nvra-ycf"
                                                    value="https://meet.google.com/odp-nvra-ycf" class="form-control"
                                                    required/>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <div class="form-group mb-2 myteamform">
                                                <lable>Feedback</lable>
                                                <textarea placeholder="Message" class="form-control"></textarea>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="dd-footer d-flex gap-3 p-3 border-top">
                                    <button type="button" class="btn btn-secondary w-100"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn default-btn w-100">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- feedback end --> */}


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
                                            <img src="../assets/images/instructors/instructors-details.jpg"
                                                class="img-fluid rounded" alt="Instructor"/>
                                            <span class="live_user bginter">Interviewing</span>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="d-flex justify-content-between gap-2">
                                                <div class="comnam">
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title">Web designer</h6>
                                                </div>
                                                <div><Link to="#" class="btn btn-sm btn-outline-primary">Behavioral</Link>
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
                                            <img src="../assets/images/instructors/instructors-img6.jpg"
                                                class="img-fluid rounded" alt="Instructor"/>
                                            <span class="live_user bginter">Interviewing</span>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="d-flex justify-content-between gap-2">
                                                <div class="comnam">
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title">Web designer</h6>
                                                </div>
                                                <div><Link to="#" class="btn btn-sm btn-outline-warning">Decision</Link>
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
                                            <img src="../assets/images/instructors/instructors-img3.jpg"
                                                class="img-fluid rounded" alt="Instructor"/>
                                            <span class="live_user bginter">Interviewing</span>
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
                                            <img src="../assets/images/instructors/instructors-details.jpg"
                                                class="img-fluid rounded" alt="Instructor"/>
                                            <span class="live_user bginter">Interviewing</span>
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

                            <div class="slider_descd">
                                <h3>Hiring Process View</h3>

                                <div class="allprocess">
                                    {/* <!-- Progress Tracker v2 --> */}
                                    <ol class="progress hireprocessview" data-steps="3">
                                        <li class="active">
                                            <span class="step"><span>1</span></span>
                                            <div class="headinghire">
                                                <h5>Technical</h5>
                                            </div>
                                        </li>
                                        <li class="active">
                                            <span class="step"><span>2</span></span>
                                            <div class="headinghire">
                                                <h5>Behavioral</h5>
                                            </div>
                                        </li>
                                        <li class="done">
                                            <span class="step"><span>3</span></span>
                                            <div class="headinghire">
                                                <h5>Decision</h5>
                                            </div>
                                        </li>
                                    </ol>

                                    <div class="hiring_process">
                                        <div>
                                            <div class="firsthire">
                                                <div class="card">
                                                    <div class="interviewround1">01</div>
                                                    <div class="card-body p-0">
                                                        <div
                                                            class="profileinterview position-relative p-2 d-flex gap-2">
                                                            <img width="40" class="rounded-pill" height="40"
                                                                src="../assets/images/profile1.jpg"
                                                                onerror="src='../assets/images/img_avatar.png'"
                                                                alt="" />
                                                            <div>Interviewer:-
                                                                <h6 class="m-0">Rahul Sharma</h6>
                                                                <span class="small">Date: 10/05/2024 11:20PM</span>
                                                            </div>
                                                            <Link class="btn btn-sm btn-primary viewbbbb position-absolute top-0 end-0"
                                                                type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseExample" aria-expanded="false"
                                                                aria-controls="collapseExample"> View
                                                                <i class="ri-arrow-down-s-line"></i>
                                                            </Link>
                                                        </div>
                                                        <div class="header0101 p-2 py-2">
                                                            <div class="d-flex justify-content-between gap-3">
                                                                <h6 class="m-0 fw-normal">Recommend </h6>
                                                                <div class="form-check text-success">
                                                                    <input class="form-check-input text-success"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="flexRadioDefault1" disabled/>
                                                                    <label class="form-check-label text-success"
                                                                        for="flexRadioDefault1">
                                                                        Hire
                                                                    </label>
                                                                </div>

                                                            </div>
                                                            <div class="reviewsreat">
                                                                <div class="rate">
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="float-start">
                                                            <div class="collapse" id="collapseExample">
                                                                <div class="card card-body p-0">
                                                                    <div class="header0101 p-2 py-2">
                                                                        <div
                                                                            class="text-end mb-2 d-flex justify-content-between">
                                                                            <h6>Skills:-</h6>
                                                                            <Link to="#"
                                                                                class="btn py-1 btn-outline-primary btn-sm"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#feedback">
                                                                                Edit
                                                                            </Link>
                                                                        </div>
                                                                        <ol>
                                                                            <li>Cloud Security</li>
                                                                            <li>Cybersecurity</li>

                                                                        </ol>
                                                                        <h6 class="mb-0">Meeting Recording link</h6>
                                                                        <p class="text-primary">
                                                                            https://meet.google.com/odp-nvra-ycf
                                                                        </p>

                                                                        <div class="showmoreconteint">
                                                                            <div class="block">
                                                                                <div class="content">
                                                                                    <h6>Feedback:-</h6>
                                                                                    <p
                                                                                        class="js-excerpt excerpt-hidden">
                                                                                        Lorem ipsum dolor sit amet
                                                                                        consectetur
                                                                                        adipisicing elit. Voluptatem
                                                                                        eligendi
                                                                                        illo nulla amet commodi animi
                                                                                        ipsam
                                                                                        architecto facere. Praesentium
                                                                                        repellat
                                                                                        quidem provident sit, libero
                                                                                        sunt
                                                                                        inventore. Quibusdam ipsum
                                                                                        veniam
                                                                                        pariatur. Lorem ipsum dolor sit
                                                                                        amet
                                                                                        consectetur adipisicing elit.
                                                                                        Optio,
                                                                                        repudiandae praesentium! Dolor,
                                                                                        eveniet
                                                                                        eius magni rem nobis, officia
                                                                                        veniam
                                                                                        quaerat tempora voluptatum
                                                                                        dolore
                                                                                        dolorum vel minima quod. In,
                                                                                        delectus
                                                                                        corporis. Lorem, ipsum dolor sit
                                                                                        amet
                                                                                        consectetur adipisicing elit.
                                                                                        Culpa
                                                                                        itaque ducimus ea, qui animi
                                                                                        doloribus
                                                                                        fugit repellendus deserunt
                                                                                        distinctio?
                                                                                        Assumenda consequuntur nesciunt
                                                                                        dicta
                                                                                        ipsam odio? Accusantium eaque
                                                                                        dolor
                                                                                        fuga
                                                                                        aut?</p>
                                                                                </div>
                                                                                <Link role="button" to="#"
                                                                                    class="js-show-more">Show
                                                                                    more</Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="firsthire">
                                                <div class="card">
                                                    <div class="interviewround1">02</div>
                                                    <div class="card-body p-0">
                                                        <div
                                                            class="profileinterview position-relative p-2 d-flex gap-2">
                                                            <img width="40" class="rounded-pill" height="40"
                                                                src="../assets/images/profile1.jpg"
                                                                onerror="src='../assets/images/img_avatar.png'"
                                                                alt="" />
                                                            <div>Interviewer:-
                                                                <h6 class="m-0">Rahul Sharma</h6>
                                                                <span class="small">Date: 10/05/2024 11:20PM</span>
                                                            </div>
                                                            <Link class="btn btn-sm btn-primary viewbbbb position-absolute top-0 end-0"
                                                                type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseExample" aria-expanded="false"
                                                                aria-controls="collapseExample"> View
                                                                <i class="ri-arrow-down-s-line"></i>
                                                            </Link>
                                                        </div>
                                                        <div class="header0101 p-2 py-2">
                                                            <div class="d-flex justify-content-between gap-3">
                                                                <h6 class="m-0 fw-normal">Recommend </h6>
                                                                <div class="form-check text-success">
                                                                    <input class="form-check-input text-success"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="flexRadioDefault1" disabled/>
                                                                    <label class="form-check-label text-success"
                                                                        for="flexRadioDefault1">
                                                                        Hire
                                                                    </label>
                                                                </div>

                                                            </div>
                                                            <div class="reviewsreat">
                                                                <div class="rate">
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                    <i class="ri-star-fill text-warning"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="float-start">
                                                            <div class="collapse" id="collapseExample">
                                                                <div class="card card-body p-0">
                                                                    <div class="header0101 p-2 py-2">
                                                                        <div
                                                                            class="text-end mb-2 d-flex justify-content-between">
                                                                            <h6>Skills:-</h6>
                                                                            <Link to="#"
                                                                                class="btn py-1 btn-outline-primary btn-sm"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#feedback">
                                                                                Edit
                                                                            </Link>
                                                                        </div>
                                                                        <ol>
                                                                            <li>Cloud Security</li>
                                                                            <li>Cybersecurity</li>

                                                                        </ol>
                                                                        <h6 class="mb-0">Meeting Recording link</h6>
                                                                        <p class="text-primary">
                                                                            https://meet.google.com/odp-nvra-ycf
                                                                        </p>

                                                                        <div class="showmoreconteint">
                                                                            <div class="block">
                                                                                <div class="content">
                                                                                    <h6>Feedback:-</h6>
                                                                                    <p
                                                                                        class="js-excerpt excerpt-hidden">
                                                                                        Lorem ipsum dolor sit amet
                                                                                        consectetur
                                                                                        adipisicing elit. Voluptatem
                                                                                        eligendi
                                                                                        illo nulla amet commodi animi
                                                                                        ipsam
                                                                                        architecto facere. Praesentium
                                                                                        repellat
                                                                                        quidem provident sit, libero
                                                                                        sunt
                                                                                        inventore. Quibusdam ipsum
                                                                                        veniam
                                                                                        pariatur. Lorem ipsum dolor sit
                                                                                        amet
                                                                                        consectetur adipisicing elit.
                                                                                        Optio,
                                                                                        repudiandae praesentium! Dolor,
                                                                                        eveniet
                                                                                        eius magni rem nobis, officia
                                                                                        veniam
                                                                                        quaerat tempora voluptatum
                                                                                        dolore
                                                                                        dolorum vel minima quod. In,
                                                                                        delectus
                                                                                        corporis. Lorem, ipsum dolor sit
                                                                                        amet
                                                                                        consectetur adipisicing elit.
                                                                                        Culpa
                                                                                        itaque ducimus ea, qui animi
                                                                                        doloribus
                                                                                        fugit repellendus deserunt
                                                                                        distinctio?
                                                                                        Assumenda consequuntur nesciunt
                                                                                        dicta
                                                                                        ipsam odio? Accusantium eaque
                                                                                        dolor
                                                                                        fuga
                                                                                        aut?</p>
                                                                                </div>
                                                                                <Link role="button" to="#"
                                                                                    class="js-show-more">Show
                                                                                    more</Link>
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
                                        <div>
                                            <div class="firsthire">
                                                <div class="card">
                                                    <div class="interviewround1">01</div>
                                                    <div class="card-body p-0">

                                                        <div class="profileinterview position-relative p-2 d-flex gap-2">
                                                            <img width="40" class="rounded-pill" height="40"
                                                                src="../assets/images/profile1.jpg"
                                                                onerror="src='../assets/images/img_avatar.png'"
                                                                alt="" />
                                                            <div>Interviewer:-
                                                                <h6 class="m-0">Rahul Sharma</h6>
                                                                <span class="small">Date: 10/05/2024 11:20PM</span>
                                                            </div>
                                                           
                                                        </div>
                                                        <div class="header0101 p-2 py-2">
                                                            <Link to="#" class="default-btn btn-sm py-1 rounded"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#feedback">Interview feedback</Link>
                                                        </div>
                                                           
                                                        <div class="collapse" id="collapseExample2">
                                                            <div class="card card-body p-0">
                                                                ddddd
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div class="firsthire">
                                                <div class="card">
                                                    <Link to="#" class="default-btn rounded" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">Schedule Interview</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121">
                                        <div class="position-relative menter_pro">
                                            <img src="../assets/images/instructors/instructors-details.jpg"
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user bginter">Interviewing</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
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
                                                <img src="../assets/images/education.png" alt=""/>
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
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
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
                                            <img src="../assets/images/instructors/instructors-details.jpg"
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user bginter">Interviewing</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
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
                                                <img src="../assets/images/education.png" alt=""/>
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
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
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
                                            <img src="../assets/images/instructors/instructors-details.jpg"
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user bginter">Interviewing</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
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
                                                <img src="../assets/images/education.png" alt=""/>
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
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
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
                                            <img src="../assets/images/instructors/instructors-details.jpg"
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user bginter">Interviewing</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
                                                </div>
                                                <div>
                                                    <Link to="#" class="default-btn rounded">Connect</Link>
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
                                                <img src="../assets/images/education.png" alt=""/>
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
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
                                            </div>
                                            <div>
                                                <h6>Head of Marketing</h6>
                                                <span>Sunstone Eduversity</span>
                                                <p>2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div class="skillstopic_education">
                                            <div class="educationicon">
                                                <img src="../assets/images/education.png" alt=""/>
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
    </div>
  )
}

export default RecruiterInterviweing
