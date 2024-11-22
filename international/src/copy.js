import { useState, useEffect } from 'react';

const App = () => {
    const url = "http://api.open-notify.org/iss-now.json";
    
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [urlMap, setUrlMap] = useState("");

    const getCoordinates = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setLatitude(data["iss_position"]["latitude"]);
        setLongitude(data["iss_position"]["longitude"]);

        const iss_lat = data["iss_position"]["latitude"];
        const iss_long = data["iss_position"]["longitude"];

        setUrlMap(`https://ru.mapy.cz/zakladni?l=0&x=${iss_long}&y=${iss_lat}&z=5`);
    }

    useEffect(() => {
        getCoordinates();
    }, []);


    return (
        <div>
            <h1>API</h1>
            <h2>Zemepisna sirka</h2>
            <p>{latitude}</p>
            <h2>Zemepisna delka</h2>
            <p>{longitude}</p>
            <a href={urlMap} target="_blank">Pozice ISS v mapach</a>
        </div>
    );
}

export default App;
