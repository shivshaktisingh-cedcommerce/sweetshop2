import React from 'react'
import "./Home.css"
import Slider from './Slider.js'
import {data} from "./Data.js"


export default function Home() {
  return (
    <div id="homepage_main_div_id">
       <Slider/> 
       <div id="three_categories_div_id">
         <div id="category1_div_id">
           <img src ="festival1.jpg" alt="" id="category_image_id"/><br/>
           <p className="p1_id">Festival sepecial</p>
           <p className="p2_id">For the sweetest Festival ever</p>
         </div>
         <div id="category2_div_id">
           <img src ="festival2.jpg" alt="" id="category_image_id"/><br/>
           <p className="p1_id">Marriage sepecial</p>
           <p className="p2_id">For the sweetest marriage ever</p>
         </div>
         <div id="category3_div_id">
           <img src ="festival3.jpg" alt="" id="category_image_id"/><br/>
           <p className="p1_id">Something sepecial</p>
           <p className="p2_id">For the sweetest occasion ever</p>
         </div>
           
       </div>
       <div id="daily_offers_div_id">
            <div id="image_div_id_daily_offers"><img src="daily.jpg" alt="" id="daily_offers_image_id"/></div>
            <div id="daily_offers_content">
              <p id="p1_offer">Daily Offers</p>
              <p id="p2_offer">10% price off on per kg sweets of each category.</p>

            </div>
        </div>

        <div id="cups_of_cuteness_div_id">
          {data.sweets.map((d)=>{
             return (
               <div className="cups_of_cuteness_div_id1">
                 <img src={d.image} alt="" className="cups_of_cuteness_image_id1"/><br/>
                 <p className="cups_of_cuteness_content_id1">{d.title}</p>
               </div>
             )
          })}
          
        
        </div>      

    </div>
  )
}
