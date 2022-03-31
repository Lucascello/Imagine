import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar component", () => {
    test("Should display a text", () => {
        const { queryByText, debug } = render(<SearchBar />);
        debug();
        expect(queryByText).toBeTruthy();
    });
});
