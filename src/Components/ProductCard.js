// import { useState } from "react";
import "./Card.css";

const ProductCard = ({ products, setProducts, setQuantity, quantity, total, setTotal }) => {

  // console.log(setTotal, total);

  // increase quantity
  function Increase(id) {
    // let tempProduct = products; // we are storing reference of products in tempProduct
    products.map((product) => {
      // check if product id is equal to the id
      if (product.id === id) {
        // then increase the quantity by 1
        product.quantity += 1;
        setTotal(total + product.price);
        setQuantity(quantity + 1);
      }
      return product;
    });
    // let temp = [...tempProduct];
    setProducts(products);
  }

  // decrease quantity
  function Decrease(id) {
    let tempProducts = [...products]; // here we are using taking value from products array and storing in temoProducts using spred operation

    tempProducts.map((product) => {
      // check if product id is equal to the id
      if (product.id === id && product.quantity >= 1) {
        // then decrease the quantity by 1
        product.quantity -= 1;
        setTotal(total - product.price);
        setQuantity(quantity - 1);
      }
      return product;
    });

    // store the tempProducts
    setProducts(tempProducts);
  }

  function removeProduct(id) {
    let tempProducts = [...products]; // here we are using taking value from products array and storing in temoProducts using spred operation
    let arr = tempProducts.filter((product) => {
      if (product.id === id) {
        setTotal(total - product.quantity * product.price);
        setQuantity(quantity - product.quantity);
      }
      return product.id !== id;
    });
    setProducts(arr);
  }

  return (
    <div className = "mainDiv">
      {products.length <= 0 && <p>is currently empty</p>}
      {products.map((product) => {
        return (
          <div key={product.id} >
            <>
            <div>
                <img src={product.image} style={{ height: '80px' }}></img>
            </div>
            <h4>{product.name}</h4>
            <p>price: {product.price}</p>
            <button
              onClick={() => {
                removeProduct(product.id);
              }}
            >
              remove
            </button>
            </>
            <>
              <button
                onClick={() => {
                  Increase(product.id);
                }}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <button
                onClick={() => {
                  Decrease(product.id);
                }}
              >
                -
              </button>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
