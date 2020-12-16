import React from "react";
import "./style/Shop.css";

const PAGE_CART = "viewCart";

function NavbarTop({ itemsInCart, navigateTo }) {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
        <div className="container-fluid d-flex">
          {" "}
          <a className="navbar-brand" href="/shop">
            Secret Gift Shop
          </a>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              {" "}
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#50"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                50 RON
              </a>{" "}
            </li>
            <li className="nav-item" role="presentation">
              {" "}
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#150"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                150 RON
              </a>{" "}
            </li>
            <li className="nav-item" role="presentation">
              {" "}
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#200"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                200 RON
              </a>{" "}
            </li>
            <li className="nav-item" role="presentation">
              {" "}
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#shop"
                onClick={() => navigateTo(PAGE_CART)}
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                View Cart({itemsInCart})
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarTop;
