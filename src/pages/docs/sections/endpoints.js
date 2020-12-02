import SingleLine from "../../../components/codeContainer/SingleLine";

const Endpoints = () => (
    <section>
        <div className="anchor-point" id="section-2" />
        <h1>Endpoints</h1>
        <hr/>

        <SingleLine>{"/characters"}</SingleLine>
        <SingleLine>{"/deaths"}</SingleLine>
        <SingleLine>{"/episodes"}</SingleLine>

    </section>
)

export default Endpoints