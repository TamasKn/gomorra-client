import '../../css/codeContainer.css'

const MultiLines = (props) => (
    <pre className="code__format code__multi-line">{props.children}</pre>
)

export default MultiLines