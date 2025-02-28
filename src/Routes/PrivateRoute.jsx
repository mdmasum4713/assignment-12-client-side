import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)
    if(loading){
<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute;