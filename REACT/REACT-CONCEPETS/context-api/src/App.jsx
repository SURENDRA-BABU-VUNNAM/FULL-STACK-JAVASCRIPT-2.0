import { useState , createContext} from "react";
import Navbar from "../components/navbar";
import Herosection from "../components/heroSection";

export const myContext = createContext()

function App() {
  const [name,setName] = useState("");
  const [color,setColor] = useState("");

  const myname = (event)=>{
    setName(event.target.value)
  }
  
  const myColor = (event)=>{
    setColor(event.target.value)
  }

  return (
  <myContext.Provider value={{name, color}}> 
  <Navbar/>
  <form>
    <input type={"text"} placeholder="Enter your name" value={name} onChange={myname} />
    <input type={"text"} placeholder="Enter your color" value={color} onChange={myColor} />
  </form>
  <Herosection/>
  </myContext.Provider>
  )
}

export default App
