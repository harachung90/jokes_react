import React from 'react';

export default function Jokes(props) {
    return (
        <div className="container">
            <h4>{props.setup}</h4>
            <h3>{props.punchline}</h3>
        </div>
    );
}


