import {NavLink, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <header className={`page-header ${location.pathname.length === 1 ? '' : 'dark'}`}>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/artworks'>Artworks</NavLink>
                <NavLink to='/collection'>Collection</NavLink>
            </nav>
            <p className='page-header__logo'>DMoA</p>
        </header>
    );
};

export default Header;
