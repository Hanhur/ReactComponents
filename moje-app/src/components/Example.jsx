import "./Example.css";
import { useState } from "react";

const Example = () => {
    const [title, setTitle] = useState("Muj prvni title");
    const [buttonText, setButtonText] = useState("Původní text tlačítka");

    const buttonHandler = () => {
        setTitle("Novy text v titlu");
    }

    const button2Handler = () => {
        setTitle("xxxxxxxxxxxxxxxx");
    }

    const deleteAll = () => {
        setTitle("");
    }

    const buttonChange = () => {
        setButtonText("Novy text tlacitka");
    }

    return (
        <div className="tetx-button-changer">
            <h1>{title}</h1>
            <button type="button" onClick={buttonHandler}>Zmenit title</button>
            <button type="button" onClick={button2Handler}>Opet zmenit title</button>
            <button type="button" onClick={deleteAll}>Vymazat title</button>
            <button type="button" onClick={buttonChange}>{buttonText}</button>
        </div>
    );
}

export default Example;
