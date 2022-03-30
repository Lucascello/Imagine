import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ArtList from "./ArtList";
import Pagination from "./Pagination";
import { search } from "./Api";

const App = () => {
    const [term, setTerm] = useState("");
    const [artPieces, setArtPieces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    const request = () => {
        return search(currentPage, term)
            .then((results) => {
                if (results && results.data) {
                    setArtPieces(results.data);
                }
            })
            .catch((err) => console.log(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!term || !term.length) {
            setArtPieces(null);
        }
        setCurrentPage(1);

        request();
    };

    useEffect(() => {
        console.log("CURR:", currentPage);
        request();
    }, [currentPage]);

    const moveBackwards = () => {
        if (currentPage < 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
    };

    const handlePagination = (e) => {
        setCurrentPage(e.target.id);
    };

    const moveForward = () => {
        if (currentPage > 20) {
            return;
        }
        setCurrentPage(currentPage + 1);
    };

    return !term ? (
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
    ) : (
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
            <Pagination
                handlePagination={handlePagination}
                moveForward={moveForward}
                moveBackwards={moveBackwards}
                currentPage={currentPage}
            />
        </>
    );
};

export default App;
