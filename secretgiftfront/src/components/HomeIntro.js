import React from "react";

function HomeIntro() {
  return (
    <div>
      <div className="window">
        <div className="santa">
          <div className="head">
            <div className="face">
              <div className="redhat">
                <div className="whitepart"></div>
                <div className="redpart"></div>
                <div className="hatball"></div>
              </div>
              <div className="eyes"></div>
              <div className="beard">
                <div className="nouse"></div>
                <div className="mouth"></div>
              </div>
            </div>
            <div className="ears"></div>
          </div>
          <div className="body"></div>
        </div>
      </div>
      <div className="message">
        <h1>Santa Secret Gift Shop</h1>
        <h2 className="message2">
          <a href="/picker">Click to Enter the shop</a>
        </h2>
      </div>
    </div>
  );
}

export default HomeIntro;
