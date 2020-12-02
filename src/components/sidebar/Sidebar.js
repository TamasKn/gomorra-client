const Sidebar = () => (
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
)

export default Sidebar