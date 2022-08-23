import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {    
  return (
      <div id="navbar_div_id">
        <div id="logo_div_id"><img src ='logo.jpg' alt='' id='logo_image_id'/></div>
        <div id="logo_div_id"><Link to="/" id="link_id">Home</Link></div>
        <div id="logo_div_id"><a href="#main_products_div_id" id="link_id">Products</a></div>
        <div id="logo_div_id"><Link to="account" id="link_id">Account</Link></div>
       


      </div>
  )
}
