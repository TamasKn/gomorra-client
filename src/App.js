import { BrowserRouter, Switch, Route } from "react-router-dom"
import Landing from "./pages/landing/Landing";
import Documentation from "./pages/documentation/Documantation";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Header />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/docs" exact component={Documentation} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
