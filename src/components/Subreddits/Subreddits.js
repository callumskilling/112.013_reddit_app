import React from "react";
import { useDispatch } from "react-redux";

export default function Subreddits () {
    const dispatch = useDispatch();
    return (
        <div className="subreddits_container">
            <ul className="subreddits_list">
                <li onClick={dispatch({type: "postsList/currentSubreddit", payload: "r/popular"})}>Popular</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
            </ul>
        </div>
    )
}