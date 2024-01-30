function Cart(props){
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
          <button onClick={props.hidee}>Close</button> 
          <button >Order</button>
        </div>
      </div>
    );
}
export default Cart