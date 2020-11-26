import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Documentation from "./pages/documentation/Documantation"
import Footer from "./components/footer/Footer"
import About from "./pages/about/About"
import Terms from "./pages/terms/Terms"

function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/docs" exact component={Documentation} />
                    <Route path="/about" exact component={About} />
                    <Route path="/terms" exact component={Terms} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App
