import "./Form.css";
import { useState } from "react";
import { projectFirestore } from "../firebase/config";

const Form = () => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieAge, setMovieAge] = useState(null);
    const [movieTime, setMovieTime] = useState(null);

    const submitForm = async (event) => {
        event.preventDefault();

        const newMovie = {
            title: movieTitle,
            minage: parseInt(movieAge),
            time: parseInt(movieTime)
        }

        try 
        {
            await projectFirestore.collection("movies").add(newMovie);
            setMovieTitle("");
            setMovieAge("");
            setMovieTime("");
        } 
        catch(error) 
        {
            console.log(error.message);
        }
    }

    return (
        <section className="form-section">
            <h1>Pridani filmu</h1>
            <form onSubmit={submitForm}>
                <input
                    className="input"
                    type="text" 
                    placeholder="Title"
                    value={movieTitle}
                    onChange={(event) => setMovieTitle(event.target.value)}
                />
                <input 
                    className="input"
                    type="number" 
                    placeholder="Minimanli vek"
                    min="1"
                    value={movieAge || ""}
                    onChange={(event) => setMovieAge(event.target.value)}
                />
                <input 
                    className="input"
                    type="number" 
                    placeholder="Cas filmu"
                    min="1"
                    value={movieTime || ""}
                    onChange={(event) => setMovieTime(event.target.value)}
                />
                <input type="submit" value="Pridat film" />
            </form>
        </section>
    );
}

export default Form;
