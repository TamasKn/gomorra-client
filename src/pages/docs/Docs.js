import { useEffect } from 'react'
import '../../css/docs.css'
import blocks from '../../static/code_blocks/FileIndexes'
import Characters from "./sections/characters";
import Deaths from "./sections/deaths";
import Episodes from "./sections/episodes";
import BaseURI from "./sections/baseURI";
import Endpoints from "./sections/endpoints";
import Usage from "./sections/usage";
import Install from "./sections/install";
import Sidebar from "../../components/sidebar/Sidebar";


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

                <Sidebar />

                <main>
                    <BaseURI />
                    <Endpoints />

                    <Characters />
                    <Deaths />
                    <Episodes />

                    <Usage />
                    <Install />
                </main>
            </div>
        </div>
    )
}

export default Documentation