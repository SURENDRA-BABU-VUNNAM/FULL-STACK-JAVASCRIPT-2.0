import './App.css'
import Home  from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Header from './Header'
import Footer from "./Footer"
import {Routes, Route} from "react-router-dom"





function App() {
  return (
    <>

    <Routes>  
      <Route path='/' element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element ={<Contact/>}/>
      </Route>
    </Routes>
    <Footer/>
    </>
  )
}




export default App
