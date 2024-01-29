import "./Div.css"
function DisplayFood({menu}){
    console.log(menu)
    return(
        <div className="menu-display">
        {menu.map((item) =>(
          <>
          <h1>{item.dish}</h1>
          <h2>{item.cuisine}</h2>
          <p>Rs{item.price}</p>
          <form>
            <label>Amount</label>
            <input type="number" value="1" size= "2"></input>
            <button>Add</button>
          </form>
          </>
      
        ))}
        </div>
    )
}
export default DisplayFood