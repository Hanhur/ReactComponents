import { useState, useEffect } from "react";

const App = () => { 
    const [value, setValue] = useState(0);
    const [test, setTest] = useState(0);
    
    useEffect(() => {
        const button = document.querySelector(".btn");
        if(value >= 1)
        {
            button.textContent = `Klik cislo ${value}`;
        }
        else 
        {
            button.textContent = "Klikni";
        }
    }, [value]);

    useEffect(() => {
        document.title = `Novy titulek ${test}`;
    }, [test]);

    return (
        <div>
            <h1>Zaciname</h1>
            <p>{value}</p>
            <button className="btn" type="button" onClick={() => setValue(value + 1)}>Klikni</button>
            <button className="btn-test" type="button" onClick={() => setTest(test + 1)}>Titulek</button>
        </div>
    );
}

export default App;
