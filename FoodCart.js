import  ReactDOM  from "react-dom";

function Cart() {
  var cartItems = [{ food: "chicken tikka" }];
  return (
    <div className="foodcart">
      {cartItems.map((items) => (
        <>
        <h2>{items.food}</h2>
        <span> <h2>Total Amount </h2></span>
        <span> <h2>300</h2></span>
        </>
      ))}
      <div className="closebutton">
        <button>Close</button> 
        </div>
        <div className="order">
        <button>Order</button>
      </div>
    </div>
  );
}
const portal = document.getElementById("rootwell");

function FoodCart() {
  return <div>{ReactDOM.createPortal(<Cart />, portal)}</div>;
}
export default FoodCart;
