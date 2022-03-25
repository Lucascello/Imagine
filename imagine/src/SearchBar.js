import React from "react";

const SearchBar = ({ term, handleChange, handleSubmit }) => {
    return (
        <form>
            <div className="search">
                <label>Find an Artwork</label>
                <input
                    value={term}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Search Term"
                />
                <button onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
