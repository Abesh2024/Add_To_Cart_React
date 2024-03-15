import "./App.css";
// import Header from "./component/Header";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/ProductCard";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://www.course-api.com/images/cart/phone-2.png",
      name: "Samsung S21",
      quantity: 0,
      price: 20000,
    },
    {
      id: 2,
      image: "https://www.course-api.com/images/cart/phone-3.png",
      name: "BlackBarry",
      quantity: 0,
      price: 30000,
    },
    {
      id: 3,
      image: "https://www.course-api.com/images/cart/phone-4.png",
      name: "Iphone 14",
      quantity: 0,
      price: 50000,
    },
  ]);

  const [quantity, setQuantity] = useState(0);

  const [total, setTotal] = useState(0);


  return (
    <div className="App">
      <Header quantity={quantity} />
      <Cart
        products={products}
        setProducts={setProducts}
        setQuantity={setQuantity}
        quantity={quantity}
        total = {total}
        setTotal = {setTotal}
      />
      <Footer 
         setProducts={setProducts}
         setQuantity={setQuantity}
        total = {total}
        setTotal = {setTotal}
      />
    </div>
  );
}

export default App;
