import ArtworksList from "../ArtworksList.tsx";
import {useEffect, useState} from "react";
import Search from "../UI/Search.tsx";
import {useArtworks, useSearchArtworks} from "../hooks/useArtworks.ts";
import ArtworksListLoading from "../ArtworkCardSkeleton.tsx";
import Pagination from "../UI/Pagination.tsx";
import {scrollToTop} from "../utils.ts";


const Artworks = () => {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const {isLoading: isArtworksLoading, data} = useArtworks(page);
    const {isLoading: isSearching, searchArtworks} = useSearchArtworks();

    useEffect(scrollToTop, [page]);

    return (
        <section className='page-artworks content'>
            <section className='artworks__left-block'>
                <h2 className='main__title dark'>Artworks</h2>
                <p className='main__text dark__text'>
                    Explore thousands of artworks in the museum’s collection—from our renowned icons to lesser-known
                    works
                    from every corner of the globe—as well as our books, writings, reference materials, and other
                    resources.
                </p>
            </section>
            <form>
                <Search
                    setPage={setPage}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    placeholder='Search by keyword, artist, or reference'
                    search={searchArtworks}
                />
                <button type='button' className='artworks__filters-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                        <path
                            d="M16.5385 16.6064C15.5692 16.6064 14.75 16.2717 14.0808 15.6025C13.4115 14.9333 13.0769 14.114 13.0769 13.1448C13.0769 12.1756 13.4115 11.3564 14.0808 10.6871C14.75 10.0179 15.5692 9.68326 16.5385 9.68326C17.5077 9.68326 18.3269 10.0179 18.9961 10.6871C19.6654 11.3564 20 12.1756 20 13.1448C20 14.114 19.6654 14.9333 18.9961 15.6025C18.3269 16.2717 17.5077 16.6064 16.5385 16.6064ZM16.5362 15.4299C17.1667 15.4299 17.7055 15.207 18.1527 14.7614C18.5999 14.3157 18.8235 13.7776 18.8235 13.1471C18.8235 12.5166 18.6007 11.9778 18.155 11.5306C17.7093 11.0833 17.1712 10.8597 16.5407 10.8597C15.9103 10.8597 15.3714 11.0826 14.9242 11.5283C14.477 11.974 14.2534 12.512 14.2534 13.1425C14.2534 13.773 14.4762 14.3118 14.9219 14.7591C15.3676 15.2063 15.9057 15.4299 16.5362 15.4299ZM1.76471 13.7331V12.5566H10.2715V13.7331H1.76471ZM3.46153 6.92309C2.49229 6.92309 1.67307 6.58847 1.00385 5.91923C0.334618 5.25 0 4.43077 0 3.46156C0 2.49232 0.334618 1.67309 1.00385 1.00385C1.67307 0.334617 2.49229 0 3.46153 0C4.43076 0 5.25 0.334617 5.91924 1.00385C6.58847 1.67309 6.92309 2.49232 6.92309 3.46156C6.92309 4.43077 6.58847 5.25 5.91924 5.91923C5.25 6.58847 4.43076 6.92309 3.46153 6.92309ZM3.45926 5.74662C4.08974 5.74662 4.62858 5.52377 5.07579 5.07809C5.52301 4.6324 5.74662 4.09431 5.74662 3.46382C5.74662 2.83335 5.52378 2.29451 5.07809 1.84729C4.6324 1.40008 4.09431 1.17647 3.46382 1.17647C2.83333 1.17647 2.29449 1.39931 1.84729 1.845C1.40008 2.29069 1.17647 2.82877 1.17647 3.45926C1.17647 4.08974 1.39931 4.62858 1.845 5.07579C2.29069 5.52301 2.82877 5.74662 3.45926 5.74662ZM9.7285 4.04979V2.87329H18.2353V4.04979H9.7285Z"
                            fill="black" fillOpacity="0.6"/>
                    </svg>
                    Show filters
                </button>
            </form>

            {
                isArtworksLoading || isSearching || !data
                    ? <ArtworksListLoading count={12}/>
                    : <ArtworksList artworksList={data?.data}/>
            }
            {data &&
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={data?.pagination['total_pages']}
                />}
        </section>
    );
};

export default Artworks;
