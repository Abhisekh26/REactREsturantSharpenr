import Header from "./Components/Header";
import Summary from "./Components/Summary";
import DisplayFood from "./Components/DisplayFood";
import "./Components/Div.css"
function App() {
  const menu=[{
    dish:"Punjabi Chicken",
    cuisine:"punjabi",
    price:200,
  },
  {
    dish:"Momos",
    cuisine:"Nepali",
    price:100,
  },
  {
    dish:"Fried Fish",
    cuisine:"continetal",
    price:150,
  },
  {
    dish:"Noodles",
    cuisine:"chinese",
    price:100,
  },
]
  return (
    <div>
      <Header></Header>
      <Summary></Summary>
      <DisplayFood menu = {menu}></DisplayFood>
    </div>
  );
}

export default App;
