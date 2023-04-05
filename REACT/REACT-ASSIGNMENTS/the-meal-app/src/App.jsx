import { useState } from 'react'
import './App.css'
import Axios from "axios"


function App() {
  const [name, setName] = useState("")
  const [mealData, setMealdata] = useState("")
  const [instructions ,setinstructions] = useState("")

const fetchData = ()=> {
  Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then((res) => {
    setMealdata(res.data.meals[0])
  })
 
  Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then((res) => {
    setinstructions(res.data.meals[0].strInstructions)
  })
}

let embed = mealData.strYoutube



let inst = instructions.split(/[\r\n\r\n]+/)

  return (
    <div>
      <h1 key={1}>Meal App</h1>
        <input className='' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => fetchData(name)}>Search</button>
        <h1>{mealData.strMeal}</h1>

<div>
<a href={embed} target= "_blank">full video</a>
</div>

<img src={mealData.strMealThumb} alt="image" />

{
          inst.map((inst)=>(
            <p key={Math.floor(Math.random() * 10000)}>{inst}</p>
          ))
        }

<a href=""></a>

<div>
  {
    (
      (
        ()=>{
      let head = []
      for (let i=0; i<1 ;i++){
        head.push(<h1 key={2}>Ingredients</h1>)
      }
      return head
    })())
  }       
  {
          ((()=>{
            let ings =[];
            for (let i=1; i<21 ;i++){
              if (mealData[`strIngredient${i}`] =="" ||mealData[`strIngredient${i}`] ==null || mealData[`strIngredient${i}`] ==NaN ) {
      
              }
              else{
                ings.push(<p>
                  <span>{mealData[`strIngredient${i}`]}</span>:
                  <span>{mealData[`strMeasure${i}`]}</span>
                </p>)
              }
            }
            return ings
          })())
        }
</div>



    </div>

  )
}

export default App


