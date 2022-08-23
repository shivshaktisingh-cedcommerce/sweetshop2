import React, {useState} from 'react'
import "./Products.css"
import {data} from "./Data.js"

export default function Products() {
  const[flag1,setFlag1]=useState(true)
  const[flag2,setFlag2]=useState(false)
  const[flag3,setFlag3]=useState(false)
  const[flag4,setFlag4]=useState(false)
  const[flag5,setFlag5]=useState(false)
  const[flag6,setFlag6]=useState(false)
  const[flag7,setFlag7]=useState(false)
  const checkfun=(event)=>{
   
   if(event.target.name==='barfi'){
     if(event.target.checked===true){
      setFlag2(true)
     }
     if(event.target.checked===false){
      setFlag2(false)
     }
   }
   if(event.target.name==='laddu'){
    if(event.target.checked===true){
     setFlag1(true)
    }
    if(event.target.checked===false){
     setFlag1(false)
    }
  }
  if(event.target.name==='gulab'){
    if(event.target.checked===true){
     setFlag3(true)
    }
    if(event.target.checked===false){
     setFlag3(false)
    }
  }
  if(event.target.name==='kaju'){
    if(event.target.checked===true){
     setFlag4(true)
    }
    if(event.target.checked===false){
     setFlag4(false)
    }
  }
  if(event.target.name==='modak'){
    if(event.target.checked===true){
     setFlag5(true)
    }
    if(event.target.checked===false){
     setFlag5(false)
    }
  }
  if(event.target.name==='rasgulla'){
    if(event.target.checked===true){
     setFlag6(true)
    }
    if(event.target.checked===false){
     setFlag6(false)
    }
  }
  if(event.target.name==='halwa'){
    if(event.target.checked===true){
     setFlag7(true)
    }
    if(event.target.checked===false){
     setFlag7(false)
    }
  }

  }
  return (
    <div id="main_products_div_id">
      <div id="category_to_select_div">
        <p id="p_category_id">Categories</p>
        <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" defaultChecked onChange={checkfun} name='laddu'/>Laddoo</p>
        <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name="barfi"/>Barfi</p>
        <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name='gulab'/>Gulab Jamun</p>
        <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name="kaju"/>Kaju Mithai</p>
        <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name="modak"/>Modak</p>
        <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name='rasgulla'/>Rasgulla</p>
        <p className="p_id_checkbox"><input type="checkbox" className="checkbox_id" onChange={checkfun} name='halwa'/>Halwa</p>

      </div>
      <div id="product_category_div_id">
      {flag1===true?data.laddu.map((d)=>{
             return (
               <div className="cups_of_cuteness_div_id1">
                 <img src={d.image} alt="" className="cups_of_cuteness_image_id1"/><br/>
                 <p className="cups_of_cuteness_content_id1">{d.title}</p>
               </div>
             )
          }):""}
      {flag2===true?data.barfi.map((d)=>{
        return (
          <div className="cups_of_cuteness_div_id1">
          <img src={d.image} alt="" className="cups_of_cuteness_image_id1"/><br/>
          <p className="cups_of_cuteness_content_id1">{d.title}</p>
        </div>
        )
      }):""}
       {flag3===true?data.gulab.map((d)=>{
        return (
          <div className="cups_of_cuteness_div_id1">
          <img src={d.image} alt="" className="cups_of_cuteness_image_id1"/><br/>
          <p className="cups_of_cuteness_content_id1">{d.title}</p>
        </div>
        )
      }):""}
         {flag4===true?data.kaju.map((d)=>{
        return (
          <div className="cups_of_cuteness_div_id1">
          <img src={d.image} alt="" className="cups_of_cuteness_image_id1"/><br/>
          <p className="cups_of_cuteness_content_id1">{d.title}</p>
        </div>
        )
      }):""}
         {flag5===true?data.modak.map((d)=>{
        return (
          <div className="cups_of_cuteness_div_id1">
          <img src={d.image} alt="" className="cups_of_cuteness_image_id1"/><br/>
          <p className="cups_of_cuteness_content_id1">{d.title}</p>
        </div>
        )
      }):""}
       {flag6===true?data.rasgulla.map((d)=>{
        return (
          <div className="cups_of_cuteness_div_id1">
          <img src={d.image} alt="" className="cups_of_cuteness_image_id1"/><br/>
          <p className="cups_of_cuteness_content_id1">{d.title}</p>
        </div>
        )
      }):""}
         {flag7===true?data.halwa.map((d)=>{
        return (
          <div className="cups_of_cuteness_div_id1">
          <img src={d.image} alt="" className="cups_of_cuteness_image_id1"/><br/>
          <p className="cups_of_cuteness_content_id1">{d.title}</p>
        </div>
        )
      }):""}
        {/* {flag1===false && flag2===false && flag3===false && flag4===false && flag5===false && flag6===false && flag7===false?<img src = 'logo.png' alt=''/>""} */}
      </div>
  


    </div>
  )
}
