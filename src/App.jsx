import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarr from "./seactions/Navbar/Navbar";
import Footer from "./seactions/Footer/Footer";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
// aos animation library
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cart from "./pages/Cart/Cart";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import { ProductProvider } from "./context/ProductContext";
// import HomeTotal from "./HomeTotal";
function App() {
  

  useEffect(() => {
    AOS.init({
      duration: 1000});
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <ProductProvider>
          <Routes>
          <Route path="/Product" element={<Home />} />
          <Route path="/ListProduct" element={<Product />} />
          <Route path="/DetailsProduct/:id" element={<DetailsProduct />} />
          <Route path="/Cart" element={<Cart />} />
          </Routes>
        </ProductProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
