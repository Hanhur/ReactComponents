import { useState } from "react";
import "./Example.css";

const Example = () => {
    const [title, setTitle] = useState("Muj prvni title");
    const [buttonText, setButtonText] = useState("Puvodni text tlacitka");

    const buttonHandler = () => {
        setTitle("Novy text v title");
    }

    const button2Handler = () => {
        setTitle("Novy text");
    }

    const deleteAll = () => {
        setTitle("");
    }

    const buttonChange = () => {
        setButtonText("Novy text tlacitka");
    }

    return (
        <div className="text-button-changer">
            <h1>{title}</h1>
            <button type="button" onClick={buttonHandler}>Zmenit title</button>
            <button type="button" onClick={button2Handler}>Opet zmenit title</button>
            <button type="button" onClick={deleteAll}>Vymazat title</button>
            <button type="button" onClick={buttonChange}>{buttonText}</button>
        </div>
    );
}

export default Example;