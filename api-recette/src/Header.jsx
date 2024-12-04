const Header = ({uesrName}) => { 

    return (
      <>
        <header>
          <nav>
            <ul>
                <li> Acceuil </li>
                <li> Favoris </li>
                <p>vous etes {uesrName}</p>
            </ul>
          </nav>
        </header>
      </>
    )
  }

export default Header