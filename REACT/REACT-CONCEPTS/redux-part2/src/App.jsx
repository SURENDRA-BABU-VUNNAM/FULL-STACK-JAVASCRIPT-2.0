import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Components from './components/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Components/>
    </div>
  )
}

export default App
