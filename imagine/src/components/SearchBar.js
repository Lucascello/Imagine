import React from "react";

const SearchBar = ({ term, handleChange, handleSubmit }) => {
    return (
        <form>
            <div className="search">
                <label>Find A Piece Of Artwork</label>
                <input
                    value={term}
                    onChange={handleChange}
                    type="text"
                    placeholder={!term ? "Enter Search Term" : term}
                />
                <button onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
