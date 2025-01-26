import React from 'react'
import { Link } from 'react-router-dom';

const MyTeam = () => {
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
                            <Link href="/">
                                <img src="../assets/images/logos/logo-full.png" height="50"
                                    class="logo-one rounded-pill" alt="logo"/>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="desktop-nav nav-area">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light p-0">
                        <Link class="navbar-brand" href="/">
                            <img src="../assets/images/logos/logo-full.png" class="logo-one rounded-pill" alt="Logo"/>

                        </Link>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav w-100 ms-5">
                                <li class="nav-item">
                                    <Link href="/recruiterdashboaed">
                                        Dashboard
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" href="my-team.html">My Team</Link>
                                </li>
                                <li class="nav-item">
                                    <Link href="/recruiterlist">Candidate profile</Link>
                                </li>

                                <li class="nav-item">
                                    <Link href="/myjobs">My Jobs</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" href="/interviewguide">Interview Guide</Link>
                                </li>
                            </ul>

                            <div class="others-options gap-2 d-flex align-items-center">
                                <div class="optional-item">
                                    <Link href="/jobpost" class="default-btn two p-2 px-3 rounded-pill">Job Post</Link>
                                </div>
                                <div class="optional-item">
                                    <button class="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="ri-notification-2-line"></i></button>
                                </div>
                                <div class="navbar-category">
                                    <div class="dropdown category-list-dropdown">
                                        <button class="btn dropdown-toggle" type="button"
                                            id="dropdownMenuButtoncategory" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <img src="../assets/images/profile1.jpg" height="50" width="50"
                                                class="rounded-pill" alt="" />
                                            Freshgrad
                                            <i class="ri-arrow-down-s-line"></i>
                                        </button>
                                        <div class="dropdown-menu profile_dropdown"
                                            aria-labelledby="dropdownMenuButtoncategory">
                                            <Link href="/profile" class="nav-link-item">
                                                <i class="flaticon-user"></i>
                                                Edit Profile
                                            </Link>

                                            <Link href="#" class="logoutbtn">
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
                            <Link href="/signin" class="defaultsignin rounded-pill">Sign In</Link>
                        </div>
                        <div class="optional-item">
                            <Link href="/signin" class="default-btn two rounded-pill">Sign up</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

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
                            <div class="col-12 col-md-12">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Interview Link</h6>
                                    <input type="text" name="name" placeholder="https://meet.google.com/odp-nvra-ycf"
                                        class="form-control" required/>
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

    <!-- popup my tema add -->
    <!-- Modal --> */}
    <div class="modal fade" id="addtame" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel2">Add Team Member</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post">
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12 mb-3 text-center border-bottom pb-3">
                                <div class="form-group">
                                    <label class="fieldlabels">Upload Profile image</label>
                                    <div id='profile-upload'>
                                        <div class="hvr-profile-img"><input type="file" name="logo" id='getval'
                                                class="upload w180" title="Dimensions 180 X 180" /></div>
                                        <i class="fa ri-camera-2-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group mb-2 myteamform">
                                    <label>First Name</label>
                                    <input type="text" name="name" placeholder="first name" class="form-control"
                                        required/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group mb-2 myteamform">
                                    <label>Last Name</label>
                                    <input type="text" name="name" placeholder="last name" class="form-control"
                                        required/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group myteamform">
                                    <label>Email ID</label>
                                    <input type="email" name="email" placeholder="email address" class="form-control"
                                        required/>
                                </div>
                            </div>
                            <div class="col-12 col-md-12 mt-2">
                                <div class="form-group mb-2 myteamform">
                                    <h6>Invite Group Link</h6>
                                    <input type="text" name="name" value="https://meet.google.com/odp-nvra-ycf"
                                        placeholder="https://meet.google.com/odp-nvra-ycf" class="form-control"
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
    {/* <!-- popup my tema add end --> */}

    <div class="recruiter_list pb-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10">
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

                                <div class="input-field">
                                    <input type="email" placeholder="Email" class="form-control" required=""/>
                                </div>
                            </div>
                            <div class="input-field ad121">
                                <input type="submit" value="Search" class="submit_btn"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-2 my-auto">
                    <div><Link href="#" class="addtambtn w-100 text-center" data-bs-toggle="modal"
                            data-bs-target="#addtame">+ Add Team
                            Member</Link></div>
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
                                            <img src="../assets/images/instructors/instructors-details.jpg"
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
                                            <img src="../assets/images/instructors/instructors-img6.jpg"
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
                                            <img src="../assets/images/instructors/instructors-img3.jpg"
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
                                            <img src="../assets/images/instructors/instructors-details.jpg"
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
                              
                                <div class="card-instrutors rounded shadow position-relative bg-white p-4">
                                    <div class="card-body p-0">
                                        <h5>Kannav Web designer</h5>

                                        <div class="d-flex align-items-start gap-5">
                                            <div>
                                                <ul class="course-list nav align-items-center gap-3">
                                                    <li class="text-primary bg-light p-2 px-3 rounded"><i
                                                            class="ri-vidicon-fill"></i> 10:20
                                                        PM Call
                                                    </li>
                                                    <li><i class="ri-time-fill"></i> 45 Min</li>
                                                </ul>
                                                <h5 class="mt-2 text-muted fw-normal">Free Book</h5>
                                            </div>
                                            <div class="bookbtnas">
                                                <Link href="#" class="default-btn rounded" data-bs-toggle="modal"
                                                    data-bs-target="#bookinterview">Add Calendar variability</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-instrutors rounded shadow position-relative mt-3 bg-white p-4">
                                    <div class="card-body p-0">
                                       
                                        <div class="d-flex justify-content-between align-items-start gap-5">
                                            <div>
                                                <h6>Avaliable Date Time</h6>

                                                <div class="skillstopic mb-2">
                                                    <div class="fw-bold bg-light text-primary">Date:</div>
                                                    <div>10/05/2024</div>

                                                </div>
                                                <div class="skillstopic">
                                                    <div class="fw-bold bg-light text-primary">Time:</div>
                                                    <div>11:30PM</div>
                                                    <div>12:30PM</div>
                                                    <div>05:30AM</div>
                                                </div>

                                            </div>
                                            <div class="bookbtnas">
                                                <Link href="#" class="btn btn-primary rounded" data-bs-toggle="modal"
                                                    data-bs-target="#bookinterview">Edit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="bookinterview" tabindex="-1"
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
                                    <div class="card-instrutors upinterviews shadow bg-white p-4">
                                        <h5>Upcoming Interview</h5>
                                        <div class="row">
                                            <div class="col-md-6 col-lg-6">
                                                <div class="card-body inuplis border rounded">
                                                    <div class="d-flex gap-3">
                                                        <div>
                                                            <img src="../assets/images/profile1.jpg" width="50"
                                                                height="50" class="rounded" alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>Sales Engineer</h5>
                                                            <ul class="list-group list-group-flush nav">
                                                                <li><b>Location:</b>Denver, Co, United State (Us)
                                                                </li>
                                                                <li><b>Student:</b> John Smith</li>
                                                                <li><b>Date:</b> 10/05/2024</li>
                                                                <li><b>Time:</b> 22:30PM</li>
                                                                <li class="text-primary">Interviews</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <div class="card-body inuplis border rounded">
                                                    <div class="d-flex gap-3">
                                                        <div>
                                                            <img src="../assets/images/profile1.jpg" width="50"
                                                                height="50" class="rounded" alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>Sales Engineer</h5>
                                                            <ul class="list-group list-group-flush nav">
                                                                <li><b>Location:</b>Denver, Co, United State (Us)
                                                                </li>
                                                                <li><b>Student:</b> John Smith</li>
                                                                <li><b>Date:</b> 10/05/2024</li>
                                                                <li><b>Time:</b> 22:30PM</li>
                                                                <li class="text-primary">Interviews</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <div class="card-body inuplis border rounded">
                                                    <div class="d-flex gap-3">
                                                        <div>
                                                            <img src="../assets/images/profile1.jpg" width="50"
                                                                height="50" class="rounded" alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>Sales Engineer</h5>
                                                            <ul class="list-group list-group-flush nav">
                                                                <li><b>Location:</b>Denver, Co, United State (Us)
                                                                </li>
                                                                <li><b>Student:</b> John Smith</li>
                                                                <li><b>Date:</b> 10/05/2024</li>
                                                                <li><b>Time:</b> 22:30PM</li>
                                                                <li class="text-primary">Interviews</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <div class="card-body inuplis border rounded">
                                                    <div class="d-flex gap-3">
                                                        <div>
                                                            <img src="../assets/images/profile1.jpg" width="50"
                                                                height="50" class="rounded" alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>Sales Engineer</h5>
                                                            <ul class="list-group list-group-flush nav">
                                                                <li><b>Location:</b>Denver, Co, United State (Us)
                                                                </li>
                                                                <li><b>Student:</b> John Smith</li>
                                                                <li><b>Date:</b> 10/05/2024</li>
                                                                <li><b>Time:</b> 22:30PM</li>
                                                                <li class="text-primary">Interviews</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
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
                                            <span class="live_user newuser">Available</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
                                                </div>
                                                <div>
                                                    <Link href="#" class="default-btn rounded">Interview</Link>
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
                                            <span class="live_user newuser">Available</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
                                                </div>
                                                <div>
                                                    <Link href="#" class="default-btn rounded">Interview</Link>
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
                                            <span class="live_user newuser">Available</span>
                                        </div>

                                        <div class="instructors-details-contents mt-3">
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h3>Kannav </h3>
                                                    <h6 class="sub-title mb-2">Web designer</h6>
                                                </div>
                                                <div>
                                                    <Link href="#" class="default-btn rounded">Interview</Link>
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

export default MyTeam
