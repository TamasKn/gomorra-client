import {useState, useEffect} from 'react'
import CharacterCard from "../../components/characterCard/characterCard"
import '../../css/home.css'
import axios from 'axios'

const Home = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get("https://gomorra-api.herokuapp.com/characters/placeholder/")
            setCharacters(resp.data)
        }

        fetchData()

    }, [])

    return (
        <div className="content-wrapper">
            <section className="home__container">
                {
                    (characters.length !== 0)
                    ?
                        characters.data.map( el => (
                            <CharacterCard
                                key={el.id}
                                name={el.name}
                                nickname={el.nickname}
                                occupation={el.occupation}
                                clan={el.clan}
                                actor={el.actor}
                                image={el.picture} />
                        ))
                    : <h3>LOADING...</h3>
                }

            </section>
        </div>
    );
}

export default Home;