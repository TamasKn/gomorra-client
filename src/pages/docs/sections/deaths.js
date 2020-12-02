import SingleLine from "../../../components/codeContainer/SingleLine";
import MultiLines from "../../../components/codeContainer/MultiLines";

const Deaths = () => (
    <section>
        <div className="anchor-point" id="section-2.2" />
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
)

export default Deaths