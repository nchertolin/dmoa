const generatePageNumbers = (totalPages: number, currentPage: number) => {
    const pageNumbers = [];
    const maxPagesToShow = 10;
    const halfMax = Math.floor(maxPagesToShow / 2) - 2;

    if (currentPage <= maxPagesToShow - 3) {
        for (let i = 1; i <= maxPagesToShow - 2; i++) {
            pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
        return pageNumbers;
    }

    pageNumbers.push(1);
    pageNumbers.push('...');

    if (currentPage >= totalPages - halfMax) {
        for (let i = currentPage - maxPagesToShow + 2; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    const start = currentPage - Math.floor(halfMax);
    const end = currentPage + Math.floor(halfMax);

    for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
    }

    if (end < totalPages) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
    }

    return pageNumbers;
};

const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
const getImageUrl = (id: string) => `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;

export {generatePageNumbers, scrollToTop, getImageUrl}
