import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ArtList from "./ArtList";

const App = () => {
    const [term, setTerm] = useState("");
    const [artPieces, setArtPieces] = useState(null);

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("you have searched for - " + term);
        // or you can send to backend
    };

    return (
        <>
            <header>
                <div className="container">
                    <SearchBar
                        term={term}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </header>
            <main>
                <ArtList artPieces={artPieces} />
            </main>
        </>
    );
};

export default App;
