import { useState, useEffect } from "react";
import Book from "./components/Book";
// import ShortCircuitEvaluation from "./ShortCircuitEvaluation";
const url = "http://api.open-notify.org/iss-now.json";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState(""); 

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => data["iss_position"])
            .then((position) => {
                setLatitude(position["latitude"])
                setLongitude(position["longitude"])  
            })
            setLoading(false);
    }, []);

    const [show, setShow] = useState(false);
    
    if (loading) {
        return (
            <h2>Nacitani stranky...</h2>
        )
    }
    
    return (
        <div>
            <h2>Zeměpisná šířka</h2>
            <p>{latitude}</p>
            <h2>Zeměpisná délka</h2>
            <p>{longitude}</p>
            <button onClick={() => setShow(!show)}>Ukaž / skryj</button>
            {show && <Book />}
            {/* <ShortCircuitEvaluation /> */}
        </div>
    )
}
export default App;