import React from "react";

function ViewCart({ items, removeFromCart }) {
  function sumOfTotal() {
    let arr = [0];
    for (let index = 0; index < items.length; index++) {
      const element = items[index].quantity * items[index].price;
      arr.push(element);
    }
    return arr.reduce((result, number) => result + number);
  }
  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-lg-12 col-md-12 col-12">
          <table
            id="shoppingCart"
            className="table table-condensed table-responsive"
          >
            <thead>
              <tr>
                <th style={{ width: "60%" }}>Product</th>
                <th style={{ width: "12%" }}>Price</th>
                <th style={{ width: "10%" }}>Quantity</th>
                <th style={{ width: "16%" }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-md-3 text-left">
                        <img
                          src={item.urlPicture}
                          alt=""
                          className="img-fluid d-none d-md-block rounded mb-2 shadow "
                        ></img>
                      </div>
                      <div className="col-md-9 text-left mt-sm-2">
                        <h4>{item.name}</h4>
                        <p className="font-weight-light">
                          {item.description.substring(0, 35)}...
                        </p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">{item.price} RON</td>
                  <td data-th="Quantity">{item.quantity}</td>
                  <td className="actions" data-th="">
                    <div className="text-right">
                      <button
                        onClick={() => removeFromCart(`${item.id}`)}
                        className="btn btn-white border-secondary bg-white btn-md mb-2"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="float-right text-right">
            <h4>Total:</h4>
            <h1>{sumOfTotal()} RON</h1>
          </div>
        </div>
      </div>
      <div className="row mt-4 d-flex align-items-center">
        <div className="col-sm-6 order-md-2 text-right">
          <a href="/shop" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">
            Checkout
          </a>
        </div>
        <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
          <a href="/shop">{"<--"} Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}

export default ViewCart;
