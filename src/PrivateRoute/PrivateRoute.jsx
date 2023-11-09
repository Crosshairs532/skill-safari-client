import { useContext } from "react";
// import PropTypes from "react/prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ThreeDots } from 'react-loader-spinner'
const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}

        />
    }
    if (user) {
        return children;
    }
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to login First to view details",
        timer: 1500
        // footer: '<a href="#">Why do I have this issue?</a>'
    });
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivateRoute;
// PrivateRoute.propTypes = {
//     children: PropTypes.node
// }