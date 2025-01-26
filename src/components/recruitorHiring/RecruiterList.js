import React, { useState } from 'react'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'
import instructorsdetails from '../../assets/images/instructors/instructors-details.jpg'
import instructorsimg6 from '../../assets/images/instructors/instructors-img6.jpg'
import instructorsimg3 from '../../assets/images/instructors/instructors-img3.jpg'
import profile1 from '../../assets/images/profile1.jpg'
import educationimg from '../../assets/images/education.png'
import { Link } from 'react-router-dom';

const RecruiterList = () => {
    const [isShow, setIsShow]=useState(false)
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
                            <Link class="nav-link" to="/recruiterinterviewing">Interviewing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/recruiterlist">Hired</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/allprofile">All</Link>
                        </li>

                    </ul>
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
                                                <span id="ca-typewriter-here">Search</span>
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
                                            <span class="live_user">Hired</span>
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
                                            <span class="live_user">Hired</span>
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
                                            <span class="live_user">Hired</span>
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
                                            <span class="live_user">Hired</span>
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
                            <div class="slider_descsss">
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
                                        <li class="active">
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
                                                                src={profile1   }
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
                                                                src={profile1}
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
                                                        <div
                                                            class="profileinterview position-relative p-2 d-flex gap-2">
                                                            <img width="40" class="rounded-pill" height="40"
                                                                src={profile1}
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
                                                                src={profile1}
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
                                                        <div
                                                            class="profileinterview position-relative p-2 d-flex gap-2">
                                                            <img width="40" class="rounded-pill" height="40"
                                                                src={profile1}
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
                                                    <div class="interviewround1">01</div>
                                                    <div class="card-body p-0">
                                                        <div
                                                            class="profileinterview position-relative p-2 d-flex gap-2">
                                                            <img width="40" class="rounded-pill" height="40"
                                                                src={profile1}
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
                                    </div>
                                </div>
                            </div>


                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121">
                                        <div class="position-relative menter_pro">
                                            <img src={instructorsdetails}
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user">Hired</span>
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
                                        <div class="d-flex align-items-center mb-3 justify-content-between">
                                            <div class="businessmen">
                                                <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                                <div><i class="ri-shield-user-fill"></i> Business And Management
                                                </div>
                                                <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                                <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                            </div>
                                            <Link to="#" class="default-btn p-2  py-1 bg-success rounded"><i
                                                    class="ri-check-double-line m-0 h5 me-2"></i> Hired</Link>
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
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab">
                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121">
                                        <div class="position-relative menter_pro">
                                            <img src="../assets/images/instructors/instructors-details.jpg"
                                                class="rounded_01top" alt="Instructor"/>
                                            <span class="live_user">Hired</span>
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
                                            <span class="live_user">Hired</span>
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
                                            <span class="live_user">Hired</span>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default RecruiterList
