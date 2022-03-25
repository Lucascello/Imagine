import React from "react";

const ArtList = ({ artPieces }) => {
    if (!artPieces || artPieces.length === 0) {
        return <div>No Artwork</div>;
    }

    console.log("MY ART:", artPieces);

    const artWork = artPieces.map((art) => {
        let image = `https://www.artic.edu/iiif/2/${art.image_id}/full/300,/0/default.jpg`;
        return (
            <li key={art.id} className="artWorks">
                <h6>{art.title}</h6>
                <img key={art.id} src={image} alt={art.thumbnail?.alt_text} />
            </li>
        );
    });

    return (
        <div>
            <ul className="allArt">{artWork}</ul>
        </div>
    );
};

export default ArtList;
