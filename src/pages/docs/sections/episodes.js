import SingleLine from "../../../components/codeContainer/SingleLine";
import MultiLines from "../../../components/codeContainer/MultiLines";

const Episodes = () => (
    <section>
        <div className="anchor-point" id="section-2.3" />
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
)

export default Episodes