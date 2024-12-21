
import {Burger, Pasta, Pizza}from "./Product";
import { useState } from "react";
import "./mune.css"
import "./productscard.css"
import Footer from "../home/Footer";
function Menu() {
    const [product,setProduct]=useState( <Pizza/>)
    let filter = document.querySelectorAll(".mune-filter div")
    
      filter.forEach((e)=>{
        e.onclick=function(){
            filter.forEach((el)=>{
              el.classList.remove("active")
            })
            this.classList.add("active")
        }
      })
    return (
      <>
           <div className="mune mt-5 mb-5">
            <div className="mune-filter mx-auto d-flex justify-content-around">
        <div>
          <a onClick={()=>{setProduct(<Pizza/>)}}>Pizza</a>
        </div>
        <div >
          <a onClick={()=>{setProduct(<Pasta/>)}}>Pasta</a>
        </div>
        <div>
          <a onClick={()=>{setProduct(<Burger/>)}}>Burger</a>
        </div>
          </div>
        <div className="product row gap-3">
          {product}
        </div>
        </div>
        <Footer/>
      </>
   
  
    )
}
export default Menu;