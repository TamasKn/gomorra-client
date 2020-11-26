import {useState, useEffect} from 'react'
import CharacterCard from "../../components/characterCard/characterCard"
import '../../css/home.css'
import axios from 'axios'

const Home = () => {

    const [characters, setCharacters] = useState([])
    const [descHeight, setDescHeight] = useState([])

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get("https://gomorra-api.herokuapp.com/characters/placeholder")
            setCharacters(resp.data)
        }

        fetchData()

    }, [])


    useEffect( () => {

        if(characters.length !== 0) {
            setDescHeight(getDivHeight())
        }
    }, [characters])

    const getDivHeight = () => {
        const divs = document.getElementsByClassName('card--description')
        const heightArr = []
        for(const [key, value] of Object.entries(divs)) {
            heightArr.push(value.scrollHeight)
        }
        return heightArr
    }


    return (
        <div className="content-wrapper">
            <section className="home__container">
                {
                    (characters.length !== 0)
                    ?
                        characters.data.map( (el, idx) => (
                            <CharacterCard
                                key={el.id}
                                name={el.name}
                                nickname={el.nickname}
                                occupation={el.occupation}
                                clan={el.clan}
                                actor={el.actor}
                                image={el.picture}
                                height={descHeight[idx]}
                            />
                        ))
                    : <h3>LOADING...</h3>
                }

            </section>
        </div>
    );
}

export default Home;