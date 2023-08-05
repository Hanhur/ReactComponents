import { useState } from "react";
import DecreaseButton from "./components/DecreaseButton";
import IncreaseButton from "./components/IncreaseButton";
import ResetButton from "./components/ResetButton";

const App = () => {
    const [value, setValue] = useState(0);

    const decraeseOne = () => {
        const newValue = value - 1;
        setValue(newValue);
    }

    const increaeseOne = () => {
        const newValue = value + 1;
        setValue(newValue);
    }

    const resetToZero = () => {
        setValue(0);
    }
   
    return (
        <div className="counter">
            <h1>Počítadlo</h1>
            <h2>{value}</h2>
            <DecreaseButton decrease={decraeseOne} />
            <IncreaseButton increase={increaeseOne} />
            <ResetButton reset={resetToZero} />
        </div>
    );
}
export default App;