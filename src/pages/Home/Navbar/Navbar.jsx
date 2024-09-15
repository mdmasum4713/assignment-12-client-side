import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navOptions = <>
        <li>
            <NavLink className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-bold'

            } to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/addArticles' className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-bold'}>Add Articles</NavLink>
        </li>
        <li>
            <NavLink to='/allArticles' className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-bold'}>All Articles</NavLink>
        </li>
        <li>
            <NavLink to='/subscription' className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-bold'}>Subscription</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-bold'}>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to='/myArticles' className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-bold'}>My Articles</NavLink>
        </li>
        <li>
            <NavLink to='/premium' className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-bold'}>Premium Articles</NavLink>
        </li>




    </>



    return (
        <div className="navbar bg-base-100  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <span className="text-2xl italic font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient ">Newspaper</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div >
                <div className='dropdown dropdown-end z-50'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div title='' className='w-10 rounded-full'>
                            <img
                                referrerPolicy='no-referrer'
                                alt='User Profile Photo'
                                src={user?.photoURL}
                            />

                        </div>

                    </div>
                    <ul

                        tabIndex={0}
                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                    >
                        <li> <NavLink className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'} to='/myProfile'> My Profile</NavLink></li>

                        {
                            user ?

                                <li>    <NavLink className={({ isActive }) =>
                                    isActive ? 'text-primary font-bold' : 'font-bol'

                                } onClick={handleLogOut}>
                                    Logout
                                </NavLink></li>

                                :
                                <li> <NavLink className={({ isActive }) =>
                                    isActive ? 'text-primary font-bold' : 'font-bold'

                                } to="/login">
                                    Login
                                </NavLink></li>
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;


