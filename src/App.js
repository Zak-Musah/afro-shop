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
  const fetchCarts = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCarts();
  }, []);
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  console.log(cart);

  return (
    <div>
      <NavBar allItems={cart.total_items} />
      <Products products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
