import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../security/authContext"

function ProtectedRoutes() {
    const {session, isLoading} = useAuth()

    if (isLoading) return null

    if(session){
        return <Outlet/>
    }else{
        return <Navigate to='/'/>
    }
}

export default ProtectedRoutes
