import React from "react";
import {useNavigate} from "react-router-dom";
import {getImageUrl} from "./utils.ts";

interface IArtworkCard {
    content: {
        id: number,
        title: string,
        ['artist_display']: string,
        ['image_id']: string,
    }
}


const ArtworkCard: React.FC<IArtworkCard> = ({content}) => {
    const navigate = useNavigate();
    return (
        <li className='artwork-card' onClick={() => navigate(`${content['id']}`)}>
            <img src={getImageUrl(content['image_id'])} alt={content['title']}/>
            <section className='artwork-card__info'>
                <h3 className='artwork-card__title'>{content['title']}</h3>
                <p className='artwork-card__artist'>{content['artist_display']}</p>
            </section>
        </li>
    );
};

export default ArtworkCard;
