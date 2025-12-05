import { useState } from 'react'
import Acord from './components/Ghead'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Acord />
      <h1>hello</h1>
    </>
  )
}

export default App
