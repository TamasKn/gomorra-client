import '../../css/main.css'

const Header = () => {

    const total_seasons = 4

    return(
        <header>
            <div className="header__logo"></div>
            <div className="header__sub-title">
                <p>Data of season 1-{total_seasons} and L'immortale</p>
            </div>
        </header>
    )
}

export default Header