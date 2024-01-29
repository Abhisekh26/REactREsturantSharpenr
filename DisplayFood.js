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
          </>
        ))}
        </div>
    )
}
export default DisplayFood