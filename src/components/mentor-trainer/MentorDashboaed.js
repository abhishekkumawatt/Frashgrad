import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const MentorDashboaed = () => {
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
    <div class="enrolled-area-two py-5 pt-3 bg-light">
        <div class="container">
            <div class="row">
                
                <div class="Dashboard1 col-md-12">
                    <h3>Dashboard</h3>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card btn-gradient-success widget-flat">
                        <div class="card-body">
                            <div class="float-end">
                                <i class="mdi widget-icon flaticon-student"></i>
                            </div>
                            <h5 class="text-muted fw-normal mt-0" title="Number of Customers">Number of Students</h5>
                            <h3 class="mt-2 mb-0">36,254</h3>

                        </div> 
                        <p class="px-3 py-2 mb-0 text-muted border-top">
                            <span class="text-success me-2"><i class="ri-upload-cloud-line"></i> 5.27%</span>
                            <span class="text-nowrap">Since last month</span>
                        </p>
                    </div>
                </div>
                
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card btn-gradient-121 widget-flat">
                        <div class="card-body">
                            <div class="float-end">
                                <i class="mdi widget-icon ri-secure-payment-line"></i>
                                
                            </div>
                            <h5 class="text-muted fw-normal mt-0" title="Number of Orders">Student Purchase Services</h5>
                            <h3 class="mt-2 mb-0">5,543</h3>

                        </div> 
                        <p class="px-3 py-2 mb-0 text-muted border-top">
                            <span class="text-success me-2"><i class="ri-upload-cloud-line"></i> 5.27%</span>
                            <span class="text-nowrap">Since last month</span>
                        </p>
                    </div> 
                </div> 

                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card widget-flat btn-gradient-danger">
                        <div class="card-body">
                            <div class="float-end">
                                <i class="mdi widget-icon ri-money-dollar-circle-line"></i>
                            </div>
                            <h5 class="text-muted fw-normal mt-0" title="Average Revenue">Total Amount</h5>
                            <h3 class="mt-2 mb-0">$ 6,254</h3>

                        </div> 
                        <p class="px-3 py-2 mb-0 text-muted border-top">
                            <span class="text-success me-2"><i class="ri-upload-cloud-line"></i> 5.27%</span>
                            <span class="text-nowrap">Since last month</span>
                        </p>
                    </div> 
                </div> 

                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card widget-flat btn-gradient-info">
                        <div class="card-body">
                            <div class="float-end">
                                <i class="mdi widget-icon ri-feedback-line"></i>
                            </div>
                            <h5 class="text-muted fw-normal mt-0" title="Growth">Feedback Student</h5>
                            <h3 class="mt-2 mb-0">78548</h3>

                        </div>
                        <p class="px-3 py-2 mb-0 text-muted border-top">
                            <span class="text-success me-2"><i class="ri-upload-cloud-line"></i> 5.27%</span>
                            <span class="text-nowrap">Since last month</span>
                        </p>
                    </div> 
                </div>

                
            </div> 
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default MentorDashboaed
