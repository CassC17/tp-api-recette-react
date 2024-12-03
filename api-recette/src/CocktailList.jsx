import { useEffect, useState } from 'react'

const CocktailList = () => {

    const [cocktails, setCocoktails] = useState([])
    

   // nécessaire pour ne pas loop à l'infini le render du composant m^^eme après mofif
    useEffect(() => {
        // récup des cocktails contenant la lettre e
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=e')
    .then((response) => {
        return response.json()   
    })
    .then((data) => {
        setCocoktails(data.drinks.slice(0,10))
        console.table( data.drinks.slice(0,10))
    })
    },[])
    

  return (
    <section>
        <h1>Cocktail List</h1>
        {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>
                <h2>{cocktail.strDrink}</h2>
                <p>{cocktail.strAlcoholic}</p>
            </div>
        ))}
    </section>
  )
}

export default CocktailList