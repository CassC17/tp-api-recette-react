import CocktailCard from "./CocktailCard";

const CocktailAll = ({cocktails}) => {

    return (
        <section>
            <h1>All Cocktail </h1>
            {cocktails.map((cocktail) => {
                return <CocktailCard cocktail={cocktail}/>;
            })}
        </section>
    )
}

export default CocktailAll