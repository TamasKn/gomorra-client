

const Header = () => {

    const total_season = 4

    return(
        <header>
            <div className="header__logo"></div>
            <div className="header__sub-title">
                <p>Season 1-{total_season} and L'immortale</p>
            </div>
        </header>
    )
}

export default Header