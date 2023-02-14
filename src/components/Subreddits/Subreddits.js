import React from "react";
import { useDispatch } from "react-redux";
import './Subreddits.css'

export default function Subreddits () {
    const subreddits = [
        "r/popular",
        "r/futurology",
        "r/australia",
        "r/baking",
        "r/lgbt",
        "r/natureisfuckinglit",
        "r/gifs",
        "r/askscience",
        "r/brandnewsentence",
        "r/renewableenergy",
        "r/mademesmile"
    ]
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch({
            type: "postsList/updateCurrentSubreddit",
            payload: e.target.getAttribute('value')
        })
    }

    
    return (
        <div className="subreddits_container">
            <ul className="subreddits_list">
            {subreddits.map((subreddit) => (
                    <li value={subreddit} onClick={handleClick}>{subreddit}</li>
                ))}
            </ul>
        </div>
    )
}