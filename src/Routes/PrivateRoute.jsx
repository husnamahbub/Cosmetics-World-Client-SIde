import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner  w-48"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};


export default PrivateRoute;