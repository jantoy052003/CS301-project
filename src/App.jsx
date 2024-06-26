import { Route, Routes, HashRouter } from "react-router-dom"
import Home from "./pages/home"
import Menu from "./pages/menu"
import ContactUs from "./pages/contact-us"
import Cart from "./pages/cart"
import PlaceOrder from "./pages/placeOrder"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Profile from "./pages/profile"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
 
  return (
   <>
    <div>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home/>} exact/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/placeOrder" element={<PlaceOrder/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/placeOrder" element={<PlaceOrder/>}/>
        {/* Private Routes */}
      </Routes>
   </div>
   <Footer/>
   </>
  )
}

export default App
