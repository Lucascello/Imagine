import React from "react";

const Pagination = ({
    handlePagination,
    moveForward,
    moveBackwards,
    currentPage,
}) => {
    return (
        <>
            <div className="page-number">
                <div>Page {currentPage}</div>
            </div>
            <div className="pagination">
                <button id="back" className="pages" onClick={moveBackwards}>
                    &#10094;&#10094;{" "}
                </button>
                <button id="1" className="pages" onClick={handlePagination}>
                    1
                </button>
                <button id="2" className="pages" onClick={handlePagination}>
                    2
                </button>
                <button id="3" className="pages" onClick={handlePagination}>
                    3
                </button>
                <button id="4" className="pages" onClick={handlePagination}>
                    4
                </button>
                <button id="5" className="pages" onClick={handlePagination}>
                    5
                </button>
                <button id="6" className="pages" onClick={handlePagination}>
                    6
                </button>
                <button id="7" className="pages" onClick={handlePagination}>
                    7
                </button>
                <button id="8" className="pages" onClick={handlePagination}>
                    8
                </button>
                <button id="9" className="pages" onClick={handlePagination}>
                    9
                </button>
                <button id="10" className="pages" onClick={handlePagination}>
                    10
                </button>
                <button id="11" className="pages" onClick={handlePagination}>
                    11
                </button>
                <button id="12" className="pages" onClick={handlePagination}>
                    12
                </button>
                <button id="13" className="pages" onClick={handlePagination}>
                    13
                </button>
                <button id="14" className="pages" onClick={handlePagination}>
                    14
                </button>
                <button id="15" className="pages" onClick={handlePagination}>
                    15
                </button>
                <button id="16" className="pages" onClick={handlePagination}>
                    16
                </button>
                <button id="17" className="pages" onClick={handlePagination}>
                    17
                </button>
                <button id="18" className="pages" onClick={handlePagination}>
                    18
                </button>
                <button id="19" className="pages" onClick={handlePagination}>
                    19
                </button>
                <button id="20" className="pages" onClick={handlePagination}>
                    20
                </button>
                <button id="forward" className="pages" onClick={moveForward}>
                    &#10095;&#10095;
                </button>
            </div>
        </>
    );
};

export default Pagination;
