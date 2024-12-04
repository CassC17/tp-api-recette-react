import CocktailCard from './CocktailCard'

const CocktailList = ({cocktails}) => {

  return (
    <section>
        <h1>Cocktail List</h1>
        {cocktails.slice(0,10).map((cocktail) => {
            return <CocktailCard key={cocktail.idDrink} cocktail={cocktail}/>;
        })}
    </section>
  )
}

export default CocktailList