import React, { useEffect, useState } from "react";
import { commerce } from "./Backend/Commerce";
import { NavBar, Products } from "./components";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Products products={products} />
    </div>
  );
}

export default App;
