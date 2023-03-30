import { Routes, Route } from "react-router-dom";
import Product from "../Components/product";
import SinglePage from "../Components/SinglePage";


export default function Router(){

    return <Routes>
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<SinglePage/>}/>
    </Routes>
}