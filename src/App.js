// import './assets/css'


import '../src/assets/css/aos.css';
import './assets/css/bootstrap.min.css';
import './assets/css/graph.css';
import './assets/css/iconplugins.css';
import './assets/css/jquery-steps.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/meanmenu.min.css';
import './assets/css/mobiscroll.jquery.min.css';
import './assets/css/niceCountryInput.css';
import './assets/css/odometer.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/plugins.css';
import './assets/css/responsive.css';
import './assets/css/style.css';
import Aos from 'aos'
import 'aos/dist/aos'
import Routes from './components/common/Routes/MyRoutes'
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true,
      easing:'ease'
    })
  }, [])
  return (
    <div>
      
      <div>
        <Routes/>
        
      </div>
    </div>
  );
}

export default App;
