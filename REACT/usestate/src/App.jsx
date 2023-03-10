import { useEffect, useState } from 'react'
import Card from './Card'
import Axios from "axios"

// function SuperHeros(){
//   const [hero, setHero] = useState(["Superman", "Spiderman", "Ironman"])
//   const [name, setName] = useState(() => "antman")

//   const onAddName = () => {
//     setHero([...hero, name])
//     setName("")
//   }
//   return(
//     <div>
//       <ul>
//         {hero.map((h) => (
//           <li key={h}>{h}</li>
//         ))}
//       </ul>
//       <input
//       type="text"
//       value={name}
//           onChange={(e) => setName(e.target.value)}
//       />
//       <button
//       onClick={onAddName}
//       >Add value</button>
//     </div>
//   )
// }


// function Counter(){
//   let [count, setCount] = useState(100)

//   function oneUp(){
//      setCount(count + 1)
//   }

//   return(
//     <div>
//       <button
//       onClick={oneUp}
//       >Count : {count}</button>

//     </div>
//   )
// }

// function App() {
  

//   return (
//     <>

//     <Counter />
//     <SuperHeros/>
//     </>
//   );
// }

// useEffect

function App() {

  const [details,setDetails] = useState({})

  const fetchDetails = async ()=>{
    const {data}= await Axios.get("https://randomuser.me/api") 
    console.log("response",data);
    const details = data.results[0]
    setDetails(details)
  }
  
  useEffect(()=>{
    fetchDetails()
  },[])

  let list = ["Surendra","Binge-on","Control"]
  return (
    <>
    <h1>apple</h1>
    <Card myname="Surendra" list={list} details={details}/>
    <button onClick={fetchDetails}>details</button>
    </>
  )
}

export default App
