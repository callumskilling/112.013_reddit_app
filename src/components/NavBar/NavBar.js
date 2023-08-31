import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import './NavBar.css'
import { Reddit } from "../../assets/icons/Reddit";

export default function NavBar () {
    return (
        <nav>
            <div className="logo-container">
                <Reddit height="100%" />
                <h1 className="app-title">REDDIT MINIMAL</h1>
            </div>
            <SearchBar />
        </nav>
    )
}