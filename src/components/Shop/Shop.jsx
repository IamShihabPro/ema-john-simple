import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    const storedCart = getShoppingCart()
    const savedCart = []
    // step:1 get id 
    for(let id in storedCart){
     
      // step:2 get the product by using id
      const addedProduct = products.find(product=> product.id === id)
      if(addedProduct){
        // step:3 add quantity of the product
        const quantity = storedCart[id]
        addedProduct.quantity = quantity

        // step:4 add the added to the saved cart
        savedCart.push(addedProduct)
      }
    }
    // step:5 set the cart
    setCart(savedCart)
  } , [products])

  const handleToAddCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = []
    // if the product doesn't exits in the cart then quantity =1

    const exits = cart.find(pd=> pd.id === product.id)
    if(!exits){
      product.quantity=1
      newCart = [...cart, product];
    }
    else{
      exits.quantity= exits.quantity + 1
      const remaining = cart.filter(pd=> pd.id !== product.id)
      newCart= [...remaining, exits]
    }
    setCart(newCart);
    addToDb(product.id)
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleToAddCart={handleToAddCart}
          ></Product>
        ))}
      </div>

      <div className="card-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
