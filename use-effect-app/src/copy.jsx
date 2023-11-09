import { useState, useEffect } from "react";

const App = () => {
    const [value, setValue] = useState(0);
    const [test, setTest] = useState(0);

    useEffect(() => {
        const button = document.querySelector(".btn");
        if(value >= 1)
        {
            button.textContent = `Klik číslo ${value}`; 
        }
        else 
        {
            button.textContent = "Klikni";
        }      
    }, [value]);

    useEffect(() => {
        document.title = `Nový titulek ${test}`;
        console.log("Druhý useEffect - Titulek");
    }, [test]);

    return (
        <div>
            <h1>Začínáme</h1>
            <p>{value}</p>
            <button className="btn" onClick={() => setValue(value + 1)}>Klikni</button>
            <button className="btn-test" onClick={() => setTest(test + 1) }>Titulek</button>
        </div>
    );
}

export default App;
