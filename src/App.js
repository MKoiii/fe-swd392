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
import ManageProductDetail from "./pages/manageProducts/ProductDetails";
import SettingSku from "./pages/manageProducts/SettingSku";
import MerchantPrivateRouter from "./router/MerchantPrivateRouter";
import AdminAndMerchantPrivateRouter from "./router/AdminAndMerchantPrivateRouter";
import RegisterMerchant from "./pages/registerMerchant";
import ManageMerchants from "./pages/manageMerchants";
import MerchantDetail from "./pages/merchantDetail";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import ConfirmPayment from "./pages/confirmPayment";
import MyOrder from "./pages/myOrder";
import ManageOrders from "./pages/manageOrders";
import OrderDetail from "./pages/manageOrders/OrderDetail";
import AdminProfile from "./pages/adminProfile";

const AuthContext = createContext(null);
const initialValue = {
  isLogin: false,
  userInfo: {},
};

const GlobalContext = createContext({});
function App() {
  const [auth, setAuth] = useState(initialValue);
  const [reload, setReload] = useState(false);
  return (
    <GlobalContext.Provider value={{ reload, setReload }}>
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
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          {/* Role user */}
          <Route element={<UserPrivateRouter />}>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register-merchant" element={<RegisterMerchant />} />
            <Route path="/user-profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<ConfirmPayment />} />
            <Route path="/my-order" element={<MyOrder />} />
          </Route>
          {/* Role Admin */}
          <Route element={<AdminPrivateRouter />}>
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/manage-merchants">
              <Route path="" element={<ManageMerchants />} />
              <Route path=":id" element={<MerchantDetail />} />
            </Route>
            <Route path="/manage-categories" element={<ManageCategories />} />
            <Route
              path="/manage-categories/:categoryId"
              element={<CategoryDetail />}
            />
            <Route path="/admin-profile" element={<AdminProfile />} />
          </Route>
          {/* Role merchant */}
          <Route element={<MerchantPrivateRouter />}>
            <Route path="/manage-products">
              <Route path="" element={<ManageProducts />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="update/:productId" element={<AddProduct />} />
              <Route
                path="detail/:productId"
                element={<ManageProductDetail />}
              />
              <Route path="setting-sku/:productId" element={<SettingSku />} />
              <Route
                path="update-sku/:productId/:skuId"
                element={<SettingSku />}
              />
            </Route>
            <Route path="manage-orders">
              <Route path="" element={<ManageOrders />} />
              <Route path=":id" element={<OrderDetail />} />
            </Route>
          </Route>
          <Route element={<AdminAndMerchantPrivateRouter />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </GlobalContext.Provider>
  );
}

export { AuthContext, GlobalContext };

export default App;
