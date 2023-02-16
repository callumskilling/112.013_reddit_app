import React from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css"

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
                <input id="searchbar" type="text" onChange={handleChange} className="searchbar" placeholder="Search Post Titles"/>
            </form>
        </div>
    )
}