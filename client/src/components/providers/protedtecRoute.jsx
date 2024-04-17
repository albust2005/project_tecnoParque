import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute ({isAuth, children}) {
    
    if(!isAuth){
        return <Navigate to="/login" />
    }

    return children ? children : <Outlet></Outlet>
}