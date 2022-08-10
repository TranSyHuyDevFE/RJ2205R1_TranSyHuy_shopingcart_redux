import React, { useEffect, useState } from "react";
import Product from "./Product/index";
import Cart from "./Cart/index";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/api/users",
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        throw err;
      });
  });
  return (
    <Provider store={store}>
      <div className="container d-flex">
        {product.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div>
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
