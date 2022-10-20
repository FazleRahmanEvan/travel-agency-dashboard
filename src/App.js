import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import RequireAuth from './Components/Login/RequireAuth';
import CreateLeed from './Components/Dashboard/CreateLeed/CreateLeed';
import Leeds from './Components/Dashboard/Leeds/Leeds';
import AddCountry from './Components/Dashboard/AddProperty/AddCountry';
import AddCourseLevel from './Components/Dashboard/AddProperty/AddCourseLevel';
import AddLeadSource from './Components/Dashboard/AddProperty/AddLeadSource';
import AddStatus from './Components/Dashboard/AddProperty/AddStatus';
import AddStudenetType from './Components/Dashboard/AddProperty/AddStudenetType';
import AddUniversity from './Components/Dashboard/AddProperty/AddUniversity';
import AddWeightage from './Components/Dashboard/AddProperty/AddWeightage';
import TodaysTask from './Components/Dashboard/TodaysTask/TodaysTask';
import EmployeeDetails from './Components/Dashboard/EmployeeDetails/EmployeeDetails';
import { useState } from 'react';

function App() {
  const [countryTable,setCountryTable]= useState([]);
  return (
    <div className='bg-slate-200'>

      <Navbar></Navbar>
       <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       
       <Route path="/dashboard" element={<RequireAuth><Dashboard/>
       </RequireAuth>}> 
       <Route path='leeds' index element={<Leeds></Leeds>}></Route>
        <Route path="createleeds" element={<CreateLeed countryTable={countryTable} setCountryTable={setCountryTable}></CreateLeed>}></Route>
        <Route path="todaysTask" element={<TodaysTask></TodaysTask>}></Route>
        <Route path="employeeDetails" element={<EmployeeDetails></EmployeeDetails>}></Route>
       
        <Route path="addCountry" element={<AddCountry countryTable={countryTable} setCountryTable={setCountryTable}></AddCountry>}></Route>
        <Route path="addCourselevel" element={<AddCourseLevel></AddCourseLevel>}></Route>
        <Route path="addLeadSource" element={<AddLeadSource></AddLeadSource>}></Route>
        <Route path="addStatus" element={<AddStatus></AddStatus>}></Route>
        <Route path="addStudents" element={<AddStudenetType></AddStudenetType>}></Route>
        <Route path="addUniversity" element={<AddUniversity></AddUniversity>}></Route>
        <Route path="addWeightage" element={<AddWeightage></AddWeightage>}></Route>
       </Route>

        <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<SignUp/>} />
       
      
      
       </Routes>
    </div>
  );
}

export default App;
