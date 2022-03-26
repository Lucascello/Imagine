import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ArtList from "./ArtList";
import { search } from "./Api";

const App = () => {
    const [term, setTerm] = useState("");
    const [artPieces, setArtPieces] = useState([]);

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!term || !term.length) {
            setArtPieces(null);
        }

        search(term)
            .then((results) => {
                if (results && results.data) {
                    setArtPieces(results.data);
                }
            })
            .catch((err) => console.log(err));
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
