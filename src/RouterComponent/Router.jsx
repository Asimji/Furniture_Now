import { Routes, Route } from "react-router-dom";
import Product from "../Components/product";
import SinglePage from "../Components/SinglePage";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Home from "../Components/Home";
import Admin from "../Components/Admin";


export default function Router(){

    return <Routes>
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<SinglePage/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
    </Routes>
}