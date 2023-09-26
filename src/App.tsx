import './style.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from "./Layout.tsx";
import Home from "./pages/Home.tsx";
import ArtWorks from "./pages/Artworks.tsx";
import 'react-loading-skeleton/dist/skeleton.css'
import gsap from "gsap-trial";
import {ScrollSmoother} from "gsap-trial/dist/ScrollSmoother";
import {ScrollTrigger} from "gsap-trial/dist/ScrollTrigger";
import Artwork from "./pages/Artwork.tsx";


const App = () => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='artworks' element={<ArtWorks/>}/>
                    <Route path='artworks/:id' element={<Artwork/>}/>
                </Route>s
            </Routes>
        </Router>
    );
};

export default App;
