import { useState } from 'react'

const CocktailList = () => {

    const [cocktails, setCocoktails] = useState([])

    // récup des cocktails
    fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        setCocoktails(data);
    })

  return (
    <section>
        <h1>Cocktail List</h1>
        {cocktails.map((cocktail) => (
            <div key={cocktail.id}>
                <h2>{cocktail.strDrink}</h2>
                <p>{cocktail.strAlcoholic}</p>
            </div>
        ))}
    </section>
  )
}

export default CocktailList