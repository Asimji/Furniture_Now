import { Routes, Route } from "react-router-dom";
import Product from "../Components/product";
import SinglePage from "../Components/SinglePage";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Home from "../Components/Home";
import Dashboard from "../Admin/Dashboard";
import Order from "../Admin/Order";
import CartPage from "../Components/CartPage";
import AdminLogin from "../Admin/AdminLogin";
import AdminPrivate from "./AdminPrivate";


export default function Router(){

    return <Routes>
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:_id" element={<SinglePage/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path='/admin' element=
        {
          <AdminPrivate>
        <Dashboard/>
          </AdminPrivate>
      }
        />
      <Route path='/admin/order' element={<Order/>}/>
      <Route path='/admin/login' element={<AdminLogin/>}/>
        
    </Routes>
}