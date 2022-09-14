import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Documentation from "./pages/docs/Docs"
import Footer from "./components/footer/Footer"
import About from "./pages/about/About"
import Terms from "./pages/terms/Terms"

function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/docs" element={<Documentation />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App
