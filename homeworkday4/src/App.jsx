import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('Welcome message displayed')


useEffect(()=>{
  console.log(count)
},[ ])

  return (
    <>
  <h2>"Hello, user! Welcome to our site.</h2>
    </>
  )
}

export default App
