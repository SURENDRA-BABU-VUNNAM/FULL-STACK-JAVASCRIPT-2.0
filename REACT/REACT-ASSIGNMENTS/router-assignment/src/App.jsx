import './App.css'
import {BrowserRouter as Router, Routes, Route ,Navigate,Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/myapps' element={<AboutUs/>} />       
      </Routes>
    </Router>
    </div>
  )
}



function  Home() {
  return (
    <div>
      <Link>Home</Link>
    </div>
  )
}


function AboutUs() {
  return (
    <Link to="/About">About Us</Link>
  )
}




export default App
