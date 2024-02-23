import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgotPass";
import ResetPasswordForm from "./pages/restPass";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/rest-pass" element={<ResetPasswordForm />} />
      </Routes>
    </>
  );
}

export default App;
