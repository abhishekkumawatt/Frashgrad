import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import searchicon from '../../assets/images/icon/search-icon.svg'
import locationicon from '../../assets/images/icon/location-icon.svg'
import companybuilding from '../../assets/images/company-building.png'
import { Link } from 'react-router-dom';

const StudentJobs = () => {
  return (
    <div>
       <Header headers="recruiter-list"/>

    <div class="header_space"></div>

    <div class="recruiter_list pb-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <form>
                        <div class="searchlocation">
                            <div class="iconfield">
                                <div class="icon_search">
                                    <img src={searchicon} alt=""/>
                                </div>
                                <div class="input-field">
                                    <div class="ca-search-form-container">
                                        <div class="ca-search-input-container">
                                            <div class="ca-search-typewriter-container">
                                                <span id="ca-typewriter-here"></span>
                                            </div>
                                            <input type="text" id="ca-search-input" class="ca-search-input"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="iconfield">
                                <div class="icon_search">
                                    <img src={locationicon} alt=""/>
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
                                        <div class="companylogos position-relative">
                                            <img src={companybuilding} class="img-fluid rounded"
                                                alt="Instructor"/>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="comnam">
                                                <h3>Python Developer </h3>
                                                <h6 class="sub-title"><i class="ri-community-line"></i> V2stech Solutions pvt. Ltd.</h6>
                                            </div>
                                            <p class="perographsv">
                                                <i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="skillstopic">
                                            <div>Engineering Students</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile" type="button" role="tab"
                                aria-controls="v-pills-profile" aria-selected="false">
                                <div class="card_rec position-relative">
                                    <div class="mentersvies0121">
                                        <div class="companylogos position-relative">
                                            <img src={companybuilding} class="img-fluid rounded"
                                                alt="Instructor"/>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="comnam">
                                                <h3>Python Developer </h3>
                                                <h6 class="sub-title"><i class="ri-community-line"></i> V2stech Solutions pvt. Ltd.</h6>
                                            </div>
                                            <p class="perographsv">
                                                <i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="skillstopic">
                                            <div>Engineering Students</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-messages" type="button" role="tab"
                                aria-controls="v-pills-messages" aria-selected="false">
                                <div class="card_rec position-relative">
                                    <div class="mentersvies0121">
                                        <div class="companylogos position-relative">
                                            <img src={companybuilding} class="img-fluid rounded"
                                                alt="Instructor"/>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="comnam">
                                                <h3>Python Developer </h3>
                                                <h6 class="sub-title"><i class="ri-community-line"></i> V2stech Solutions pvt. Ltd.</h6>
                                            </div>
                                            <p class="perographsv">
                                                <i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="skillstopic">
                                            <div>Engineering Students</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-settings" type="button" role="tab"
                                aria-controls="v-pills-settings" aria-selected="false">
                                <div class="card_rec position-relative">
                                    <div class="mentersvies0121">
                                        <div class="companylogos position-relative">
                                            <img src={companybuilding} class="img-fluid rounded"
                                                alt="Instructor"/>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="comnam">
                                                <h3>Python Developer </h3>
                                                <h6 class="sub-title"><i class="ri-community-line"></i> V2stech Solutions pvt. Ltd.</h6>
                                            </div>
                                            <p class="perographsv">
                                                <i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="skillstopic">
                                            <div>Engineering Students</div>
                                        </div>
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

                                    <div class="mentersvies0121 recruiter101s">
                                        <div class="position-relative companylogo01">
                                            <img src={companybuilding} class="" alt="Instructor"/>

                                        </div>

                                        <div class="instructors-details-contents">
                                            <h3>Python Developer</h3>
                                            <p><Link to="#"><i class="ri-community-line"></i> V2stech Solutions pvt.
                                                    Ltd.</Link></p>
                                            <p><i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div class="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                                        <Link to="#" class="default-btn rounded">Apply</Link>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-time-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Application Deadline </p>
                                                <span class="small text-muted">363</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-eye-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Impressions </p>
                                                <span class="small text-muted">363</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-calendar-2-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Calendar </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100"
                                class="scrollspy-example" tabindex="0">
                                <div id="scrollspyHeading1" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Job Description</h5>
                                        <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                                            Representative! </h6>
                                        <h6>Responsibilities:</h6>
                                        <ul>
                                            <li>Provide exceptional customer service via phone, email, and chat</li>
                                            <li>Resolve customer inquiries and complaints promptly and efficiently
                                            </li>
                                            <li>Maintain accurate customer records and update information as needed
                                            </li>
                                            <li>Identify and escalate complex issues to the appropriate team</li>
                                            <li>Provide product and service information to customers</li>
                                            <li>Follow established customer service policies and procedures</li>
                                            <li>Contribute to a positive and professional work environment</li>
                                        </ul>
                                        <h6>Requirements:</h6>
                                        <ul>
                                            <li>High school diploma or equivalent</li>
                                            <li>Excellent communication and interpersonal skills</li>
                                            <li>Strong problem-solving and analytical abilities</li>
                                            <li>Proficient in Microsoft Office Suite</li>
                                            <li>Ability to work independently and as part of a team</li>
                                            <li>Positive attitude and willingness to learn</li>

                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab">
                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121 recruiter101s">
                                        <div class="position-relative companylogo01">
                                            <img src={companybuilding} class="" alt="Instructor"/>

                                        </div>

                                        <div class="instructors-details-contents">
                                            <h3>Python Developer</h3>
                                            <p><Link to="#"><i class="ri-community-line"></i> V2stech Solutions pvt.
                                                    Ltd.</Link></p>
                                            <p><i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div class="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                                        <Link to="#" class="default-btn rounded">Apply</Link>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-time-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Application Deadline </p>
                                                <span class="small text-muted">363</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-eye-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Impressions </p>
                                                <span class="small text-muted">363</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-calendar-2-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Calendar </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100"
                                class="scrollspy-example" tabindex="0">
                                <div id="scrollspyHeading1" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Job Description</h5>
                                        <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                                            Representative! </h6>
                                        <h6>Responsibilities:</h6>
                                        <ul>
                                            <li>Provide exceptional customer service via phone, email, and chat</li>
                                            <li>Resolve customer inquiries and complaints promptly and efficiently
                                            </li>
                                            <li>Maintain accurate customer records and update information as needed
                                            </li>
                                            <li>Identify and escalate complex issues to the appropriate team</li>
                                            <li>Provide product and service information to customers</li>
                                            <li>Follow established customer service policies and procedures</li>
                                            <li>Contribute to a positive and professional work environment</li>
                                        </ul>
                                        <h6>Requirements:</h6>
                                        <ul>
                                            <li>High school diploma or equivalent</li>
                                            <li>Excellent communication and interpersonal skills</li>
                                            <li>Strong problem-solving and analytical abilities</li>
                                            <li>Proficient in Microsoft Office Suite</li>
                                            <li>Ability to work independently and as part of a team</li>
                                            <li>Positive attitude and willingness to learn</li>

                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                            aria-labelledby="v-pills-messages-tab">
                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121 recruiter101s">
                                        <div class="position-relative companylogo01">
                                            <img src={companybuilding} class="" alt="Instructor"/>

                                        </div>

                                        <div class="instructors-details-contents">
                                            <h3>Python Developer</h3>
                                            <p><Link to="#"><i class="ri-community-line"></i> V2stech Solutions pvt.
                                                    Ltd.</Link></p>
                                            <p><i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div class="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                                        <Link to="#" class="default-btn rounded">Apply</Link>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-time-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Application Deadline </p>
                                                <span class="small text-muted">363</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-eye-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Impressions </p>
                                                <span class="small text-muted">363</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-calendar-2-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Calendar </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100"
                                class="scrollspy-example" tabindex="0">
                                <div id="scrollspyHeading1" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Job Description</h5>
                                        <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                                            Representative! </h6>
                                        <h6>Responsibilities:</h6>
                                        <ul>
                                            <li>Provide exceptional customer service via phone, email, and chat</li>
                                            <li>Resolve customer inquiries and complaints promptly and efficiently
                                            </li>
                                            <li>Maintain accurate customer records and update information as needed
                                            </li>
                                            <li>Identify and escalate complex issues to the appropriate team</li>
                                            <li>Provide product and service information to customers</li>
                                            <li>Follow established customer service policies and procedures</li>
                                            <li>Contribute to a positive and professional work environment</li>
                                        </ul>
                                        <h6>Requirements:</h6>
                                        <ul>
                                            <li>High school diploma or equivalent</li>
                                            <li>Excellent communication and interpersonal skills</li>
                                            <li>Strong problem-solving and analytical abilities</li>
                                            <li>Proficient in Microsoft Office Suite</li>
                                            <li>Ability to work independently and as part of a team</li>
                                            <li>Positive attitude and willingness to learn</li>

                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                            aria-labelledby="v-pills-settings-tab">
                            <div class="instructors-details-img m-0">
                                <div class="card-instrutors shadow position-relative bg-white p-4">

                                    <div class="mentersvies0121 recruiter101s">
                                        <div class="position-relative companylogo01">
                                            <img src={companybuilding} class="" alt="Instructor"/>

                                        </div>

                                        <div class="instructors-details-contents">
                                            <h3>Python Developer</h3>
                                            <p><Link to="#"><i class="ri-community-line"></i> V2stech Solutions pvt.
                                                    Ltd.</Link></p>
                                            <p><i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div class="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                                        <Link to="#" class="default-btn rounded">Apply</Link>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-time-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Application Deadline </p>
                                                <span class="small text-muted">363</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-eye-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Impressions </p>
                                                <span class="small text-muted">363</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-calendar-2-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">Calendar </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100"
                                class="scrollspy-example" tabindex="0">
                                <div id="scrollspyHeading1" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Job Description</h5>
                                        <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                                            Representative! </h6>
                                        <h6>Responsibilities:</h6>
                                        <ul>
                                            <li>Provide exceptional customer service via phone, email, and chat</li>
                                            <li>Resolve customer inquiries and complaints promptly and efficiently
                                            </li>
                                            <li>Maintain accurate customer records and update information as needed
                                            </li>
                                            <li>Identify and escalate complex issues to the appropriate team</li>
                                            <li>Provide product and service information to customers</li>
                                            <li>Follow established customer service policies and procedures</li>
                                            <li>Contribute to a positive and professional work environment</li>
                                        </ul>
                                        <h6>Requirements:</h6>
                                        <ul>
                                            <li>High school diploma or equivalent</li>
                                            <li>Excellent communication and interpersonal skills</li>
                                            <li>Strong problem-solving and analytical abilities</li>
                                            <li>Proficient in Microsoft Office Suite</li>
                                            <li>Ability to work independently and as part of a team</li>
                                            <li>Positive attitude and willingness to learn</li>

                                        </ul>
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

export default StudentJobs
