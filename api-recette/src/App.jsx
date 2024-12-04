import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import CocktailList from './CocktailList'
import RandomCocktail from './RandomCocktail'
import CocktailAll from './AllCocktails'
import AllCocktails from './AllCocktails'


function App() {
  const uesrName = 'John Doe';
  const [count, setCount] = useState(0)
  const [cocktails, setCocktails] = useState([]);

  // nécessaire pour ne pas loop à l'infini le render du composant m^^eme après mofif
  useEffect(() => {
    // récup des cocktails contenant la lettre e
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=e')
  .then((response) => {
      return response.json()   
  })
  .then((data) => {
      setCocktails(data.drinks)
      console.table( data.drinks)
  })
  },[])

  return (
    <>
      <Header uesrName={uesrName} />
      <CocktailList cocktails={cocktails}/>
      <RandomCocktail/>
      <AllCocktails cocktails={cocktails}/>
      <Footer />
    </>
  )
}

export default App
