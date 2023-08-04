import { useState } from "react";
import "./Example.css";

const Example = () => {
    const [title, setTitle] = useState("Můj první title");
    const [buttonText, setButtonText] = useState("Původní text tlačítka");
   
    const buttonHandler = () => {
        setTitle("Nový text v titlu");
    }

    const button2Handler = () => {
        setTitle("xxxxxxxxxxxxxxxxx");
    }

    const deleteAll = () => {
        setTitle("");
    }
    const buttonChange = () => {
        setButtonText("Nový text tlačítka");
    }

    return (
        <div className="text-button-changer">
            <h2>{title}</h2>
            <button type="button" onClick={buttonHandler}>Změnit title</button>
            <button type="button" onClick={button2Handler}>Opět změnit title</button>
            <button type="button" onClick={deleteAll}>Vymazat title</button>
            <button type="button" onClick={buttonChange}>{buttonText}</button>
        </div>
    );
}
export default Example;