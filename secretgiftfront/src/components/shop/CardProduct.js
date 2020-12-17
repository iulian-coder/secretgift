import React from "react";
import "./style/Shop.css";

function CardProduct({ addToCart, item }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={item.urlPicture} className="card-img-top" alt={item.name}></img>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <span className="font-weight-bold">{item.name}</span>
            <span className="font-weight-bold">{item.price} RON</span>
          </div>
          <p className="card-text mb-1 mt-1">{item.description}</p>
        </div>
        <hr></hr>
        <div className="card-body">
          <div className="text-center buttons">
            <button className="btn btn-dark" onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
