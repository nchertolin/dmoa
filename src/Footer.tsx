import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className='page-footer'>
            <section className='content'>
                <section className='page-footer__left-block'>
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="56" viewBox="0 0 24 56" fill="none">
                            <path
                                d="M9.53691 55.8317V9.37245L3.42939 15.4294L0 12L12 0L24 12L20.5706 15.4294L14.4631 9.37245V55.8317H9.53691Z"
                                fill="white"/>
                        </svg>
                        back to top
                    </button>
                    <nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/artworks'>Artworks</NavLink>
                        <NavLink to='/collection'>Collection</NavLink>
                    </nav>
                    <p>2023 The Digital Museum of Artworks.</p>
                </section>
                <h2 className='main__title'>The Digital Museum of Artworks</h2>
            </section>
        </footer>
    );
};

export default Footer;
