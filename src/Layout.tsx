import Header from "./Header.tsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./Footer.tsx";
import {scrollToTop} from "./utils.ts";
import {useEffect} from "react";

const Layout = () => {
    const location = useLocation();
    useEffect(scrollToTop, [location]);

    return (
        <div className='scroll__wrapper'>
            <div className='scroll__content'>
                <Header/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
