import { useState, useEffect } from "react";

const App = () => {
    const url = "http://api.open-notify.org/iss-now.json";
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [urlMap, setUrlMap] = useState("");

    const getCoordinates = async() => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data["iss_position"]["latitude"]);
        console.log(data["iss_position"]["longitude"]);
        setLatitude(data["iss_position"]["latitude"]);
        setLongitude(data["iss_position"]["longitude"]);
        const iss_long = data["iss_position"]["longitude"];
        const iss_lat = data["iss_position"]["latitude"];
        setUrlMap(`https://mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=5`);
    }
    
    useEffect( () => {
        getCoordinates();
    }, []);

    return (
        <div>
            <h1>API</h1>
            <h2>Zeměpisná šířka</h2>
            <p>{latitude}</p>
            <h2>Zeměpisná délka</h2>
            <p>{longitude}</p>
            <a href={urlMap} target="_blank" rel="noreferrer">Pozice ISS v mapách</a>
        </div>
    );
}

export default App;
