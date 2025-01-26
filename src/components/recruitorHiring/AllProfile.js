import React from 'react'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'
import { Link } from 'react-router-dom';

const AllProfile = () => {
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
                            <Link class="nav-link" to="/recruiterlist">Hired</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/allprofile">All</Link>
                        </li>

                    </ul>
                    <div class="card">
                        <div class="card-body shadow">
                            <div class="d-flex justify-content-between">
                            <div class="d-flex gap-2 align-items-center">
                                <label>Show</label>
                                <select class="form-select">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                            <div class="form-group d-flex align-items-center gap-3">
                                <label>Search</label>
                                <input type="text" placeholder="Search" class="form-control" required=""/>
                            </div>
</div>
                            <div class="table-responsive">
                                <table class="table table-striped reusme-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Sr.</th>
                                            <th>Status</th>
                                            <th>Job Title</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Rusume</th>
                                            <th>Email ID</th>
                                            <th>Phone Number</th>
                                            <th>Training Program</th>
                                            <th>Degree</th>
                                            <th>University Name</th>
                                            <th>Graduation Date:</th>
                                            <th>Location</th>
                                            <th>Work Authorization</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01.</td>
                                            <td><span class="badge badge-gradient-success">Hired</span>
                                            </td>
                                            <td>Cybersecurity engineer</td>
                                            <td>Ravi</td>
                                            <td>Sharma</td>
                                            <td><Link to="#">ravi_Sharama_resume.pdf</Link></td>
                                            <td><Link to="#"><u>ravi@gmail.com</u></Link></td>
                                            <td>+1 789456789</td>
                                            <td>Networking</td>
                                            <td>PHD</td>
                                            <td>University</td>
                                            <td>16/12/2024</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                            <td>US Citizen</td>
                                        </tr>
                                        <tr>
                                            <td>02.</td>
                                            <td><span class="badge badge-gradient-danger">Rejected</span>
                                            </td>
                                            <td>Cybersecurity engineer</td>
                                            <td>Ravi</td>
                                            <td>Sharma</td>
                                            <td><Link to="#">ravi_Sharama_resume.pdf</Link></td>
                                            <td><Link to="#"><u>ravi@gmail.com</u></Link></td>
                                            <td>+1 789456789</td>
                                            <td>Networking</td>
                                            <td>PHD</td>
                                            <td>University</td>
                                            <td>16/12/2024</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                            <td>US Citizen</td>
                                        </tr>
                                        <tr>
                                            <td>03.</td>
                                            <td><span class="badge badge-gradient-warning">Interview</span>
                                            </td>
                                            <td>Cybersecurity engineer</td>
                                            <td>Ravi</td>
                                            <td>Sharma</td>
                                            <td><Link to="#">ravi_Sharama_resume.pdf</Link></td>
                                            <td><Link to="#"><u>ravi@gmail.com</u></Link></td>
                                            <td>+1 789456789</td>
                                            <td>Networking</td>
                                            <td>PHD</td>
                                            <td>University</td>
                                            <td>16/12/2024</td>
                                            <td>Lorem Ipsum is simply dummy text</td>
                                            <td>US Citizen</td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default AllProfile
