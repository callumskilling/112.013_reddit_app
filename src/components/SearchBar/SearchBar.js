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

    return (
        <div className="searchbar-container">
            <form>
                <input type="text" onChange={handleChange}/>
            </form>
        </div>
    )
}