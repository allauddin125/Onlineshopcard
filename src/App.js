import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
// import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import Home from './components/Log/Home'
import Login from './components/Log/Login'


import { ShopContextProvider } from "./context/shop-context";


function App() {



  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/home" element={<Home/>}/>
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
