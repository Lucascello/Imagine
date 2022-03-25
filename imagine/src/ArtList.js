/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const ArtList = ({ artPieces }) => {
    if (!artPieces || artPieces.length === 0) {
        return <div>No Artwork</div>;
    }

    console.log("MY ART:", artPieces);

    const artWork = artPieces.map((art) => {
        return (
            // eslint-disable-next-line react/jsx-key
            <div>
                <div className="artWorks" key={art.id}>
                    {art.thumbnail.alt_text}
                </div>
            </div>
        );
    });

    return <div className="allArt">{artWork}</div>;
};

export default ArtList;
