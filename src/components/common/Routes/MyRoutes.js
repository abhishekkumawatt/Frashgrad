import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../../recruitorHiring/Index'
import TrainingProgram from '../../recruitorHiring/TrainingProgram'
import CoursesDetails from '../../recruitorHiring/CoursesDetails'
import MyCourses from '../../recruitorHiring/MyCourses'
import TrainerMentors from '../../recruitorHiring/TrainerMentors'
import RecruiterHiringManager from '../../recruitorHiring/RecruiterHiringManager'
import ContactUs from '../../recruitorHiring/ContactUs'
import Jobs from '../../recruitorHiring/Jobs'
import StudentJobs from '../../recruitorHiring/StudentJobs'
import SignIn from '../../recruitorHiring/SignIn'
import SignUp from '../../recruitorHiring/SignUp'
import Recruiter from '../../recruitorHiring/Recruiter'
import Mentor from '../../recruitorHiring/Mentor'
import Resume from '../../recruitorHiring/Resume'
import Profile from '../../recruitorHiring/Profile'
import ProfileForgotPassword from '../../recruitorHiring/ProfileForgotPassword'
import MyCoursesDetails from '../../recruitorHiring/MyCoursesDetails'
import EditProfile from '../../recruitorHiring/EditProfile'
import TrainerDetails from '../../recruitorHiring/TrainerDetails'
import StudentResume from '../../recruitorHiring/StudentResume'
import StudentStep1 from '../../recruitorHiring/StudentStep1'
import MentorStep from '../../mentor-trainer/MentorStep'
import RecruiterList from '../../recruitorHiring/RecruiterList'
import AllProfile from '../../recruitorHiring/AllProfile'
import RecruiterInterviewing from '../../recruitorHiring/RecruiterInterviweing'
import NewProfile from '../../recruitorHiring/NewProfile'
import Otp from '../../recruitorHiring/Otp'
import ForgotPassword from '../../recruitorHiring/ForgotPassword'
import ForgotOTP from '../../recruitorHiring/ForgotOTP'
import NewPassword from '../../recruitorHiring/NewPassword'
import RecruiterDashboard from '../../recruitorHiring/RecruiterDashboard'
import MyTeam from '../../recruitorHiring/MyTeam'
import MyJobs from '../../recruitorHiring/MyJobs'
import InterviewGuide from '../../recruitorHiring/InterviewGuide'
import JobPost from '../../recruitorHiring/JobPost'


const MyRoutes = () => {
  return (
    <div>
      <Routes>
       
        <Route path='/' element={<Index/>} />
        <Route path='/trainingprogram' element={<TrainingProgram/>} />
        <Route path='/coursesdetails' element={<CoursesDetails/>} />
        <Route path='/mycourses' element={<MyCourses/>}></Route>
        <Route path='/trainermentors' element={<TrainerMentors/>} />
        <Route path='/recruiterhiringmanager' element={<RecruiterHiringManager/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/studentjobs' element={<StudentJobs/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/recruiter' element={<Recruiter/>} />
        <Route path='/mentor' element={<Mentor/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profileforgotpassword' element={<ProfileForgotPassword/>} />
        <Route path='/mycoursesdetails' element={<MyCoursesDetails/>} />
        <Route path='/editprofile' element={<EditProfile/>} />
        <Route path='/trainerdetails' element={<TrainerDetails/>} />
        <Route path='/studentresume' element={<StudentResume/>} />
        <Route path='/studentstep1' element={<StudentStep1/>} />
        <Route path='/mentorstep' element={<MentorStep/>} />
        <Route path='/recruiterlist' element={<RecruiterList/>} />
        <Route path='/allprofile' element={<AllProfile/>} />
        <Route path='/recruiterinterviewing' element={<RecruiterInterviewing/>} />
        <Route path='/newprofile' element={<NewProfile/>} />
        <Route path='/otp' element={<Otp/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/forgotOTP' element={<ForgotOTP/>} />
        <Route path='/newpassword' element={<NewPassword/>} />
        <Route path='/recruiterdashboard' element={<RecruiterDashboard/>} />
        <Route path='/myteam' element={<MyTeam/>} />
        <Route path='/myjobs' element={<MyJobs/>} />
        <Route path='/interviewguide' element={<InterviewGuide/>} />
        <Route path='/jobpost' element={<JobPost/>} />
        
        </Routes>
    </div>
  )
}

export default MyRoutes
