import { useEffect, useState } from 'react'

const RandomCocktail = () => {
  
    const [rdmCocktail, setRdmCocktail] = useState([])

    
        // récup un cocktail aléatoire
    const fetchCocktail = ()=>{
         fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setRdmCocktail(data.drinks)
            console.log('new rdm cocktail', data.drinks)
        })
    }
        
    useEffect(() => {
        fetchCocktail()},[])
    

    return (
        <section>
        <button onClick={fetchCocktail}>Get a new random cocktail</button>
            {rdmCocktail.map((cocktail) => (
                <div key={cocktail.idDrink}>
                    <h2>{cocktail.strDrink}</h2>
                    <p>{cocktail.strAlcoholic}</p>
                </div>
            ))}
            <h2>{rdmCocktail.strDrink}</h2>
            <p>{rdmCocktail.strAlcoholic}</p>
        </section>
    )
}

export default RandomCocktail