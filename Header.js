import React from "react";
import "./Div.css";

function Header(props) {
  return (
    <div>
      <div className="header-display">
        <h1>REACTMEALS</h1>
        <button onClick={props.click}>
          <span>cart</span>
          <span>0</span>
        </button>
      </div>
      <img
        alt="imge"
        height="400px"
        width="1500px"
        src="https://www.shutterstock.com/image-photo/table-food-top-view-600nw-467823860.jpg"
      ></img>
    </div>
  );
}
export default Header;
