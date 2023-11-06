import Lottie from "lottie-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.json'
import '../Css/Banner.css'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AfterLogin from "./UserCanSee/AfterLogin";
const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const handleClick = () => {
        navigate('/')
    }
    const handleLogout = async () => {
        try {
            const res = await logout();
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }
    const nav_items =
        <>
            <li><NavLink to='/' className={({ isActive }) =>
                isActive ? " bg-red-300" : ""
            }>Home</NavLink></li>
            <li><NavLink to='alljob' className={({ isActive }) =>
                isActive ? " bg-red-500" : ""
            }>All Jobs</NavLink></li>
            <li><NavLink to='blog' className={({ isActive }) =>
                isActive ? "bg-red-500" : ""
            }>Blogs</NavLink></li>
            {
                user &&
                <AfterLogin></AfterLogin>
            }

        </>
    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                nav_items
                            }
                        </ul>
                    </div>
                    <div className=" border-2  flex gap-5 items-center justify-between">
                        <Lottie className=" w-[100px]" animationData={logo} loop={true}></Lottie>
                        <button onClick={handleClick}><h1 className=" text-4xl font-bold">Job hunter</h1></button>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            nav_items
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end hover:">

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>

                                </li>

                                <li><a>Name: {user.displayName}</a></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div> : <Link to='login' className=" text-2xl"> Login</Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;