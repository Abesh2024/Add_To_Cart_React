import React from "react";
import "./Footer.css";

 const Footer = ( {...props} ) => {
    // console.log(setTotal, total);

        return <div className = "footerDiv">
       <>
       <p>Total : {props.total}</p>
       </>
        <>
        <button
          onClick={() => {
            props.setProducts([]);
            props.setTotal(0);
            props.setQuantity(0);
          }}
        className= "clarBtn">
          clear cart
        </button>
        </>
      </div>
}

export default Footer;