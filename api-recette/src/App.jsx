import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import CocktailList from './CocktailList'
import RandomCocktail from './RandomCocktail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CocktailList/>
      <RandomCocktail/>
      <Footer />
    </>
  )
}

export default App
