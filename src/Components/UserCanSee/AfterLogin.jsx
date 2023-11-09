import { NavLink } from "react-router-dom";
import '../../Css/Header.css'

const AfterLogin = () => {
    return (
        <div className=" flex flex-col lg:flex-row md:flex-row">
            <li><NavLink to='/addjob' className="activeroute">Add a Job</NavLink></li>
            <li><NavLink to='/myjob' className="activeroute">My Jobs</NavLink></li>

            <li><NavLink to='/appliedjob' className="activeroute">Applied Job</NavLink></li>
        </div >
    );
};

export default AfterLogin;