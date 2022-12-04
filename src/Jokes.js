import React from 'react';

export default function Jokes(props) {
    //console.log(props.isPun)
    return (
        <div className="container">
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
        </div>
    );
}


