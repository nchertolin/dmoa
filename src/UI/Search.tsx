import React from "react";

interface ISearch {
    setPage: any,
    searchQuery: string,
    setSearchQuery: any,
    placeholder: string,
    search: any,
}

const Search: React.FC<ISearch> = ({setPage, searchQuery, setSearchQuery, placeholder, search}) => {
    const setSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const searchArtworks = () => {
        search(searchQuery);
        // setPage(1);
    }

    return (
        <label className='artworks__search'>
            <input className='artworks__search-input' type="text" placeholder={placeholder}
                   value={searchQuery} onChange={setSearch}/>
            <button type='button' onClick={searchArtworks}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M18.7736 20L11.4671 12.6935C10.8854 13.1737 10.2165 13.5496 9.46035 13.821C8.70419 14.0924 7.92194 14.2282 7.11359 14.2282C5.12529 14.2282 3.44254 13.5397 2.06533 12.1629C0.688117 10.786 -0.000488281 9.10369 -0.000488281 7.11591C-0.000488281 5.12812 0.687942 3.44518 2.0648 2.06709C3.44166 0.689031 5.12399 0 7.11179 0C9.09956 0 10.7825 0.688606 12.1606 2.06582C13.5387 3.44303 14.2277 5.12578 14.2277 7.11408C14.2277 7.9448 14.0882 8.73824 13.8093 9.4944C13.5304 10.2506 13.1583 10.9083 12.693 11.4676L19.9995 18.7741L18.7736 20ZM7.11359 12.4832C8.61248 12.4832 9.88207 11.9631 10.9223 10.9228C11.9626 9.88256 12.4828 8.61297 12.4828 7.11408C12.4828 5.61519 11.9626 4.3456 10.9223 3.30533C9.88207 2.26505 8.61248 1.74491 7.11359 1.74491C5.6147 1.74491 4.34511 2.26505 3.30484 3.30533C2.26458 4.3456 1.74446 5.61519 1.74446 7.11408C1.74446 8.61297 2.26458 9.88256 3.30484 10.9228C4.34511 11.9631 5.6147 12.4832 7.11359 12.4832Z"
                        fill="black" fillOpacity="0.4"/>
                </svg>
            </button>
        </label>
    );
};

export default Search;
