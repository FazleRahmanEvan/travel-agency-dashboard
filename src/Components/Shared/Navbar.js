import React from 'react';

const Navbar = () => {
    return (
        <div>
          
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
               
                </ul>
            </div>
            <label tabIndex="1" htmlFor="dashboard-sidebar" className=" text-slate-700 to-gray-700  btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
          
        </div>
    );
};

export default Navbar;