import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const Dashboard = () => {
  return (
    <div>
       <div class="bg_nav-slid bg-white">
        <div class="navbar-area ledu-area otherpages-menu">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <Link to="/">
                                <img src="assets/images/logos/logo-full.png" height="50" class="logo-one rounded-pill"
                                    alt="logo"/>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="desktop-nav nav-area">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light p-0">
                        <Link class="navbar-brand" to="/">
                            <img src="assets/images/logos/logo-full.png" class="logo-one rounded-pill" alt="Logo"/>
                        </Link>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav w-100 ms-5">

                                <li class="nav-item">
                                    <Link to="/dashboard" class="nav-link active">
                                        Dashboard
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/studentresume">Resume</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/studenttrainingprogram">Training Program</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to="#">Coaching Center</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/studentjobs">Jobs</Link>
                                </li>
                            </ul>

                            <div class="others-options gap-2 d-flex align-items-center">
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
    <div class="enrolled-area-two py-5 pt-3 bg-light">
        <div class="container">
            <div class="row">
                <div class="Dashboard1 col-md-12">
                    <h3>Dashboard</h3>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="mb-3">
                        <div class="card btn-gradient-121 widget-flat">
                            <div class="bg-layerbg"><img src="assets/images/circle.svg" alt="" /></div>
                            <div class="card-body">
                                <div class="float-end">
                                    <i class="mdi ri-profile-line widget-icon"></i>
                                </div>
                                <h5 class="text-muted fw-normal mt-0" title="Number of Customers">Training Program</h5>
                                <h3 class="mt-2 mb-0">36,254</h3>

                            </div> 
                            <p class="px-3 py-2 mb-0 text-muted border-top">
                                <span class="text-success me-2"><i class="ri-upload-cloud-line"></i> 5.27%</span>
                                <span class="text-nowrap">Since last month</span>
                            </p>
                        </div> 
                    </div>
                    <div class="mb-3">
                        <div class="card widget-flat btn-gradient-success">
                            <div class="bg-layerbg"><img src="assets/images/circle.svg" alt="" /></div>
                            <div class="card-body">
                                <div class="float-end">
                                    <i class="mdi widget-icon bg-success-lighten ri-eye-line"></i>
                                </div>
                                <h5 class="text-muted fw-normal mt-0" title="Number of Orders">Apply Jobs</h5>
                                <h3 class="mt-2 mb-0">5,543</h3>

                            </div>
                            <p class="px-3 py-2 mb-0 text-muted border-top">
                                <span class="text-success me-2"><i class="ri-upload-cloud-line"></i> 5.27%</span>
                                <span class="text-nowrap">Since last month</span>
                            </p>
                        </div> 
                    </div>

                    <div class="mb-3">
                        <div class="card widget-flat btn-gradient-danger">
                            <div class="bg-layerbg"><img src="assets/images/circle.svg" alt="" /></div>
                            <div class="card-body">
                                <div class="float-end">
                                    <i class="mdi widget-icon bg-success-lighten ri-eye-line"></i>
                                </div>
                                <h5 class="text-muted fw-normal mt-0" title="Average Revenue">View Courses</h5>
                                <h3 class="mt-2 mb-0">6,254</h3>

                            </div> 
                            <p class="px-3 py-2 mb-0 text-muted border-top">
                                <span class="text-success me-2"><i class="ri-upload-cloud-line"></i> 5.27%</span>
                                <span class="text-nowrap">Since last month</span>
                            </p>
                        </div> 
                    </div>

                    <div class="mb-3">
                        <div class="card widget-flat btn-gradient-info">
                            <div class="bg-layerbg"><img src="assets/images/circle.svg" alt="" /></div>
                            <div class="card-body">
                                <div class="float-end">
                                    <i class="mdi widget-icon ri-user-line"></i>
                                </div>
                                <h5 class="text-muted fw-normal mt-0" title="Growth">70% Profile Complete</h5>
                                <h3 class="mt-2 mb-0">78548</h3>
                            </div> 
                            <p class="px-3 py-2 mb-0 text-muted border-top">
                                <span class="text-success me-2"><i class="ri-upload-cloud-line"></i> 5.27%</span>
                                <span class="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div> 
                </div>

                <div class="col-md-9 mb-3">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="card widget-flat">
                                <h4 class="graphtitles">Training Program</h4>
                                <div class="charthhe" id="chartContainer" style="height: 240px; width: 100%;"></div>
                            </div> 
                        </div>  
                        <div class="col-md-6 mb-3">
                            <div class="card widget-flat">
                                <h4 class="graphtitles">Jobs Apply</h4>
                                <div class="charthhe" id="chartContainer2" style="height: 240px; width: 100%;"></div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card widget-flat">
                                <h4 class="graphtitles">View Courses</h4>
                                <div class="charthhe" id="chartContainer3" style="height: 240px; width: 100%;"></div>
                            </div> 
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card widget-flat">
                                <h4 class="graphtitles">70% Profile Complete</h4>
                                <div class="charthhe" id="chartContainer4" style="height: 240px; width: 100%;"></div>
                            </div> 
                        </div>
                    </div>
                {/* </div> <!-- end col--> */}
                {/* <!-- <div class="col-md-4">
                    <div class="card widget-flat">
                        <div id="chartContainer5" style="height: 270px; width: 100%;"></div>
                    </div> 
                </div>
                <div class="col-md-4">
                    <div class="card widget-flat">
                        <div id="chartContainer6" style="height: 290px; width: 100%;"></div>
                    </div>
                </div> --> */}


            {/* </div> <!-- end row --> */}
        </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Dashboard
