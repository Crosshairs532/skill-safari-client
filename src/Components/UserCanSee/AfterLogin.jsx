import { NavLink } from "react-router-dom";


const AfterLogin = () => {
    return (
        <div className=" flex flex-col lg:flex-row md:flex-row">
            <li><NavLink to='/addjob' className={({ isActive }) =>
                isActive ? "bg-[#557C55] text-[white]" : ""
            }>Add a Job</NavLink></li>
            <li><NavLink to='/myjob' className={({ isActive }) =>
                isActive ? "bg-[#557C55] text-[white]" : ""
            }>My Jobs</NavLink></li>

            <li><NavLink to='/appliedjob' className={({ isActive }) =>
                isActive ? "bg-[#557C55] text-[white]" : ""
            }>Applied Job</NavLink></li>
        </div>
    );
};

export default AfterLogin;