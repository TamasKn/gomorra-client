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
                        <li><a href="#section-1">Endpoints</a></li>
                        <li className="docs__sidebar--sublist">
                            <a href="#section-2">Characters</a>
                        </li>
                        <li className="docs__sidebar--sublist">
                            <a href="#section-2">Deaths</a>
                        </li>
                        <li className="docs__sidebar--sublist">
                            <a href="#section-2">Episodes</a>
                        </li>
                        <li><a href="#section-3">Usage</a></li>
                        <li><a href="#section-4">Install locally</a></li>
                    </ul>
                </div>

                <main>
                    <section id="section-1">
                        <h1>Section 1</h1>

                        <SingleLine>{" function() { return } "}</SingleLine>

                        <MultiLines />
                        <MultiLines />

                    </section>
                    <section id="section-2">
                        <h1>Section 2</h1>
                        <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi
                            numquam placeat velit voluptate in praesentium non labore unde incidunt laborum maxime quae
                            magni.</p>
                    </section>
                    <section id="section-3">
                        <h1>Section 3</h1>
                        <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia
                            corrupti, aperiam fugit facere debitis repudiandae praesentium sapiente inventore
                            repellendus, nemo commodi alias!</p>
                    </section>
                    <section id="section-4">
                        <h1>Section 4</h1>
                        <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt,
                            quas in ipsum inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint
                            accusamus repudiandae.</p>
                    </section>
                    <section id="section-5">
                        <h1>Section 5</h1>
                        <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis
                            incidunt corrupti aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque,
                            ipsum?</p>
                    </section>
                    <section id="section-6">
                        <h1>Section 6</h1>
                        <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati
                            ipsam, porro illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi,
                            veniam.</p>
                    </section>
                    <section id="section-7">
                        <h1>Section 7</h1>
                        <p>Cum asperiores temporibus itaque consequatur quod inventore, quia quis explicabo dicta esse
                            minus voluptatem reiciendis eveniet animi, necessitatibus illum dolorem doloremque repellat
                            placeat, dolores eaque.</p>
                    </section>
                    <section id="section-8">
                        <h1>Section 8</h1>
                        <p>Optio qui, omnis itaque rerum iusto molestiae necessitatibus deleniti quod tenetur id
                            perspiciatis voluptatum dolorum quisquam eius ipsum non architecto labore! Distinctio,
                            tenetur. Officiis, necessitatibus?</p>
                    </section>
                    <section id="section-9">
                        <h1>Section 9</h1>
                        <p>Rem iste iure blanditiis excepturi esse nisi corrupti sequi, illo, laborum quo quis quaerat
                            assumenda perspiciatis quod fuga vel laudantium doloribus architecto tempora omnis
                            earum!</p>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Documentation