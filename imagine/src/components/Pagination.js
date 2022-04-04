import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePagination, totalPages }) => {
    return (
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={totalPages}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePagination}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default Pagination;
