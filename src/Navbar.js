import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {    
  return (
      <div id="navbar_div_id">
        <div id="logo_div_id"><img src ='logo.jpg' alt='' id='logo_image_id'/></div>
        <div id="logo_div_id"><Link to="/" id="link_id">Home</Link></div>
        <div id="logo_div_id"><Link to="products" id="link_id">Products</Link></div>
        <div id="logo_div_id"><Link to="gallery" id="link_id">Gallery</Link></div>
        <div id="logo_div_id"><Link to="account" id="link_id">Account</Link></div>
        <div id="search-box"><input type="text" className="searchText" placeholder="Type to search..."/><i class="fa fa-search" aria-hidden="true" id="search_icon"></i></div>


      </div>
  )
}
