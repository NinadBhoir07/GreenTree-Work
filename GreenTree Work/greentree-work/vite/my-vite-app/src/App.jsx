import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello!</h1>
      <p>This is my first vite+react page <a href='https://vite.dev/guide/' target="_blank">Learn More</a></p>
    </>
  )
}

export default App
