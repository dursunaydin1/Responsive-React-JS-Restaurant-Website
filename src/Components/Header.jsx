import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's Great Time For A Goog Taste Of Burger</h3>
        <h1>
          <span>BURGER</span> FOR <br /> WEEK
        </h1>
        <p className="details">
          Lorem, ipsum dolar sit amet consectetur adipisicing elit.
        </p>
        <div className="header-btns">
          <a href="main" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
