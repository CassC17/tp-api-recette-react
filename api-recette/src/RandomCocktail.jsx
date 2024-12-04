import { useEffect, useState } from 'react'

const RandomCocktail = () => {
  
    const [rdmCocktail, setRdmCocktail] = useState([])

    
        // récup un cocktail aléatoire
    const fetchCocktail = async()=>{
         const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
         const data = await response.json()
         setRdmCocktail(data.drinks[0])
    }
        
    useEffect(() => {
        fetchCocktail()},[]) //tab vide = exec après 1er rendu

    if (cocktail.length === 0){
        return <p>Loading...</p>
    } // lors du 1er rendu
    

    return (
        <section>
        <button onClick={fetchCocktail}>Get a new random cocktail</button>
            {rdmCocktail.map((cocktail) => (
                <div key={cocktail.idDrink}>
                    <h2>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    <p>{cocktail.strInstructions}</p>
                    <ul>
                      {Object.keys(cocktail)
                          .filter(key => key.startsWith('strIngredient') && cocktail[key])
                          .map((key, index) => (
                              <li key={index}>
                                  {cocktail[key]} - {cocktail[strMeasure${index + 1}]}
                              </li>
                          ))}
                  </ul>
                </div>
            ))}
        </section>
    )
}

export default RandomCocktail