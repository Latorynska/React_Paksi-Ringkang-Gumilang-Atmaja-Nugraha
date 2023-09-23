import { Navigate, Outlet, redirect } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";

const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext);
    
    if (!isLoggedIn) {
        return <Navigate to="/login" />
    } 
    return <Outlet />
}
 
export default PrivateRoute;