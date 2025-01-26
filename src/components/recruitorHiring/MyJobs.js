import React from 'react'
import { Link } from 'react-router-dom';

const MyJobs = () => {
  return (
    <div>
      <div class="bg_nav-slid bg-white">
        <div class="navbar-area ledu-area otherpages-menu">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <Link to="/">
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
                        <Link class="navbar-brand" to="/">
                            <img src="../assets/images/logos/logo-full.png" class="logo-one rounded-pill" alt="Logo"/>

                        </Link>


                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav w-100 ms-5">

                                <li class="nav-item">
                                    <Link to="/recruiterdashboaed" class="nav-link">
                                        Dashboard
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/myteam">My Team</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/recruiterlist">Candidate profile</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link active" to="/myjobs">My Jobs</Link>
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
                                            <img src="../assets/images/profile1.jpg" height="50" width="50"
                                                class="rounded-pill" alt="" />
                                            Freshgrad
                                            <i class="ri-arrow-down-s-line"></i>
                                        </button>
                                        <div class="dropdown-menu profile_dropdown"
                                            aria-labelledby="dropdownMenuButtoncategory">
                                            <Link to="#" class="nav-link-item">

                                                User Account center
                                            </Link>
                                            <Link to="#" class="nav-link-item">

                                                Hiring Dashboard
                                            </Link>
                                            <Link to="#" class="nav-link-item">

                                                Freshgrad Profile/Resume
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
                        <div class="others-options">
                            <div class="navbar-category">
                                <div class="dropdown category-list-dropdown">
                                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/images/profile1.jpg" height="50" width="50"
                                            class="rounded-pill" alt="" />
                                        Freshgrad
                                        <i class="ri-arrow-down-s-line"></i>
                                    </button>
                                    <div class="dropdown-menu profile_dropdown"
                                        aria-labelledby="dropdownMenuButtoncategory">
                                        <Link to="#" class="nav-link-item">

                                            User Account center
                                        </Link>
                                        <Link to="#" class="nav-link-item">
                                            Hiring Dashboard
                                        </Link>
                                        <Link to="#" class="nav-link-item">

                                            Freshgrad Profile/Resume
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

                </div>
            </div>
        </div>
    </div>
    <div class="header_space"></div>
    {/* <!-- notification  --> */}
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Notification list</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0">
            <div class="right boxshhd">
                <div class="box shadow-sm rounded bg-white mb-3">
                    <div class="box-title border-bottom p-3">
                        <h6 class="m-0">Recent</h6>
                    </div>
                    <div class="box-body p-0">
                        <div class="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                    alt="" />
                            </div>
                            <div class="font-weight-bold mr-3">
                                <div class="text-truncate">DAILY RUNDOWN: WEDNESDAY</div>
                                <div class="small">Income tax sops on the cards, The bias in VC funding, and other top
                                    news for you</div>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">3d</div>
                            </span>
                        </div>
                        <div class="p-3 d-flex align-items-center osahan-post-header">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt="" />
                            </div>
                            <div class="font-weight-bold mr-3">
                                <div class="mb-2">We found a job at askbootstrap Ltd that you may be interested in
                                    Vivamus imperdiet venenatis est...</div>
                                <button type="button" class="btn btn-outline-success btn-sm">View Jobs</button>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">4d</div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="box shadow-sm rounded bg-white mb-3">
                    <div class="box-title border-bottom p-3">
                        <h6 class="m-0">Earlier</h6>
                    </div>
                    <div class="box-body p-0">
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div
                                class="dropdown-list-image mr-3 d-flex align-items-center bg-danger justify-content-center rounded-circle text-white">
                                DRM</div>
                            <div class="font-weight-bold mr-3">
                                <div class="text-truncate">DAILY RUNDOWN: MONDAY</div>
                                <div class="small">Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.
                                </div>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" style="">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">3d</div>
                            </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div class="dropdown-list-image mr-3"><img class="rounded-circle"
                                    src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                            <div class="font-weight-bold mr-3">
                                <div class="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                                <div class="small">Pellentesque semper ex diam, at tristique ipsum varius sed.
                                    Pellentesque non metus ullamcorper</div>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">3d</div>
                            </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                    alt="" />
                            </div>
                            <div class="font-weight-bold mr-3">
                                <div class="mb-2"><span class="font-weight-normal">Congratulate Gurdeep Singh Osahan
                                        (iamgurdeeposahan)</span> for 5 years at Askbootsrap Pvt.</div>
                                <button type="button" class="btn btn-outline-success btn-sm">Say congrats</button>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">4d</div>
                            </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                    alt="" />
                            </div>
                            <div class="font-weight-bold mr-3">
                                <div>
                                    <span class="font-weight-normal">Congratulate Mnadeep singh
                                        (iamgurdeeposahan)</span> for 4 years at Askbootsrap Pvt.
                                    <div class="small text-success"><i class="fa fa-check-circle"></i> You sent Mandeep
                                        a message</div>
                                </div>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">4d</div>
                            </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div
                                class="dropdown-list-image mr-3 d-flex align-items-center bg-success justify-content-center rounded-circle text-white">
                                M</div>
                            <div class="font-weight-bold mr-3">
                                <div class="text-truncate">DAILY RUNDOWN: MONDAY</div>
                                <div class="small">Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.
                                </div>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">3d</div>
                            </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div class="dropdown-list-image mr-3"><img class="rounded-circle"
                                    src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                            <div class="font-weight-bold mr-3">
                                <div class="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                                <div class="small">Pellentesque semper ex diam, at tristique ipsum varius sed.
                                    Pellentesque non metus ullamcorper</div>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">3d</div>
                            </span>
                        </div>
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt="" />
                            </div>
                            <div class="font-weight-bold mr-3">
                                <div class="mb-2"><span class="font-weight-normal">Congratulate Gurdeep Singh Osahan
                                        (iamgurdeeposahan)</span> for 5 years at Askbootsrap Pvt.</div>
                                <button type="button" class="btn btn-outline-success btn-sm">Say congrats</button>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">4d</div>
                            </span>
                        </div>
                        <div class="p-3 d-flex align-items-center osahan-post-header">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                    alt="" />
                            </div>
                            <div class="font-weight-bold mr-3">
                                <div>
                                    <span class="font-weight-normal">Congratulate Mnadeep singh
                                        (iamgurdeeposahan)</span> for 4 years at Askbootsrap Pvt.
                                    <div class="small text-success"><i class="fa fa-check-circle"></i> You sent Mandeep
                                        a message</div>
                                </div>
                            </div>
                            <span class="ml-auto mb-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i>
                                            Delete</button>
                                        <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn
                                            Off</button>
                                    </div>
                                </div>
                                <br />
                                <div class="text-right text-muted pt-1">4d</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- notification list --> */}

    <div class="recruiter_list pb-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <form>
                        <div class="searchlocation searchjobpost">
                            <div class="iconfield">
                                <div class="icon_search">
                                    <img src="../assets/images/icon/search-icon.svg" alt=""/>
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
                                    <img src="../assets/images/icon/email.svg" alt=""/>
                                </div>
                                <div class="input-field">
                                    <input type="email" placeholder="Email id" class="form-control" required=""/>
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


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="stepbgss">

                                <div class="client_filter-job pt-1 pb-0">
                                    <div class="stepsForm">
                                        <form method="post" class="mt-0" id="msform">
                                            <div class="flexdr position-relative">
                                                <div class="sf-steps-form sf-radius">
                                                    <ul class="sf-content m-0">
                                                        <div class="find-com-box p-0">
                                                          
                                                            <div class="professional-sp row">
                                                                <div class="col-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Upload
                                                                            Logo</label>
                                                                        <section class="bg-diffrent">
                                                                            <div class="file-upload-contain">
                                                                                <input id="multiplefileupload"
                                                                                    type="file" hidden
                                                                                    accept=".jpg,.gif,.png" />
                                                                            </div>
                                                                        </section>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Job Title
                                                                            *</label>
                                                                        <input type="text" name="uname"
                                                                            placeholder="Title"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Job
                                                                            Location</label>
                                                                        <input type="text" name="uname"
                                                                            placeholder="Location"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Enter
                                                                            Your Organisation *</label>
                                                                        <input type="text" name="uname"
                                                                            placeholder="Your Organisation"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Website
                                                                            URL </label>
                                                                        <p class="small">The URL can be your
                                                                            organization's website or an
                                                                            opportunity-related
                                                                            URL.</p>
                                                                        <input type="text" name="uname" placeholder=""
                                                                            value="https://"/>
                                                                    </div>
                                                                </div>

                                                                <div class="col-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Skills to
                                                                            be Accessed </label>
                                                                        <p class="small">List required
                                                                            skills to attract participants
                                                                            with matching abilities or
                                                                            engage eager individuals seeking
                                                                            to improve these skills.</p>
                                                                        <input type="text" id="newTag" />
                                                                        <ul id="tagList">
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="form-group">

                                                                        <select>
                                                                            <option>Select Expertise
                                                                            </option>
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
                                                                                <label class="fieldlabels">Application
                                                                                    Start date</label>
                                                                                <input type="date" name="name"
                                                                                    placeholder="start date"/>
                                                                            </div>
                                                                            <div class="w-100">
                                                                                <label class="fieldlabels">End
                                                                                    date</label>
                                                                                <input type="date" name="name"
                                                                                    placeholder="end date"/>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Employment
                                                                            type</label>
                                                                        <select class="form-controls">
                                                                            <option>Select</option>
                                                                            <option selected="">Full time
                                                                            </option>
                                                                            <option>Part-time</option>
                                                                            <option>Freelance</option>
                                                                            <option>Trainee </option>
                                                                        </select>
                                                                    </div>
                                                                </div>



                                                                <div class="col-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Salary
                                                                            Range/Year</label>
                                                                        <div class="d-flex gap-2">
                                                                            <div>
                                                                                <select style="width: 100px;">
                                                                                    <option>INR</option>
                                                                                    <option>USA</option>
                                                                                </select>
                                                                            </div>
                                                                            <input type="number"
                                                                                placeholder="Crunt Enter salary"
                                                                                class="form-control" name="" value=""/>
                                                                            <input type="number"
                                                                                placeholder="Expertise salary"
                                                                                class="form-control" name="" value=""/>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-12 col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="fieldlabels">Job
                                                                            Description *</label>
                                                                        <textarea id="text_area" maxlength="1500"
                                                                            name="message" class="form-control mb-0"
                                                                            cols="30" rows="7" required
                                                                            data-error="Write your message"
                                                                            placeholder="" style="height: 100px;">This field helps you to mention the details of the opportunity you are listing. It is better to include Rules, Eligibility, Process, Format, etc., in order to get the opportunity approved. The more details, the better!
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

                                                    <button id="sf-prev" type="button"
                                                        class="btn btn-light">Previous</button>
                                                    <span id="sf-msg" class="sf-msg-error"></span>
                                                    <button id="sf-next" type="button"
                                                        class="btn default-btn">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
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
                                            <img src="../assets/images/company-building.png" class="img-fluid rounded"
                                                alt="Instructor"/>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="comnam">
                                                <h3>Python Developer </h3>
                                                <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
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
                                            <img src="../assets/images/company-building.png" class="img-fluid rounded"
                                                alt="Instructor"/>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="comnam">
                                                <h3>Python Developer </h3>
                                                <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
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
                                            <img src="../assets/images/company-building.png" class="img-fluid rounded"
                                                alt="Instructor"/>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="comnam">
                                                <h3>Python Developer </h3>
                                                <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
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
                                            <img src="../assets/images/company-building.png" class="img-fluid rounded"
                                                alt="Instructor"/>
                                        </div>
                                        <div class="instructors-details-contents">
                                            <div class="comnam">
                                                <h3>Python Developer </h3>
                                                <h6 class="sub-title">V2stech Solutions pvt. Ltd.</h6>
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
                                            <img src="../assets/images/company-building.png" class="" alt="Instructor"/>

                                        </div>

                                        <div class="instructors-details-contents">
                                            <h3>Python Developer</h3>
                                            <p><Link to="#"><i class="ri-community-line"></i> V2stech Solutions pvt.
                                                    Ltd.</Link></p>
                                            <p><i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div class="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-exchange-dollar-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold">10 - 2000 USD/Hour </p>

                                            </div>
                                        </div>

                                        <div class="d-flex gap-2 align-items-center">
                                            <div class="bg-light p-2"><i class="ri-briefcase-4-line"></i></div>
                                            <div>
                                                <p class="small m-0 fw-bold"><span class="fw-normal">Job Type:</span>
                                                    Full Time </p>
                                            </div>
                                        </div>
                                        <div class="align-items-center">
                                            <Link data-bs-toggle="modal" data-bs-target="#exampleModal" class="default-btn py-2 rounded"><i
                                                    class="ri-pencil-line editbtss"></i> Edit</Link>
                                            <Link to="#" class="default-btn bg-danger py-2 rounded"><i
                                                    class="ri-delete-bin-line editbtss"></i>Post Delete</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- <div class="instructors-details-contents mt-3">
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
                            </div> --> */}
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100"
                                class="scrollspy-example" tabindex="0">
                                <div id="scrollspyHeading1" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Details</h5>
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
                                            <img src="../assets/images/company-building.png" class="" alt="Instructor"/>

                                        </div>

                                        <div class="instructors-details-contents">
                                            <h3>Python Developer</h3>
                                            <p><Link to="#"><i class="ri-community-line"></i> V2stech Solutions pvt.
                                                    Ltd.</Link></p>
                                            <p><i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div class="footerapplly border-top d-flex justify-content-between mt-3 pt-2">

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
                                        <div class="align-items-center">
                                            <Link to="job-post.html" class="default-btn py-2 rounded"><i
                                                    class="ri-pencil-line editbtss"></i> Edit</Link>
                                            <Link to="#" class="default-btn bg-danger py-2 rounded"><i
                                                    class="ri-delete-bin-line editbtss"></i>Post Delete</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100"
                                class="scrollspy-example" tabindex="0">
                                <div id="scrollspyHeading1" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Details</h5>
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
                                <div id="scrollspyHeading2" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>What are the important dates & deadlines?</h5>
                                        <div class="d-flex gap-3">
                                            <div class="bg-light p-2"><i class="h4 m-0 ri-calendar-2-line"></i>
                                            </div>
                                            <div>
                                                <p class="small m-0">Application Deadline</p>
                                                <span class="small text-muted">31 Dec 24, 11:59 PM IST</span>
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

                                    <div class="mentersvies0121 recruiter101s">
                                        <div class="position-relative companylogo01">
                                            <img src="../assets/images/company-building.png" class="" alt="Instructor"/>

                                        </div>

                                        <div class="instructors-details-contents">
                                            <h3>Python Developer</h3>
                                            <p><Link to="#"><i class="ri-community-line"></i> V2stech Solutions pvt.
                                                    Ltd.</Link></p>
                                            <p><i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div class="footerapplly border-top d-flex justify-content-between mt-3 pt-2">

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
                                        <div class="align-items-center">
                                            <Link to="job-post.html" class="default-btn py-2 rounded"><i
                                                    class="ri-pencil-line editbtss"></i> Edit</Link>
                                            <Link to="#" class="default-btn bg-danger py-2 rounded"><i
                                                    class="ri-delete-bin-line editbtss"></i>Post Delete</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100"
                                class="scrollspy-example" tabindex="0">
                                <div id="scrollspyHeading1" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Details</h5>
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
                                <div id="scrollspyHeading2" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>What are the important dates & deadlines?</h5>
                                        <div class="d-flex gap-3">
                                            <div class="bg-light p-2"><i class="h4 m-0 ri-calendar-2-line"></i>
                                            </div>
                                            <div>
                                                <p class="small m-0">Application Deadline</p>
                                                <span class="small text-muted">31 Dec 24, 11:59 PM IST</span>
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

                                    <div class="mentersvies0121 recruiter101s">
                                        <div class="position-relative companylogo01">
                                            <img src="../assets/images/company-building.png" class="" alt="Instructor"/>

                                        </div>

                                        <div class="instructors-details-contents">
                                            <h3>Python Developer</h3>
                                            <p><Link to="#"><i class="ri-community-line"></i> V2stech Solutions pvt.
                                                    Ltd.</Link></p>
                                            <p><i class="ri-map-pin-fill"></i> Thane, Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                    <div class="footerapplly border-top d-flex justify-content-between mt-3 pt-2">

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
                                        <div class="align-items-center">
                                            <Link to="job-post.html" class="default-btn py-2 rounded"><i
                                                    class="ri-pencil-line editbtss"></i> Edit</Link>
                                            <Link to="#" class="default-btn bg-danger py-2 rounded"><i
                                                    class="ri-delete-bin-line editbtss"></i>Post Delete</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100"
                                class="scrollspy-example" tabindex="0">
                                <div id="scrollspyHeading1" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>Details</h5>
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
                                <div id="scrollspyHeading2" class="instructors-details-contents mt-3">
                                    <div class="card-instrutors shadow bg-white p-4">
                                        <h5>What are the important dates & deadlines?</h5>
                                        <div class="d-flex gap-3">
                                            <div class="bg-light p-2"><i class="h4 m-0 ri-calendar-2-line"></i>
                                            </div>
                                            <div>
                                                <p class="small m-0">Application Deadline</p>
                                                <span class="small text-muted">31 Dec 24, 11:59 PM IST</span>
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

export default MyJobs
