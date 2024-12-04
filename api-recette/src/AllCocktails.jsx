import CocktailCard from "./CocktailCard";

const AllCocktails = ({cocktails}) => {

    return (
        <section>
            <h1>All Cocktail </h1>
            {cocktails.map((cocktail) => {
                return <CocktailCard key={cocktail.idDrink} cocktail={cocktail}/>;
            })}
        </section>
    )
}

export default AllCocktails