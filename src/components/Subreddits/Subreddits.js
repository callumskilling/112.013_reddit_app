import React from "react";
import { useDispatch } from "react-redux";
import { GoToTop } from "../../utils/GoToTop"
import './Subreddits.css'

export default function Subreddits() {
    const subreddits = [
        "r/popular",
        "r/futurology",
        "r/australia",
        "r/baking",
        "r/lgbt",
        "r/gifs",
        "r/pics",
        "r/askscience",
        "r/mademesmile"
    ]
    
    const dispatch = useDispatch();

    const handleClick = (e) => {
        GoToTop();
        const newSubreddit = e.target.getAttribute('value');

        dispatch({
            type: "postsList/updateCurrentSubreddit",
            payload: newSubreddit
        })

        dispatch ({
            type: "postsList/updateCurrentSearchTerm",
            payload: ""
        })

        document.getElementById("searchbar").value = "";

        for (const subreddit in subreddits) {
            if (newSubreddit !== subreddits[subreddit]) {
                document.getElementById(subreddits[subreddit]).setAttribute("aria-current", "false")
                document.getElementById(subreddits[subreddit]).innerHTML = `${subreddits[subreddit].toLowerCase()}`
            } else {
                document.getElementById(newSubreddit).setAttribute("aria-current", "true");
                document.getElementById(newSubreddit).innerHTML = `${newSubreddit.toUpperCase()}`
            }
        }
    }


    return (
        <div className="subreddits_container">
            <ul className="subreddits_list">
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit}
                        id={subreddit}
                        aria-current={subreddit === "r/popular" ? "true" : "false"}
                        value={subreddit}
                        onClick={handleClick}
                    >
                        {subreddit === "r/popular" ? subreddit.toUpperCase() : subreddit.toLowerCase()}
                    </li>
                ))}
            </ul>
        </div>
    )
}