import { useEffect } from "react"
import { useAuth } from "../../Context/authProvider"
import { Navigate } from "react-router-dom"
export const Logout = ()=>{
    const {logout} = useAuth()
    useEffect(()=>{
        logout()
    },[logout])
    return <Navigate to="/"></Navigate>
}
