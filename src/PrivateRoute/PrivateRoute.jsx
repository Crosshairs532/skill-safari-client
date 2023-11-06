import { useContext } from "react";
// import PropTypes from "react/prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return < h1 > Loading....</h1 >
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivateRoute;
// PrivateRoute.propTypes = {
//     children: PropTypes.node
// }