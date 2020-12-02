import SingleLine from "../../../components/codeContainer/SingleLine";
import MultiLines from "../../../components/codeContainer/MultiLines";

const Characters = () => (
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
)

export default Characters