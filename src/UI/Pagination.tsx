import React, {SetStateAction, useMemo} from "react";
import {generatePageNumbers} from "../utils.ts";


interface IPagination {
    page: number,
    setPage: React.Dispatch<SetStateAction<number>>,
    totalPages: number
}

const Pagination: React.FC<IPagination> = ({page, setPage, totalPages}) => {
    const pageNumbers = useMemo(() => generatePageNumbers(totalPages, page), [page, totalPages]);
    const paginationButtonClickHandler = (number: number) => setPage(number);
    const paginationPrevious = () => setPage(page === 1 ? page : page - 1);
    const paginationNext = () => setPage(page === totalPages ? page : page + 1);
    
    return (
        <section className='artworks__pagination'>
            <button className='artworks__pagination__nav__button' onClick={paginationPrevious}>Previous</button>
            <section className='artworks__pagination__list'>
                {
                    pageNumbers.map(number =>
                        Number.isInteger(number)
                            ? <button key={number} className={`pagination__button ${number === page ? 'active' : ''}`}
                                      onClick={() => paginationButtonClickHandler(number)}>
                                {number}
                            </button>
                            : <p className='pagination__button'>{number}</p>
                    )
                }
            </section>
            <button className='artworks__pagination__nav__button' onClick={paginationNext}>Next</button>
        </section>
    );
};

export default Pagination;
