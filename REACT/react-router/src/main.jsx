import React from 'react'
import ReactDOM from 'react-dom/client'
import 
{ BrowserRouter as Router,
  Routes,
  Route ,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
  } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/myapps' element={<Navigate replace to="/learn" />}/>
    <Route path='/learn' element={<Learn/>}>
      <Route path='courses' element={<Courses/>}>
        <Route path=':pathId' element={<PathId/>} />
      </Route>
      <Route path='bundles' element={<Bundles/>}/>
    </Route>
    <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
  </Router>,
)

function Home(){
  return(
    <div>
      <h1>Home route</h1>
    </div>
  )
}

function Learn(){
  return(
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed hear</h4>
      <Link to="/learn/courses">Courses</Link>{" "}|
      <Link to="/learn/bundles">Bundle</Link>
      <Outlet/>
    </div>
  )
}

function Courses(){
  let CourseList = ["react","vue","next","node.js"];
  let RandomCourse = CourseList[Math.floor(Math.random()*CourseList.length)];

  return(
    <div>
      <h1>Courses</h1>
      <h4>Courses cards</h4>
      <p>more courses</p>
      <NavLink style={({isActive})=>{
        return {
          backgroundColor : isActive ? "pink" : "Yellow"
        }
      }} to={`/learn/courses/${RandomCourse}`}>{RandomCourse}</NavLink>|
      <NavLink to={`/learn/courses/test`}>test</NavLink>
      <Outlet/>
    </div>
  )
}

function Bundles(){
  return(
    <div>
      <h1>Bundles</h1>
      <h4>Bundles cards</h4>
    </div>
  )
}

function PathId(){
  const navigate = useNavigate()
  const {pathId} = useParams()
  return(
    <div>
      <h1>URL Params is: {pathId}</h1>
      <button onClick={()=>{
        navigate("/dashboard", {state: pathId})
      }}>Price</button>
          <Link to={"/dashboard"} state ={"Surendra"}>Test link</Link>
    </div>

  )
}


function DashBoard(){
  const location =useLocation()
  return(
    <div>
      <h1>The info that i want to bring is {location.state} </h1>
    </div>
  )
}