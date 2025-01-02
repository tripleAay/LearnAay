import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Course from './components/Course';
import Qualities from './components/Qualities';
import Footer from './components/Footer';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import Dashboard from './pages/Dashboard';
import DashboardHeader from './components/DashboardHeader'


function App() {
  return (
    <Router>
      <MainApp />
    </Router>

  );
};

function MainApp() {
  const location = useLocation();
  const isSigninPage = location.pathname === './signin';
  const isSignupPage = location.pathname === './signup';
  const isDashboard = location.pathname === './dashboard';
  
  return (
    <div>
      
      
      <Routes>
        <Route path='/' element={<>
          <Header/>
          <HeroSection />
          <Course />
          <Qualities />
          
          <Footer />
          
        </>} />


        <Route path='/signup' element={<>
          <Header/>
          <SignupPage />
        </>} />
        <Route path='/signin' element={
           <>
           <Header/>
           <SigninPage/>
           </>} />

        <Route path='/dashboard' element={
         <>
          <DashboardHeader/>
          <Dashboard/>
         </>
        }/>
      </Routes>

    </div>
  );
}



export default App;
