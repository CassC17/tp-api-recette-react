const CocktailCard = ({cocktail}) => {
    return (
        <article>
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <p>{cocktail.strInstructions}</p>
                  <ul>
                      {Object.keys(cocktail)
                          .filter(key => key.startsWith('strIngredient') && cocktail[key])
                          .map((key, index) => (
                              <li key={index}>
                                  {cocktail[key]} - {cocktail['strMeasure${index + 1}']}
                              </li>
                          ))}
                  </ul>
        </article>
    );
}

export default CocktailCard 