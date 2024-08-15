// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import SignInSide from './components/SignInSide';
import ViewAllPublications from './components/ViewAllPublications/ViewAllPublications';
import {Routes, Route, Router} from 'react-router-dom';
import DepartmentalResearch from './components/DepartmentalResearch/DepartmentalResearch';
import Downloadable from './components/Downloadable';
import ResearchPublication from './components/researchPublication/ResearchPublication';
import Dashboard from './components/Dashboard/Dashboard';
import UserManagement from './components/Usermanagement/Usermanagement';


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
      <Route path='/viewallpublications' element={<ViewAllPublications/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
