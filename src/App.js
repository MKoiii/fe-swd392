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
import AdminPrivateRouter from "./router/AdminPrivateRouter";
import CommonPrivateRouter from "./router/CommonPrivateRouter";
import UserPrivateRouter from "./router/UserPrivateRouter";
import { createContext, useState } from "react";
import ManageCategories from "./pages/categories/Categories";
import CategoryDetail from "./pages/categories/CategoryDetail";
import ManageProducts from "./pages/manageProducts/Products";
import AddProduct from "./pages/manageProducts/AddProduct";

const AuthContext = createContext(null);
const initialValue = {
  isLogin: false,
  userInfo: {},
};

function App() {
  const [auth, setAuth] = useState(initialValue);
  return (
    <AuthContext.Provider
      value={{ auth: auth, updateAuth: (data) => setAuth(data) }}
    >
      <Routes>
        <Route path="" element={<Navigate to={"/home"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/rest-pass" element={<ResetPasswordForm />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route element={<UserPrivateRouter />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route element={<AdminPrivateRouter />}>
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-categories" element={<ManageCategories />} />
          <Route
            path="/manage-categories/:categoryId"
            element={<CategoryDetail />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-products">
            <Route path="" element={<ManageProducts />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="update/:productId" element={<AddProduct />} />
          </Route>
        </Route>
        <Route element={<CommonPrivateRouter />}>
          <Route path="/my-profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export { AuthContext };

export default App;
