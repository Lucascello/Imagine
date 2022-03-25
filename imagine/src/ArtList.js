import React from "react";

// eslint-disable-next-line react/prop-types
const ArtList = ({ artPieces }) => {
    if (!artPieces) {
        return <div>No Artwork</div>;
    }

    console.log("MY ART:", artPieces);

    return <div>Art List</div>;
};

export default ArtList;
