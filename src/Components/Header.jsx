import Lottie from "lottie-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.json'
import '../Css/Banner.css'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AfterLogin from "./UserCanSee/AfterLogin";
import Swal from "sweetalert2";
import '../Css/Header.css'
const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const handleClick = () => {
        navigate('/')
    }
    const handleLogout = async () => {
        try {
            const res = await logout();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${res, user.displayName} logged out`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')

        }
        catch (err) {
            console.log(err);
        }
    }
    const nav_items =
        <>
            <li><NavLink to='/' className=" activeroute">Home</NavLink></li>
            <li><NavLink to='/alljob' className=" activeroute">All Jobs</NavLink></li>
            <li><NavLink to='/blog' className=" activeroute">Blogs</NavLink></li>
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-[#557C55] shadow bg-base-100 rounded-box w-52">
                            {
                                nav_items
                            }
                        </ul>
                    </div>
                    <div className=" flex gap-5 items-center justify-between">
                        <Lottie className=" hidden lg:block mg:block w-[100px]" animationData={logo} loop={true}></Lottie>
                        <button onClick={handleClick}><h1 className=" text-4xl font-bold">SkillSafari</h1></button>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#557C55]">
                        {
                            nav_items
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end ">


                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={`${user?.displayName}`}>
                                <div className="w-10 rounded-full" >
                                    <img src={user.photoURL} alt="User Profile" />
                                </div>
                            </label>

                            <ul tabIndex={0} className="menu text-[#557C55] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>

                                </li>

                                <li><a>Name: {user.displayName}</a></li>
                                <li><button className=" bg-[#FA7070]" onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div> : <Link to='/login' className=" text-2xl font-poppins hover:bg-[#557C55] hover:text-[#bddcbd] rounded-md p-2"> Login</Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;