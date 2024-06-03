import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token')
    if (!token) {
        alert("permiso denegado")
        return <Navigate to={'/'} />
    }
    return <Outlet />
}


// cerrar cesion 
export const Logout = () => {
    localStorage.removeItem('token')
    return <Navigate to={'/'} />
}