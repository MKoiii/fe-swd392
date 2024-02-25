import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgotPass";
import ResetPasswordForm from "./pages/restPass";
import ManageUsers from "./pages/manageUsers";
import Profile from "./pages/profile";
import LandingPage from "./pages/landingPage";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Navigate to={"/home"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/rest-pass" element={<ResetPasswordForm />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
