import React from "react";
import { useDispatch } from "react-redux";
import './Subreddits.css'

export default function Subreddits () {
    const dispatch = useDispatch();
    return (
        <div className="subreddits_container">
            <ul className="subreddits_list">
                <li onClick={() => dispatch({type: "postsList/updateCurrentSubreddit", payload: "r/popular"})}>Popular</li>
                <li onClick={() => dispatch({type: "postsList/updateCurrentSubreddit", payload: "r/australia"})}>Australia</li>
                <li onClick={() => dispatch({type: "postsList/updateCurrentSubreddit", payload: "r/futurology"})}>Futurology</li>
                <li onClick={() => dispatch({type: "postsList/updateCurrentSubreddit", payload: "r/baking"})}>Baking</li>
            </ul>
        </div>
    )
}