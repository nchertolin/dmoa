import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useArtwork} from "../hooks/useArtworks.ts";
import Skeleton from "react-loading-skeleton";
import {getImageUrl} from "../utils.ts";

const Artwork = () => {
    const {id} = useParams();
    const {isLoading, data} = useArtwork(id);
    const navigate = useNavigate();

    if (isLoading || !data) {
        return (
            <div className='artwork-page content'>
                <div className='artwork-page__navigation-skeleton'><Skeleton/></div>
                <section className='artwork-page__flexbox'>
                    <section className='artwork-page__left-block'>
                        <h2 className='second__title dark__text'><Skeleton/></h2>
                        <p className='main__text dark__text'><Skeleton count={3}/></p>
                        <section className='artwork-page__info-skeleton'>
                            <Skeleton count={10}/>
                        </section>
                        <Skeleton/>
                    </section>
                    <div className='artwork-page__image skeleton'><Skeleton height='100%'/></div>
                </section>
            </div>
        )
    }


    return (
        <div className='artwork-page content'>
            <div className='artwork-page__navigation'>
                <button onClick={() => navigate(-1)}>Artworks</button>
                <p>{data['title']}</p>
            </div>
            <section className='artwork-page__flexbox'>
                <section className='artwork-page__left-block'>
                    <h2 className='second__title dark__text'>{data['title']}</h2>
                    <p className='main__text dark__text'>{data['credit_line']}</p>
                    <section className='artwork-page__info'>
                        <h3>Artist</h3>
                        <p>{data['artist_title'] || 'Unknown'}</p>
                        <h3>Date</h3>
                        <p>{data['date_display'] || 'Unknown'}</p>
                        <h3>Place</h3>
                        <p>{data['place_of_origin'] || 'Unknown'}</p>
                        <h3>Medium</h3>
                        <p>{data['medium_display'] || 'Unknown'}</p>
                        <h3>Dimensions</h3>
                        <p>{data['dimensions'] || 'Unknown'}</p>
                        <h3>Classification</h3>
                        <p>{data['classification_titles'].join(', ') || 'Unknown'}</p>
                        <h3>Materials</h3>
                        <p>{data['material_titles'].join(', ') || 'Unknown'}</p>


                    </section>
                    <button className='main__button dark'>
                        <p>Add to collection</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M1.17949 13.0667L0 12.0445L11.1154 2.40173H1.01008V0.93335H14V12.1913H12.3057V3.43338L1.17949 13.0667Z"/>
                        </svg>
                    </button>
                </section>
                <img className='artwork-page__image' src={getImageUrl(data['image_id'])} alt=""/>
            </section>
        </div>
    );
};

export default Artwork;
