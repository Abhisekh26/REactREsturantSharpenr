import CartContext from "./cart-context"
function CartProvider(props){

    function addItemTocartHandler(item){

    }
    function removeItemCartHandler(id){

    }

const cartContext={
    items:[],
    totalAmount:0,
    addItem:addItemTocartHandler,
    removeItem:removeItemCartHandler 
}

 return<CartContext.Provider value={cartContext}>
    {props.children}
 </CartContext.Provider>
}
export default CartProvider