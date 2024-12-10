import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header"
import auth from "../utils/auth"

function AuthLayout() {
  if (!auth.loggedIn()) {
    return <Navigate to="/auth" />
  }
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default AuthLayout