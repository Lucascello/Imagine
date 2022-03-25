import React from "react";
import SearchBar from "./SearchBar";
import ArtList from "./ArtList";

const App = () => {
    return (
        <>
            <header>
                <div className="container">
                    <SearchBar />
                </div>
            </header>
            <main>
                <ArtList />
            </main>
        </>
    );
};

export default App;
