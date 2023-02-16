import React from "react";
import logo from "../../assets/reddit.png"
import SearchBar from "../SearchBar/SearchBar"
import './NavBar.css'

export default function NavBar () {
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" alt="reddit looking logo" src={logo} />
                <h1 className="app-title">Read It</h1>
            </div>
            <SearchBar />
        </nav>
    )
}