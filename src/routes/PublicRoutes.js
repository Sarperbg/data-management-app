import {Route, Routes, Navigate } from "react-router-dom";
import Login from "../apps/auth/components/Login";
import Register from "../apps/auth/components/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>

  )
}

export default PublicRoutes