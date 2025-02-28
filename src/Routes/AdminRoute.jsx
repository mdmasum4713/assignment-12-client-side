import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hocks/useAdmin";
import useAuth from "../hocks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;