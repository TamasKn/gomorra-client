import { useEffect } from 'react'
import '../../css/docs.css'
import SingleLine from '../../components/codeContainer/SingleLine'
import MultiLines from "../../components/codeContainer/MultiLines";
import blocks from '../../static/code_blocks/FileIndexes'


const Documentation = () => {

    useEffect(() => {
        displayCodeBlocks()
    })

    // Function that reads code block sample from local file
    // Wanted to avoid installing 3rd party library for code block display
    async function readLocalFile(file) {
        const resp = await fetch(file)
        const data = await resp.text()

        return data
    }

    async function displayCodeBlocks() {

        // Injects the code blocks into the HTML tag (MultiLines component)
        const divs = document.getElementsByClassName('code__multi-line')
        divs[0].innerHTML = await readLocalFile(blocks.cb1).then(res => res)
        divs[1].innerHTML = await readLocalFile(blocks.cb2).then(res => res)
        divs[2].innerHTML = await readLocalFile(blocks.cb3).then(res => res)
        divs[3].innerHTML = await readLocalFile(blocks.cb4).then(res => res)
        divs[4].innerHTML = await readLocalFile(blocks.cb5).then(res => res)
        divs[5].innerHTML = await readLocalFile(blocks.cb6).then(res => res)
    }


    return (
        <div className="content-wrapper">

            <div className="docs__title">
                <h1>Documentation</h1>
            </div>

            <div className="docs__container">

                <div className="docs__sidebar">
                    <ul>
                        <li><a href="#section-1">Base URI</a></li>
                        <li><a href="#section-2">Endpoints</a></li>
                        <li className="docs__sidebar--sublist">
                            <a href="#section-2.1">Characters</a>
                        </li>
                        <li className="docs__sidebar--sublist">
                            <a href="#section-2.2">Deaths</a>
                        </li>
                        <li className="docs__sidebar--sublist">
                            <a href="#section-2.3">Episodes</a>
                        </li>
                        <li><a href="#section-3">Usage</a></li>
                        <li><a href="#section-4">Install locally</a></li>
                    </ul>
                </div>

                <main>
                    <section id="section-1">
                        <h1>Base URI</h1>
                        <hr/>

                        <SingleLine>{"https://gomorra-api.herokuapp.com/"}</SingleLine>

                    </section>

                    <section id="section-2">
                        <h1>Endpoints</h1>
                        <hr/>

                        <SingleLine>{"/characters"}</SingleLine>
                        <SingleLine>{"/deaths"}</SingleLine>
                        <SingleLine>{"/episodes"}</SingleLine>

                    </section>

                    <section id="section-2.1">
                        <h2>Characters</h2>
                        <br/>

                        <table border="1">
                            <tr>
                                <th>Attribute</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                            <tr><td>id</td><td>integer</td><td>Unique ID for each character</td></tr>
                            <tr><td>name</td><td>string</td><td>Formal name of the character</td></tr>
                            <tr><td>nickname</td><td>string</td><td>Nickname, pet name of a character</td></tr>
                            <tr><td>occupation</td><td>string</td><td>Job title or position in a clan/gang</td></tr>
                            <tr><td>clan</td><td>string</td><td>Name of the clan(s) what the character has relation</td></tr>
                            <tr><td>picture</td><td>string</td><td>Image URI of character</td></tr>
                            <tr><td>status</td><td>string</td><td>Character alive or dead Alive or Deceased</td></tr>
                            <tr><td>seasons</td><td>array</td><td>List of integer which season has the character appearance</td></tr>
                            <tr><td>actor</td><td>string</td><td>Name of the actor/actress the character portrayed by</td></tr>
                        </table>
                        <br/><br/>

                        <h3>Get all characters</h3>
                        <SingleLine>{"/characters"}</SingleLine>

                        <h3>Characters placeholder. Returns 10 random characters. Use as a placeholder in development project</h3>
                        <SingleLine>{"/characters/placeholder"}</SingleLine>

                        <h3>Get single character by ID</h3>
                        <SingleLine>{"/characters/id/1"}</SingleLine>
                        <MultiLines />

                        <h3>Get character(s) by name. It will search in both name and nickname</h3>
                        <SingleLine>{"/characters/name/track"}</SingleLine>
                        <MultiLines />

                        <h3>Get character(s) by their clan name</h3>
                        <SingleLine>{"/characters/clan/conte"}</SingleLine>

                        <h3>Get character(s) by their status - accepts only
                            &nbsp;<span className="inline">alive</span> or
                            &nbsp;<span className="inline">deceased</span> keywords
                        </h3>
                        <SingleLine>{"/characters/status/alive"}</SingleLine>

                        <h3>Get characters by which season had appearance</h3>
                        <SingleLine>{"/characters/season/2"}</SingleLine>


                    </section>
                    <section id="section-2.2">
                        <h2>Deaths</h2>
                        <br/>

                        <table border="1">
                            <tr>
                                <th>Attribute</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                            <tr><td>id</td><td>integer</td><td>Unique ID for each death event</td></tr>
                            <tr><td>victim</td><td>string</td><td>Name or nickname of the character has been deceased</td></tr>
                            <tr><td>cause</td><td>string</td><td>Reason of death</td></tr>
                            <tr><td>perpetrator</td><td>string</td><td>Name or nickname of the the character who caused directly or indirectly</td></tr>
                            <tr><td>body_count</td><td>integer</td><td>Number of dead happened during the event</td></tr>
                            <tr><td>season</td><td>integer</td><td>Season number where the event occured</td></tr>
                            <tr><td>episode</td><td>integer</td><td>Episode number where the event occured</td></tr>
                        </table>
                        <br/><br/>

                        <h3>Get all deaths</h3>
                        <SingleLine>{"/deaths"}</SingleLine>

                        <h3>Get certain death by ID</h3>
                        <SingleLine>{"/deaths/id/56"}</SingleLine>
                        <MultiLines />

                        <h3>Get death(s) by the victim's name or nickname</h3>
                        <SingleLine>{"/deaths/victim/capae"}</SingleLine>
                        <MultiLines />

                        <h3>Get death(s) by perpetrator's name or nickname</h3>
                        <SingleLine>{"/deaths/perpetrator/pietro"}</SingleLine>

                        <h3>Get death(s) by certain season</h3>
                        <SingleLine>{"/deaths/season/4"}</SingleLine>

                        <h3>Get death(s) by the season and episode number</h3>
                        <SingleLine>{"/deaths/season/4/episode/9"}</SingleLine>

                    </section>

                    <section id="section-2.3">
                        <h2>Episodes</h2>
                        <br/>

                        <table border="1">
                            <tr>
                                <th>Attribute</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                            <tr><td>id</td><td>integer</td><td>Unique ID for each episodes</td></tr>
                            <tr><td>title</td><td>string</td><td>Title of the episode</td></tr>
                            <tr><td>season</td><td>integer</td><td>Season number</td></tr>
                            <tr><td>episode</td><td>integer</td><td>Episode numberd</td></tr>
                        </table>
                        <br/><br/>

                        <h3>Get all episodes</h3>
                        <SingleLine>{"/episodes"}</SingleLine>

                        <h3>Get episodes by season number</h3>
                        <SingleLine>{"/episodes/season/3"}</SingleLine>

                        <h3>Get episode by the season and episode number</h3>
                        <SingleLine>{"/episodes/season/2/episode/9"}</SingleLine>
                        <MultiLines />

                        <h3>Get episode by its title</h3>
                        <SingleLine>{"/episodes/title/uccidere"}</SingleLine>
                        <MultiLines />

                    </section>

                    <section id="section-3">
                        <h1>Usage and contribution</h1>
                        <hr/><br/>
                        <p>
                            The API is free to use with the limit of 3000 requests/day.
                            If exceeds it will send the 429 status code.
                        </p>
                        <p>
                            Feel free to make Pull Request if you like to add or correct content.
                        </p>
                        <br/>

                        <h3>Error fix</h3>
                        <div className="docs__order">
                            <p>1. Open a new issue</p>
                            <p>2. Assign yourself</p>
                            <p>3. Include the issue number in the PR</p>
                            <p>4. Make the Pull request</p>
                        </div>

                    </section>
                    <section id="section-4">
                        <h1>Install locally</h1>
                        <hr/><br/>

                        <div className="docs__order">
                            <p>1. <span className="inline">npm install</span></p>
                            <p>2. <span className="inline">npm run dev</span></p>
                            <p>3. Open <span className="inline">localhost:4000</span></p>
                        </div>

                    </section>

                </main>
            </div>
        </div>
    )
}

export default Documentation