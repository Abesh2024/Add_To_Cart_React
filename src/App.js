import { useState } from "react";
import './App.css';
import Header from './Components/Header';
import Container from './Components/Containers';
import ProductCard from './Components/ProductCard';
import Footer from "./Components/Footer";

const ProductList=[
  {
      "id": "rec1JZlfCIBOPdcT2",
      "title": "Samsung Galaxy S8",
      "price": "399.99",
      "img": "https://www.course-api.com/images/cart/phone-1.png",
      "amount": 1
  },
  {
      "id": "recB6qcHPxb62YJ75",
      "title": "google pixel",
      "price": "499.99",
      "img": "https://www.course-api.com/images/cart/phone-2.png",
      "amount": 1
  },
  {
      "id": "recdRxBsE14Rr2VuJ",
      "title": "Xiaomi Redmi Note 2",
      "price": "699.99",
      "img": "https://www.course-api.com/images/cart/phone-3.png",
      "amount": 1
  },
  {
      "id": "recwTo160XST3PIoW",
      "title": "Samsung Galaxy S7",
      "price": "599.99 ",
      "img": "https://www.course-api.com/images/cart/phone-4.png",
      "amount": 1
  }
]
function App() {
  const [totalcount, settotalCount] = useState(4);
  const onCardUpdate = (type) => {
    if (type === "INCREASE") {
      settotalCount(totalcount + 1);
    } else if (type === "DECREASE") {
      settotalCount(totalcount - 1);
    }
  }
  return (
    <div className="App">
      <Header totalCartCount={totalcount} />
      <Container />
      <ProductCard productName={ProductList[0].title} productPrice={ProductList[0].price} productImage={ProductList[0].img} onCardUpdate={onCardUpdate} ></ProductCard>
      <ProductCard productName={ProductList[1].title} productPrice={ProductList[1].price} productImage={ProductList[1].img} onCardUpdate={onCardUpdate}></ProductCard>
      <ProductCard productName={ProductList[2].title} productPrice={ProductList[2].price} productImage={ProductList[2].img} onCardUpdate={onCardUpdate}></ProductCard>
      <ProductCard productName={ProductList[3].title} productPrice={ProductList[3].price} productImage={ProductList[3].img} onCardUpdate={onCardUpdate}></ProductCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
