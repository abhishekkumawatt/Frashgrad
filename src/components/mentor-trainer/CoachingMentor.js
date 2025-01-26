import React from 'react'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const CoachingMentor = () => {
  return (
    <div>
        <Header/>
        <br/><br/><br/>
    <div className="enrolled-area-two py-5 pt-3 bg-light">
        <div className="container">

            <div className="row">
                <div className="col-md-8 my-auto">
                    <div className="Dashboard1">
                        <h3 className="m-0">Coaching</h3>
                    </div>
                </div>

                <div className="col-12 mb-3 mt-3">
                    <div className="card shadow widget-flat">
                        <div className="card-body">
                            <div className="d-flex gap-3 mb-3 justify-content-between">
                                <div className="d-flex gap-2 align-items-center">
                                    <label>Show</label>
                                    <select className="form-select">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </div>
                                <div className="form-group d-flex align-items-center gap-3">
                                    <label>Search</label>
                                    <input type="text" placeholder="Search" className="form-control" required=""/>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-centered coachingtable table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="border-0">No.</th>
                                            <th className="border-0">Status</th>
                                            <th className="border-0">Date<small>(MM/DD/YY)</small></th>
                                            <th className="border-0">Meeting Time</th>
                                            <th className="border-0">Request </th>
                                            <th className="border-0">First Name</th>
                                            <th className="border-0">Email ID</th>
                                            <th className="border-0">Phone Number</th>
                                            <th className="border-0">Resume <small>(Resume PDF)</small></th>
                                            <th className="border-0">Feedback</th>
                                            <th className="border-0">Meeting Duration <small>(Minutes)</small></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                (Done/Meeting Scheduled/Need to schedule/Reschedule)
                                            </td>
                                            <td>
                                                18/04/2024
                                            </td>

                                            <td>
                                                20 February 2023
                                                <small>04:30pm</small>
                                            </td>
                                            <td>
                                                Interview Practice
                                            </td>
                                            <td>
                                                Omprakash
                                            </td>
                                            <td>
                                                op@gmail.com
                                            </td>
                                            <td>
                                                +1 7895645789
                                            </td>
                                            <td>
                                                <a href="#">omprakash_kumawat_resume.pdf</a>
                                            </td>
                                            <td>
                                                Lorem Ipsum is simply dummy text
                                            </td>
                                            <td>
                                                1 Hour
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                (Done/Meeting Scheduled/Need to schedule/Reschedule)
                                            </td>
                                            <td>
                                                18/04/2024
                                            </td>

                                            <td>
                                                20 February 2023
                                                <small>04:30pm</small>
                                            </td>
                                            <td>
                                                Interview Practice
                                            </td>
                                            <td>
                                                Omprakash
                                            </td>
                                            <td>
                                                op@gmail.com
                                            </td>
                                            <td>
                                                +1 7895645789
                                            </td>
                                            <td>
                                                <a href="#">omprakash_kumawat_resume.pdf</a>
                                            </td>
                                            <td>
                                                Lorem Ipsum is simply dummy text
                                            </td>
                                            <td>
                                                1 Hour
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                (Done/Meeting Scheduled/Need to schedule/Reschedule)
                                            </td>
                                            <td>
                                                18/04/2024
                                            </td>

                                            <td>
                                                20 February 2023
                                                <small>04:30pm</small>
                                            </td>
                                            <td>
                                                Interview Practice
                                            </td>
                                            <td>
                                                Omprakash
                                            </td>
                                            <td>
                                                op@gmail.com
                                            </td>
                                            <td>
                                                +1 7895645789
                                            </td>
                                            <td>
                                                <a href="#">omprakash_kumawat_resume.pdf</a>
                                            </td>
                                            <td>
                                                Lorem Ipsum is simply dummy text
                                            </td>
                                            <td>
                                                1 Hour
                                            </td>
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

export default CoachingMentor
