import { useEffect, useState } from 'react'
import CocktailCard from './CocktailCard'

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
            {rdmCocktail.map((cocktail) => {
                return <CocktailCard cocktail={cocktail}/>;
            })}
        </section>
    )
}

export default RandomCocktail