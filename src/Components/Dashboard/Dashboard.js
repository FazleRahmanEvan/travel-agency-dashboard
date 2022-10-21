import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {

  
    const [user,loading,error] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }

    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex-col items-center justify-center ">
        <h2 className='text-4xl font-bold text-bg-gradient-to-r from-slate-500 to-gray-700 mb-7'></h2>
        <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side">
          <label for="dashboard-sidebar" className="drawer-overlay"></label> 
       
          <ul className="menu pl-8 p-4 overflow-y-auto w-80  bg-gradient-to-r from-slate-500 to-gray-700 text-base-content">
            {/* <!-- Sidebar content here --> */}
            
            <div class="avatar pl-14 mt-6 ">
                 <div class="w-28 rounded-full">
                  <img src="https://i.ibb.co/NCpj4V7/Dream-Solution.jpg" />
                    </div>
              </div>
          
            <li className='text-3xl text-white'><Link to ="/dashboard">Dream Solution</Link></li>
            
            <li className='text-white text-center'><Link to="/dashboard/leeds">Leeds</Link></li>
            <li className='text-white  text-center'><Link to="/dashboard/createleeds">Create Leed</Link></li>
            {/* <li className='text-white'><Link to="/dashboard/todaysTask">Todays Task</Link></li> */}
          
            <li className='text-white'><Link to="/dashboard/employeeDetails">Employee Details</Link></li>
            
            <div 
            className="dropdown relative">
        <label tabindex="0" className="pl-4 text-white w-4">Add Property</label>
        <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/dashboard/addCountry">Add Country</Link></li>
        <li><Link to="/dashboard/addUniversity">Add University</Link></li>
        <li><Link to="/dashboard/addCourselevel">Add Course Level</Link></li>
        <li><Link to="/dashboard/addLeadSource">Add Lead Source</Link></li>
        <li><Link to="/dashboard/addStatus">Add Status</Link></li>
        <li><Link to="/dashboard/addStudents">Add Studenet Type</Link></li>
        <li><Link to="/dashboard/addWeightage">Add Weightage</Link></li>
        </ul>  
      </div>
      
      <li className='text-white mt-6 place-items-start'>{user ?  <button className="btn btn-ghost mt-6 place-items-start" onClick={logout}><Link to="/">Sign Out</Link></button> : <Link to="/">Login</Link>}</li>
          
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;