import "./AllMovies.css";
import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllMovies = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const unsubscribe = projectFirestore.collection("movies").onSnapshot((snapshot) => {
            if(snapshot.empty)
            {
                setError("Zadne filmy k vypsani");
            }
            else 
            {
                let result = [];
                snapshot.docs.forEach((oneMovie) => {
                    result.push({id: oneMovie.id, ...oneMovie.data()});
                });
                setData(result);
            }
        }, (err) => setError(err.message));

        return () => unsubscribe();
        
    }, []);

    const deleteMovie = (id) => {
        projectFirestore.collection("movies").doc(id).delete();
    }

    return (
        <section>
            {error && <p>{error}</p>}
            {
                data.map((oneMovie) => {
                    const {id, title} = oneMovie;
                    return (
                        <div className="one-movie" key={id}>
                            <h1>{title}</h1>
                            <Link to={`/one-movie/${id}`}>Vice informace</Link>
                            <button type="button" onClick={() => deleteMovie(id)}>Smazat</button>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default AllMovies;
