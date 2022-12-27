import React from 'react';

export default function Jokes(props) {
    //console.log(props.isPun)
    const [isShown, setIsShown] = React.useState(true);

    function toggle() {
        console.log(isShown)
        setIsShown(prevShown => !prevShown)
    }

    const styles = {
        display: props.isShown ? "block" : "none"
    }

    const buttonTxt = isShown ? "Hide punchline" : "Show punchline"

    return (
        <div className="container" >
            {props.setup && <h3>{props.setup}</h3>}
            { isShown === true && <p> {props.punchline}</p>}
            <button onClick={toggle}>{buttonTxt}</button>
        </div>
    );
}


