// import logo from './logo.svg';
import './App.css';
import SignInSide from './components/SignInSide';
import Dashboard from './components/Dashboard'
import {Routes, Route, Router} from 'react-router-dom';
import DepartmentalResearch from './components/DepartmentalResearch/DepartmentalResearch';
import Downloadable from './components/Downloadable';
// import UserAndGroups from './components/Settings/UserAndGroup';
import UserManagement from './components/Settings/UserManagement';
import ResearchPublication from './components/researchPublication/ResearchPublication';

function App() {
  

  return (
    <>
    <div className='app'>
    <Routes>
      <Route path="/" element={<SignInSide/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/departmental-research-data-publications-of-faculty" element={<DepartmentalResearch/>} />
      <Route path="/downloadable" element={<Downloadable/>}/>
      <Route path="/usermanagement" element={<UserManagement/>}/>
      <Route path="/researchpublication" element={<ResearchPublication/>}/>
    </Routes>
      {/* <SignInSide/> */}
      {/* <Dashboard/> */}
    </div>
    </>
  );
}

export default App;
