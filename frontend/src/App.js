/* eslint-disable react/jsx-pascal-case */
// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import SignInSide from './components/SignInSide';
import ViewAllPublications from './components/ViewAllPublications/ViewAllPublications';
import {Routes, Route, Router} from 'react-router-dom';
import DepartmentalResearch from './components/DepartmentalResearch/DepartmentalResearch';
// import Downloadable from './components/Downloadable';
import ResearchPublication from './components/researchPublication/ResearchPublication';
import Dashboard from './components/Dashboard/Dashboard';
import UserManagement from './components/Usermanagement/Usermanagement';
import ResearchPortfolio from './components/ResearchPortfolio/ResearchPortfolio';
import PersonalInfo2 from './components/PersonalInfo2/PersonalInfo2';
import HonorAndAwards from './components/HonorAndAwards/HonorAndAwards';
import Edit_HonorAndAward from './components/Edit_HonorAndAwards/Edit_HonorAndAward';
import Membership from './components/Membership/Membership';
import Add_membership from './components/Membership/Add_Membership/Add_membership';
import ResearchGrants from './components/Research_Grants/ResearchGrants';
import Add_ResearchGrants from './components/Research_Grants/Add_ResearchGrants/Add_ResearchGrants';
import Downloadable from './components/Downloadable/Downloadable';
import ViewIntellectualProperty from './components/IntellectualProperty/ViewIntellectualProperty';
import AddIntellectualProperty from './components/AddIntellectualProperty/AddIntellectualProperty';
import ViewORICFundedProjects from './components/ProjectSubmission/ORICFundedProjects/ViewORICFundedProjects';
import AddORICFundedProjects from './components/ProjectSubmission/ORICFundedProjects/AddORICFundedProjects';
import ViewGrants from './components/ProjectSubmission/International_NationalGrants/ViewGrants';
import AddGrants from './components/ProjectSubmission/International_NationalGrants/AddGrants';
import ORICFundedProject from './components/ProjectSubmission/ORICFundedProjects/ORICFundedProject';
import Conference from './components/DepartmentalResearch/Conference&Workshop/Conference';
import CollaborativeWork from './components/DepartmentalResearch/CollaborativeWork/CollaborativeWork';
import ThesisProjectDetails from './components/DepartmentalResearch/ThesisProjectDetails/ThesisProjectDetails';

function App() {
  return (
    <>
    <div className='app'>
    <Routes>
      {/* <Route path="/sides" element={<Sides/>}/> */}



      <Route path="/" element={<SignInSide/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      
      {/* Submission */}
      {/* Intellectual Property */}
      <Route path="/viewintellectualproperty" element={<ViewIntellectualProperty/>}/>
      <Route path="/addintellectualproperty" element={<AddIntellectualProperty/>}/>

      {/* Project Submission */}
      {/* Oric Funded Project */}
      <Route path="/view-oric-funded-projects" element={<ViewORICFundedProjects/>}/>
      <Route path="/add-oric-funded-projects" element={<AddORICFundedProjects/>}/>
      <Route path="/oric-funded-project" element={<ORICFundedProject/>}/>

      {/* International/National Grants */}
      <Route path="/view-international/national-grants" element={<ViewGrants/>}/>
      <Route path="/add-international/national-grants" element={<AddGrants/>}/>      
      

      {/* Research Portfolio */}
      {/* Personal Information */}
      <Route path='/researchportfolio' element={<ResearchPortfolio/>}/>
      <Route path='/edit-personal-info' element={<PersonalInfo2/>}/>
      {/* Honor And Awards, Scholarships */}
      <Route path='/honorandawards' element={<HonorAndAwards/>}/>
      <Route path='/edit-honorandawards' element={<Edit_HonorAndAward/>}/>
      {/* Membership */}
      <Route path='/membership' element={<Membership/>}/>
      <Route path='/add-membership' element={<Add_membership/>}/>
      {/* View All Publications */}
      <Route path='/viewallpublications' element={<ViewAllPublications/>}/>
      {/* Add New Publications */}
      <Route path="/researchpublication" element={<ResearchPublication/>}/>

      {/* Research Grants And Contracts */}
      <Route path='/research-grants-and-contracts' element={<ResearchGrants/>}/>
      <Route path='/add-research-grants-and-contracts' element={<Add_ResearchGrants/>}/>


      {/* Departmental Research Data */}
      <Route path="/departmental-research-data-publications-of-faculty" element={<DepartmentalResearch/>} />
      <Route path="/departmental-research-data-conferences-workshops-attended" element={<Conference/>} />
      <Route path="/departmental-research-data-collaborative-research-academic-work" element={<CollaborativeWork/>} />
      <Route path="/departmental-research-data-thesis-project-details" element={<ThesisProjectDetails/>} />


      {/* Downloadable */}
      <Route path="/downloadable" element={<Downloadable/>}/>

      {/* User % Roles */}
      <Route path="/usermanagement" element={<UserManagement/>}/>
      


    </Routes>
    </div>
    </>
  );
}

export default App;
