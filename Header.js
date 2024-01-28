import React from "react";
import "./Div.css";

function Header() {
  return (
    <div>
      <div className="header-display">
        <h1>REACTMEALS</h1>
        <li>
          <label><h3>Your Cart</h3></label>
          <input type="text" size="2" VALUE="0"></input>
        </li>
      </div>
      <img alt="imge" height="100px" width="1500px" src="https://www.shutterstock.com/image-photo/table-food-top-view-600nw-467823860.jpg"></img>
    </div>
  );
}
export default Header;
