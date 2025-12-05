import { useState } from 'react'
import Acord from './components/Ghead'
import Crd from './components/crd'
const card=["😀","😁","😂","🤣","😃","😄","😅","😆","😀","😁","😂","🤣","😃","😄","😅","😆"]
function App() {
  return (
    <div>
      <Acord score='2' moves='3'/>
      <div className='card'>
        {card.map((cardss)=>
        <Crd card={cardss}/>)}
      </div>
    </div>
  )
}

export default App
