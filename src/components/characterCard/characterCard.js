import {useState} from 'react'
import '../../css/characterCard.css'

const CharacterCard = ({image, name, nickname, occupation, clan, actor, height}) => {

    const [cardHover, setCardHover] = useState(false)

    const nameFormat = (name, nickname) => {
        if(!name) {
            return <h2>" {nickname} "</h2>
        } else if(!nickname) {
            return <h2>{name}</h2>
        } else {
            return(
                <>
                    <h2>{name}</h2>
                    <h3>" {nickname} "</h3>
                </>
            )
        }
    }

    return(
        <div className="card--container"
             onMouseEnter={() => setCardHover(true)}
             onMouseLeave={() => setCardHover(false)}
        >

            <div className="card--image"
                 style={{backgroundImage: `url(${image})`}}
            />

            <div className="card--description"
                style={(cardHover) ? {height: `${height}px`} : {height: '17%'}}
            >
                <div className="card--description-name">
                    {nameFormat(name, nickname)}
                </div>
                <div className="card--description-infos">
                    <p>Occupation: {occupation}</p>
                    <p>Clan: {clan}</p>
                    <p>Portrayed by: {actor}</p>
                </div>

            </div>

        </div>
    )
}

export default CharacterCard