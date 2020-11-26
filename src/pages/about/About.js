import '../../css/about.css'

const About = () => {
    return(
        <div className="content-wrapper">
            <section className="about__container">
                <h1>Gomorra-API</h1>
                <p>
                    Gomorra is an italian TV show about the neapolitan organized crime, called camorra. The drama follows
                    Ciro and Gennaro in the violent and ruthless life of power, money and drugs.
                </p>
                <p>This API has been made as a JSON placeholder for development purposes.</p>
                <p>
                    I do not own any rights for the Logo or the images. All visual content is property of
                    Fandango, Cattleya, BETA and HBO. The series distributed by SKY Vision.
                </p>
                <p>
                    Feel free to make any Pull Request.
                    For any copyright claim, please open an issue in the&nbsp;
                    <a href="https://github.com/TamasKn/gomorra-client"
                        target="_blank" rel="noreferrer noopener">
                        repository.
                    </a>
                </p>
            </section>

        </div>
    )
}

export default About