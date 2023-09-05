import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import './NavBar.css'
import { Reddit } from "../../assets/icons/Reddit";

export default function NavBar () {
    return (
        <nav>
            <div id="logo-container">
                <Reddit height="100%" />
                <h1 id="app-title">REDDIT<span id="app-subtitle">:MINIMAL</span></h1>
            </div>
            <SearchBar />
        </nav>
    )
}