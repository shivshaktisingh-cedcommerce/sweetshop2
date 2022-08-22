import Home from './Home.js';
import Products from './Products.js';
import Gallery from './Gallery.js';
import Navbar from './Navbar.js';
import Account from './Account.js';
import Footer from './Footer.js';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
           {/* <Link to="/">Home</Link>
           <Link to="products">Products</Link>
           <Link to="gallery">Gallery</Link> */}
           <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="products" element={<Products />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
