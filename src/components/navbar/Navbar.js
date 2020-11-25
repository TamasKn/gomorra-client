import '../../css/main.css'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><a className="nav__link" href="/">Home</a></li>
                <li><a className="nav__link" href="/docs" >Documentation</a></li>
            </ul>
        </nav>
    )
}

export default Navbar