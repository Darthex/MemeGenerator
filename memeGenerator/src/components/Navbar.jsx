import React from "react"
import img from "../images/Troll-Face.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src= {img} alt="TrollFace.png" className="navbar--image"/>
            <h2 className="navbar--header">Meme Generator</h2>
            <h4 className="navbar--description">React Course - Project 3</h4>
        </nav>
    )
}