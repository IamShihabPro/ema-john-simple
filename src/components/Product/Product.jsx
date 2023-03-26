import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { img, name, seller, quantity, price, ratings } = props.product;
  const handleToAddCart = props.handleToAddCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Menufacturer: {seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button
        onClick={() => handleToAddCart(props.product)}
        className="btn-cart"
      >
        Add to Cart{" "}
      </button>
    </div>
  );
};

export default Product;
