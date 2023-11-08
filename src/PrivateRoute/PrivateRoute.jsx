import { useContext } from "react";
// import PropTypes from "react/prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return < h1 > Loading....</h1 >
    }
    if (user) {
        return children;
    }
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to login First",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivateRoute;
// PrivateRoute.propTypes = {
//     children: PropTypes.node
// }