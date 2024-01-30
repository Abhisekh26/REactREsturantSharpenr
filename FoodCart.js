import  ReactDOM  from "react-dom";
import Cart from "./Cart";
// function Cart(props) {
// //   var cartItems = [{ food: "chicken tikka" }];
// //   return (
// //     <div className="foodcart">
// //       {cartItems.map((items) => (
// //         <>
// //         <h2>{items.food}</h2>
// //         <span> <h2>Total Amount </h2></span>
// //         <span> <h2>300</h2></span>
// //         </>
// //       ))}
// //       <div className="closebutton">
// //         <button onClick={props.hide}>Close</button> 
// //         <button >Order</button>
// //       </div>
// //     </div>
// //   );
// }
const portal = document.getElementById("rootwell");

function FoodCart(props) {
  return <div>{ReactDOM.createPortal(<Cart hidee={props.hide} />, portal)}</div>;
}
export default FoodCart;
