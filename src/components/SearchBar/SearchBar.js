import React from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch ({
            type: "postsList/updateCurrentSearchTerm",
            payload: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="searchbar-container">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
            </form>
        </div>
    )
}