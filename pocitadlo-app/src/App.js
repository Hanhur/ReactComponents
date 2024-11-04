import DecreaseButton from "./components/DecreaseButton";
import IncreaseButton from "./components/IncreaseButton";
import ResetButton from "./components/ResetButton";
import { useState } from "react";

const App = () => {
    const [state, setState] = useState(0);

    const decreaseOne = () => {
        const newState = state - 1;
        setState(newState);
    }

    const increaseOne = () => {
        const newState = state + 1;
        setState(newState);
    }

    const resetToZero = () => {
        setState(0);
    }

    return (
        <div className="counter">
            <h1>Pocitadlo</h1>
            <h2>{state}</h2>
            <DecreaseButton decrease={decreaseOne}/>
            <IncreaseButton increase={increaseOne}/>
            <ResetButton reset={resetToZero}/>
        </div>
    );
}

export default App;