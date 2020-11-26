import '../../css/main.css'
import github_logo from '../../static/GitHub-Mark-Light-120px-plus.png'

const Footer = () => {
    return(
        <footer>
            <a href="/about">About</a>
            <a href="https://github.com/TamasKn/gomorra-api" target="_blank" rel="noreferrer noopener">
                <img className="footer__github" src={github_logo} alt="Github logo" />
            </a>
            <a href="/terms">Terms</a>
        </footer>
    )
}

export default Footer