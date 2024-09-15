import { Helmet } from "react-helmet-async";
import {  FaBook,   FaHome, FaList,  FaUsers, FaUtensils,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    //TODO: get isAdmin value from the database

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div>
                    <Helmet>
                        <title>Newspaper || Dashboard</title>
                    </Helmet>
                </div>
            
            <div className="w-64 min-h-screen bg-orange-400">
            <span className="ml-6">DASHBOARD</span>
            <div className="divider"></div>
             <ul className="menu p-4">
                <>
                 <li>
                    
                    <NavLink to="/dashboard/adminHome"> 
                    <FaHome></FaHome>
                    Admin Home</NavLink></li>
                <li>
                    
                    <NavLink to="/dashboard/addItems"> 
                    <FaUtensils></FaUtensils>
                   Add Items </NavLink></li>
                <li>
                    
                    <NavLink to="/dashboard/manageItems"> 
                    <FaList></FaList>
                    Manage Items</NavLink>
                    </li>
                <li>
                    
                    <NavLink to="/dashboard/bookings"> 
                    <FaBook></FaBook>
                    Manage Bookings</NavLink>
                    </li>
                <li>
                    
                    <NavLink to="/dashboard/users"> 
                    <FaUsers></FaUsers>
                    All Users</NavLink>
                    </li>
                </>
                  {/* Shared nav links  */}
                  <div className="divider"></div>
                    <li>
                    <NavLink to="/"> 
                    <FaHome></FaHome>
                   Home</NavLink>
                   </li>
    
                
            
             
             </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;