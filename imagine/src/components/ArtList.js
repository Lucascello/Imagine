import React from "react";

const ArtList = ({ artPieces }) => {
    if (!artPieces || artPieces.length === 0) {
        return <div>No Artwork</div>;
    }

    const artWork = artPieces.map((art) => {
        let image = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;

        if (art.title.length > 100) {
            return (
                <li key={art.id} className="artWorks">
                    <h6>{`${art.title.substring(0, 100)}...`}</h6>
                    <img
                        key={art.id}
                        src={image}
                        alt={art.thumbnail?.alt_text}
                    />
                </li>
            );
        }
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
