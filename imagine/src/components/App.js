import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ArtList from "./ArtList";
import Pagination from "./Pagination";
import { search } from "./Api";

const App = () => {
    const [term, setTerm] = useState("");
    const [artPieces, setArtPieces] = useState([]);
    const [currentPage, setCurrentPage] = useState(null);
    const [totalPages, setTotalPages] = useState(0);

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    const request = () => {
        return search(currentPage, term)
            .then((results) => {
                if (results && results.data) {
                    setArtPieces(results.data);
                    setTotalPages(results.pagination.total);
                    setTotalPages(Math.ceil(results.pagination.total / 12));
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

    const handlePagination = (data) => {
        setCurrentPage(data.selected + 1);
    };

    useEffect(() => {
        request();
    }, [currentPage]);

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
            <div>
                {term && (
                    <Pagination
                        handlePagination={handlePagination}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                )}
            </div>
        </>
    );
};

export default App;
