import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Signin from "../pages/SignIn/SignIn";
import ChatWithAI from "../pages/ChatWithAI/ChatWithAI";
import Cart from "../pages/Cart/Cart";
import Register from "../pages/Register/Register";
import Search from "../pages/Search/Search";
const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatwithai" element={<ChatWithAI />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default index;
