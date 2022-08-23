import React, { useEffect, useState } from 'react'
import "./Home.css"
import Slider from './Slider.js'
import { data } from "./Data.js"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Button, Drawer } from '@mui/material'

export default function Home() {
  const [flag1, setFlag1] = useState(true)
  const [flag2, setFlag2] = useState(false)
  const [flag3, setFlag3] = useState(false)
  const [flag4, setFlag4] = useState(false)
  const [flag5, setFlag5] = useState(false)
  const [flag6, setFlag6] = useState(false)
  const [flag7, setFlag7] = useState(false)
  const [flagcheck, setFlagcheck] = useState(false)
  const [displayarray1, setDisplayarrray1] = useState(data.laddu)
  const [displayarray2, setDisplayarrray2] = useState(data.barfi)
  const [displayarray3, setDisplayarrray3] = useState(data.modak)
  const [displayarray4, setDisplayarrray4] = useState(data.gulab)
  const [displayarray5, setDisplayarrray5] = useState(data.kaju)
  const [displayarray6, setDisplayarrray6] = useState(data.rasgulla)
  const [displayarray7, setDisplayarrray7] = useState(data.halwa)
  const [festivalname, setFestivalname] = useState("Ganesh chaturthi")
  const[cart , setCart]=useState([])
  const[cartid , setCartid]=useState([])
  const[totalamount , setTotalamount]=useState(0)
  const[finalamount , setFinalamount]=useState(0)
  const[afterdrawer , setAfterdrawer]=useState(false)

  const addtocartfun=(d)=>{
   
    if(cartid.indexOf(d.item)===-1){
        setCartid([...cartid,d.item])
        setCart([...cart,d])
    }

  }

  const increasequantfun=(d)=>{ 
    cart.map((x)=>{
        if(x.item==d.item){
            x.quantity = x.quantity +1;
            x.total = parseInt(x.selling) * parseInt(x.quantity);
            }
          setCart([...cart])
    })
}

useEffect(()=>{
  var z = 0;
   cart.map((d)=>{
       z = z + d.quantity * d.selling;

   })
   setTotalamount(z)
   var zy = totalamount *0.9;
   setFinalamount(zy)

},[cart])

const decreasequantfun =(d ,ind)=>{

  cart.map((x)=>{
    if(x.item===d.item){
      if(x.quantity>=1){
        x.quantity = x.quantity - 1
      }
      if(x.quantity===0){
        x.quantity=1;
        cart.splice(ind ,1)
        var z1 = cartid; 
        z1.map((d , index)=>{
          if(ind===index){
            z1.splice(index,1)
            }
        })
      }
    }
  x.total = parseInt(x.selling) * parseInt(x.quantity);
  })
  setCart([...cart])
}

const delete_fun=(d1)=>{
  var z = cart;
  var z1 = cartid;
  z.map((d,index)=>{

      if(index==d1){
          z.splice(index,1)
          console.log(z)
      }
  })
  z1.map((d , index)=>{
      if(d===d1){
          z1.splice(index,1)
      }
  })
  setCart([])
  setCart([...z])
  if(cart.length===0){
      setCartid([])
  }
  
}



  const checkfun = (event) => {

    if (event.target.checked === true) {
      if (event.target.name === "laddu") {
        setFlag1(true)
      }
      if (event.target.name === "barfi") {
        setFlag2(true)
      }
      if (event.target.name === "modak") {
        setFlag3(true)
      }
      if (event.target.name === "gulab") {
        setFlag4(true)
      }
      if (event.target.name === "kaju") {
        setFlag5(true)
      }
      if (event.target.name === "rasgulla") {
        setFlag6(true)
      }
      if (event.target.name === "halwa") {
        setFlag7(true)
      }

    }
    if (event.target.checked === false) {
      if (event.target.name === "laddu") {
        setFlag1(false)
      }
      if (event.target.name === "barfi") {
        setFlag2(false)
      }
      if (event.target.name === "modak") {
        setFlag3(false)
      }
      if (event.target.name === "gulab") {
        setFlag4(false)
      }
      if (event.target.name === "kaju") {
        setFlag5(false)
      }
      if (event.target.name === "rasgulla") {
        setFlag6(false)
      }
      if (event.target.name === "halwa") {
        setFlag7(false)
      }
    }
  }

  const sortingfun = (event) => {
    var z;
    if (event.target.value === "Low to high") {
      if (flag1 === true) {
        z = displayarray1.sort(function (a, b) { return Number(a.selling) - Number(b.selling) });
        setDisplayarrray1([])
        setDisplayarrray1([...z])
      }
      if (flag2 === true) {
        z = displayarray2.sort(function (a, b) { return Number(a.selling) - Number(b.selling) });
        setDisplayarrray2([])
        setDisplayarrray2([...z])
      }
      if (flag3 === true) {
        z = displayarray3.sort(function (a, b) { return Number(a.selling) - Number(b.selling) });
        setDisplayarrray3([])
        setDisplayarrray3([...z])
      }
      if (flag4 === true) {
        z = displayarray4.sort(function (a, b) { return Number(a.selling) - Number(b.selling) });
        setDisplayarrray4([])
        setDisplayarrray4([...z])
      }
      if (flag5 === true) {
        z = displayarray5.sort(function (a, b) { return Number(a.selling) - Number(b.selling) });
        setDisplayarrray5([])
        setDisplayarrray5([...z])
      }
      if (flag6 === true) {
        z = displayarray6.sort(function (a, b) { return Number(a.selling) - Number(b.selling) });
        setDisplayarrray6([])
        setDisplayarrray6([...z])
      }
      if (flag7 === true) {
        z = displayarray7.sort(function (a, b) { return Number(a.selling) - Number(b.selling) });
        setDisplayarrray7([])
        setDisplayarrray7([...z])
      }

    }
    if (event.target.value === "high to low") {
      if (flag1 === true) {
        z = displayarray1.sort(function (a, b) { return  Number(b.selling) - Number(a.selling) });
        setDisplayarrray1([])
        setDisplayarrray1([...z])
      }
      if (flag2 === true) {
        z = displayarray2.sort(function (a, b) { return  Number(b.selling) - Number(a.selling) });
        setDisplayarrray2([])
        setDisplayarrray2([...z])
      }
      if (flag3 === true) {
        z = displayarray3.sort(function (a, b) { return  Number(b.selling) - Number(a.selling) });
        setDisplayarrray3([])
        setDisplayarrray3([...z])
      }
      if (flag4 === true) {
        z = displayarray4.sort(function (a, b) { return  Number(b.selling) - Number(a.selling) });
        setDisplayarrray4([])
        setDisplayarrray4([...z])
      }
      if (flag5 === true) {
        z = displayarray5.sort(function (a, b) { return  Number(b.selling) - Number(a.selling) });
        setDisplayarrray5([])
        setDisplayarrray5([...z])
      }
      if (flag6 === true) {
        z = displayarray6.sort(function (a, b) { return  Number(b.selling) - Number(a.selling) });
        setDisplayarrray6([])
        setDisplayarrray6([...z])
      }
      if (flag7 === true) {
        z = displayarray7.sort(function (a, b) { return  Number(b.selling) - Number(a.selling) });
        setDisplayarrray7([])
        setDisplayarrray7([...z])
      }

    }

  }
  return (
    <div id="homepage_main_div_id">
      <Slider />
      <div id="daily_offers_div_id">
        <div id="image_div_id_daily_offers"><img src="daily.jpg" alt="" id="daily_offers_image_id" /></div>
        <div id="daily_offers_content">
          <p id="p1_offer">Daily Offers</p>
          <p id="p2_offer">10% price off on per kg sweets of each category.</p>

        </div>
      </div>
      <div id="three_categories_div_id">
        <div id="category1_div_id">
          <img src="festival1.jpg" alt="" id="category_image_id" /><br />
          <p className="p1_id">Festival special</p>
          <p className="p2_id">For the {festivalname} special</p>
        </div>
        <div id="category2_div_id">
          <img src="festival2.jpg" alt="" id="category_image_id" /><br />
          <p className="p1_id">Marriage special</p>
          <p className="p2_id">For the sweetest marriage ever</p>
        </div>
        <div id="category3_div_id">
          <img src="festival3.jpg" alt="" id="category_image_id" /><br />
          <p className="p1_id">Birthday special</p>
          <p className="p2_id">For the sweetest bithday ever</p>
        </div>

      </div>

      <div id="main_products_div_id">
        <div id="category_to_select_div">
          <p id="p_category_id">Categories <i class="fa fa-shopping-cart cart_icon" aria-hidden="true" onClick={()=>setFlagcheck(true)}></i><sup style={{ color: "blue" }}>{cartid.length}</sup> </p>
          <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" defaultChecked onChange={checkfun} name='laddu' />Laddoo</p>
          <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name="barfi" />Barfi</p>
          <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name='gulab' />Gulab Jamun</p>
          <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name="kaju" />Kaju Mithai</p>
          <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name="modak" />Modak</p>
          <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name='rasgulla' />Rasgulla</p>
          <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name='halwa' />Halwa</p>
         

        </div>
        <div id="product_category_div_id">
          <div className="new_navbar">
          <p className="p_id_select"><select name="price" id="price" onChange={sortingfun}>
            <option value="">--sort--</option>
            <option value="Low to high">Low to high</option>
            <option value="high to low">High to low</option>
          </select></p>
          <div id="search-box"><input type="text" className="searchText" placeholder="Type to search..."/><i class="fa fa-search" aria-hidden="true" id="search_icon"></i></div>
          </div>

          {flag1 === true ? displayarray1.map((d) => {
            return (
              <div className="cups_of_cuteness_div_id1">
                <img src={d.image} alt="" className="cups_of_cuteness_image_id1" /><br />
                <p className="cups_of_cuteness_content_id1">{d.title}</p>
                <p className="price_item_class"> Rs. {d.selling}</p>
                <p className="add_to_cart_btn_p_class"><button className="add_to_cart_btn_class" onClick={()=>addtocartfun(d)}>Add to cart</button></p>
              </div>
            )
          }) : ""}
          {flag2 === true ? displayarray2.map((d) => {
            return (
              <div className="cups_of_cuteness_div_id1">
                <img src={d.image} alt="" className="cups_of_cuteness_image_id1" /><br />
                <p className="cups_of_cuteness_content_id1">{d.title}</p>
                <p className="price_item_class"> Rs. {d.selling}</p>
                <p className="add_to_cart_btn_p_class"><button className="add_to_cart_btn_class" onClick={()=>addtocartfun(d)}>Add to cart</button></p>
              </div>
            )
          }) : ""}
          {flag3 === true ? displayarray3.map((d) => {
            return (
              <div className="cups_of_cuteness_div_id1">
                <img src={d.image} alt="" className="cups_of_cuteness_image_id1" /><br />
                <p className="cups_of_cuteness_content_id1">{d.title}</p>
                <p className="price_item_class"> Rs. {d.selling}</p>
                <p className="add_to_cart_btn_p_class"><button className="add_to_cart_btn_class" onClick={()=>addtocartfun(d)}>Add to cart</button></p>
              </div>
            )
          }) : ""}
          {flag4 === true ? displayarray4.map((d) => {
            return (
              <div className="cups_of_cuteness_div_id1">
                <img src={d.image} alt="" className="cups_of_cuteness_image_id1" /><br />
                <p className="cups_of_cuteness_content_id1">{d.title}</p>
                <p className="price_item_class"> Rs. {d.selling}</p>
                <p className="add_to_cart_btn_p_class"><button className="add_to_cart_btn_class" onClick={()=>addtocartfun(d)}>Add to cart</button></p>
              </div>
            )
          }) : ""}
          {flag5 === true ? displayarray5.map((d) => {
            return (
              <div className="cups_of_cuteness_div_id1">
                <img src={d.image} alt="" className="cups_of_cuteness_image_id1" /><br />
                <p className="cups_of_cuteness_content_id1">{d.title}</p>
                <p className="price_item_class"> Rs. {d.selling}</p>
                <p className="add_to_cart_btn_p_class"><button className="add_to_cart_btn_class" onClick={()=>addtocartfun(d)}>Add to cart</button></p>
              </div>
            )
          }) : ""}
          {flag6 === true ? displayarray6.map((d) => {
            return (
              <div className="cups_of_cuteness_div_id1">
                <img src={d.image} alt="" className="cups_of_cuteness_image_id1" /><br />
                <p className="cups_of_cuteness_content_id1">{d.title}</p>
                <p className="price_item_class"> Rs. {d.selling}</p>
                <p className="add_to_cart_btn_p_class"><button className="add_to_cart_btn_class" onClick={()=>addtocartfun(d)}>Add to cart</button></p>
              </div>
            )
          }) : ""}
          {flag7 === true ? displayarray7.map((d) => {
            return (
              <div className="cups_of_cuteness_div_id1">
                <img src={d.image} alt="" className="cups_of_cuteness_image_id1" /><br />
                <p className="cups_of_cuteness_content_id1">{d.title}</p>
                <p className="price_item_class"> Rs. {d.selling}</p>
                <p className="add_to_cart_btn_p_class"><button className="add_to_cart_btn_class" onClick={()=>addtocartfun(d)}>Add to cart</button></p>
              </div>
            )
          }) : ""}

        </div>



      </div>
      <Drawer
         open={flagcheck}
         anchor='right'
         onClose = {()=>setFlagcheck(false)}
        >
            <Button variant='contained' onClick={()=>setFlagcheck(false)} id="close_drawer_btn_id">x</Button>
           <div id="cart_products">   
           {cart.length===0?<div id="gif_div_id"><img src ="https://hakimitr.com/assets/website/images/empty-cart.gif" id="gif_id" alt="" /></div>:""}
           {cart.length===0?<p id="empty_cart_message">Your cart is empty</p>:""}
          {cart.map((e  , i)=>{
              return <div id="repetitive_cart_div">
                  <div id="cart_image_div"><img src={e.image} alt="" id="cart_image_id"/>
                  <p id="cart_product_title">{e.title}</p></div>
                  <div id="button_div_id"><button onClick={()=>increasequantfun(e)} className="increment_btn_id_add">+</button><button className="increment_btn_id_quant">{e.quantity} KG</button><button onClick={()=>decreasequantfun(e , i)} className="increment_btn_id_decrease">-</button>
                  <p id="amt_p_id"> Rs. {e.total}</p>
                  <p><i class="fa fa-trash del_icon" aria-hidden="true" onClick={()=>delete_fun(i)}></i></p>
                  </div>
                  </div> 
          })}
         {cart.length>0? <p id="total_amount">Total Amount Rs. {totalamount}</p>:""}
         {cart.length>0? <p id="final_amount_id">After 10% discount : {finalamount}</p>:""}
          {cart.length>0?<p id="p_amt"><button id="checkout_btn" >Checkout</button></p>:""}
        
      
          </div>
         
        
       
        </Drawer >

    </div>
  )
}
