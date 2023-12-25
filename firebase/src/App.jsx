import { projectFirestore } from "./firebase/config";
import { useState, useEffect } from "react";

const App = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const [movieTitle, setMovieTitle] = useState("");
    const [movieAge, setMovieAge] = useState(null);
    const [movieTime, setMovieTime] = useState(null);

    useEffect(() => {
        const unsubscribe = projectFirestore.collection("movies").onSnapshot((snapshot) => {
            if(snapshot.empty)
            {
                setError("Zadne filmy k vypsani");
                setData([]);
            }
            else 
            {
                let result = [];
                snapshot.docs.forEach((oneMovie) => {
                    result.push({id: oneMovie.id, ...oneMovie.data()});
                });
                setData(result);
                setError("");
            }
        }, (error) => setError(error.message));

        return () => {
            unsubscribe();
        }

    }, []);

    const deleteMovie = (id) => {
        projectFirestore.collection("movies").doc(id).delete();
    }

    const submitForm = async (event) => {
        event.preventDefault();

        const newMovie = {
            title: movieTitle,
            minage: movieAge,
            time: movieTime
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
            setError("Film nebyl pridan " + error.message);
        }  
    }

    return (
        <div className="all-movies">
            <form className="form" onSubmit={submitForm}>
                <input 
                    className="input"
                    type="text"  
                    placeholder="Nazev filmu" 
                    value={movieTitle}
                    onChange={(event) => setMovieTitle(event.target.value)}
                />
                <input
                    className="input" 
                    type="number" 
                    placeholder="Minimalni vek" 
                    min="0" 
                    value={movieAge || ""}
                    onChange={(event) => setMovieAge(event.target.value)}
                />
                <input
                    className="input" 
                    type="number" 
                    placeholder="Doba trvani" 
                    min="0" 
                    value={movieTime || ""}
                    onChange={(event) => setMovieTime(event.target.value)}
                />
                <input type="submit"/>
            </form>
            {error && <p>{error}</p>}
            {
                data.map((oneMovie) => {
                    const {id, title, minage, time} = oneMovie;

                    return (
                        <div className="one-movie" key={id}>
                            <h1>{title}</h1>
                            <p>{time} minut</p>
                            <p>{minage}+</p>
                            <button type="button" onClick={() => deleteMovie(id)}>Smazat</button>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default App;
