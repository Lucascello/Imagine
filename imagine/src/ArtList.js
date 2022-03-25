import React from "react";

const ArtList = ({ artPieces }) => {
    if (!artPieces || artPieces.length === 0) {
        return <div>No Artwork</div>;
    }

    console.log("MY ART:", artPieces);

    const artWork = artPieces.map((art) => {
        return (
            <li key={art.id} className="artWorks">
                {art.thumbnail?.alt_text}
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
