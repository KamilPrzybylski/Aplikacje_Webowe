import React from "react";
import "./index.scss"

function Navbar(): React.JSX.Element {
    return (
        <>
            <nav className="navbar">
                <div className="navbar__logo">
                    <h1>Logo</h1>
                </div>
                <ul className="navbar__links">
                    <li className="navbar__link">
                        <a href="/">Home</a>
                    </li>
                    <li className="navbar__link">
                        <a href="/">About</a>
                    </li>
                    <li className="navbar__link">
                        <a href="/">Tours</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar