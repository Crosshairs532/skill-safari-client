import { NavLink } from "react-router-dom";


const AfterLogin = () => {
    return (
        <div className=" flex">
            <li><NavLink to='addjob' className={({ isActive }) =>
                isActive ? "bg-red-500" : ""
            }>Add a Job</NavLink></li>
            <li><NavLink to='myjob' className={({ isActive }) =>
                isActive ? "bg-red-500" : ""
            }>My Jobs</NavLink></li>

            <li><NavLink to='appliedjob' className={({ isActive }) =>
                isActive ? "bg-red-500" : ""
            }>Applied Job</NavLink></li>
        </div>
    );
};

export default AfterLogin;