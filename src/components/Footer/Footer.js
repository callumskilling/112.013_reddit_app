import React from "react";
import { Reddit } from "../../assets/icons/Reddit"
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div id="logo-container">
                <Reddit height="100%" />
                <h1 id="app-title">REDDIT<span id="app-subtitle">:MINIMAL</span></h1>
            </div>
        </footer>
    )
}