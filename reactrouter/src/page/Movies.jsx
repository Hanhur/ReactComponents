import { Link } from "react-router-dom";
import movies from "../data";
import "./Movies.css";

const Movies = () => {
    return (
        <section>
            <div className="all-movies">
                {
                    movies.map((oneMovie) => {
                        return (
                            <article className="one-movie" key={oneMovie.id}>
                                <h2>{oneMovie.title}</h2>
                                <img src={oneMovie.image} alt="" /><br/>
                                <Link to={`/all-movies/${oneMovie.id}`}>Vice informace</Link>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Movies;
