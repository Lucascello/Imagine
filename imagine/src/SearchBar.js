import React from "react";

const SearchBar = () => {
    return (
        <form>
            <div className="search">
                <label>Find an Artwork</label>
                <input type="text" placeholder="Enter Search Term" />
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SearchBar;
