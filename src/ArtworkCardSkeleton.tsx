import Skeleton from "react-loading-skeleton";

const ArtworkCardSkeleton = () => {
    return (
        <li className='artwork-card artwork-card-skeleton'>
            <Skeleton height='100%'/>
            <section className='artwork-card__info'><Skeleton count={2}/></section>
        </li>
    );
};

const ArtworksListLoading = ({count}) => {
    return (
        <div className='artworks-lists'>
            <ul data-speed='1' className='artworks-list'>
                {Array(count / 3 - 1).fill(0).map((item, i) => <ArtworkCardSkeleton key={i * 5}/>)}
            </ul>
            <ul data-speed='1.2' className='artworks-list'>
                {Array(count / 3 + 2).fill(0).map((item, i) => <ArtworkCardSkeleton key={i * 3}/>)}
            </ul>
            <ul data-speed='1.1' className='artworks-list'>
                {Array(count / 3).fill(0).map((item, i) => <ArtworkCardSkeleton key={i * 7}/>)}
            </ul>
        </div>
    );
}

export default ArtworksListLoading;
