import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import NavbarShop from "./NavbarShop";
import "./style/Shop.css";
import axios from "axios";
import ViewCart from "./ViewCart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "viewCart";

function Shop() {
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [priceRange, setPriceRange] = useState(50);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await axios.get(
          "http://localhost:8080/api/v1/shop"
        );
        setProductsData(
          responseData.data.filter((item) => item.price === priceRange)
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [priceRange]);

  useEffect(() => {
    let localCart = localStorage.getItem("cart");
    // turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []);

  const addToCart = (item) => {
    let cartCopy = [...cart];

    // //look for item in cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.id === item.id);

    //if item already exists
    if (existingItem) {
      existingItem.quantity += 1; //update item
    } else {
      //if item doesn't exist, simply add it
      item.quantity = 1;
      cartCopy.push(item);
    }

    //update app state
    setCart(cartCopy);

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const removeFromCart = (itemID) => {
    let cartCopy = [...cart];

    // Eroare la filtru nu merge cu !==
    // eslint-disable-next-line
    cartCopy = cartCopy.filter((item) => item.id != itemID);

    //update state and local
    setCart(cartCopy);
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const changePriceRange = (price) => {
    setPriceRange(price);
  };

  const sendOrder = () => {
    // customerEmail -> To do request form
    let orderDTO = [];
    for (let index = 0; index < cart.length; index++) {
      const element = {
        productId: cart[index].id,
        quantity: cart[index].quantity,
        customerEmail: "customeremail@yahoo.com",
      };
      orderDTO.push(element);
    }

    sendOrderToServer(orderDTO).then(function name(params) {
      alert("Your order reference \n" + params);
      //update state and local
      setCart([]);
      let cartCopy = [];
      let cartString = JSON.stringify(cartCopy);
      localStorage.setItem("cart", cartString);
      window.location.replace("/shop");
    });
  };

  const sumOfQuantity = cart.reduce((a, v) => (a = a + v.quantity), 0);

  return (
    <>
      <NavbarShop
        itemsInCart={sumOfQuantity}
        changePriceRange={changePriceRange}
        navigateTo={() => navigateTo(PAGE_CART)}
      />
      <div className="container-fluid mt-2 mb-5">
        <div className="products">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row g-3">
                {page === PAGE_PRODUCTS && (
                  <>
                    {productsData.map((item) => (
                      <CardProduct
                        key={item.id}
                        item={item}
                        addToCart={() => addToCart(item)}
                      />
                    ))}
                  </>
                )}
                {page === PAGE_CART && (
                  <>
                    <ViewCart
                      items={cart}
                      removeFromCart={removeFromCart}
                      sendOrder={sendOrder}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
async function sendOrderToServer(dataOrder) {
  try {
    const result = await axios.post(
      "http://localhost:8080/api/v1/order",
      dataOrder
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
