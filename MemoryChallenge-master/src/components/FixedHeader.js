import React from "react";

const FixedHeader = (props) => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
            <li>Memory Game</li>
            <li>{props.response}</li>
            <li>Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </nav>
)

export default FixedHeader;