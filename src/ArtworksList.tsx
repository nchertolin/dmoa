import ArtworkCard from "./ArtworkCard.tsx";
import React from "react";

interface IArtworksList {
    artworksList: [
        {
            ['id']: number,
            ['title']: string,
            ['artist_display']: string,
            ['image_id']: string,
        }
    ]
}

const ArtworksList: React.FC<IArtworksList> = ({artworksList}) => {
    return (
        <ul className='artworks-list artworks-list-1'>
            {artworksList.map(content =>
                <ArtworkCard content={content} key={content['id']}/>)}
        </ul>
    );
};

export default ArtworksList;
