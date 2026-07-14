import movies from "../data";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movies = () => {
    return (
        <section>
            <div className="all-movies">
                {
                    movies.map((oneMovie) => {
                        return (
                            <article key={oneMovie.id} className="one-movie">
                                <h2>{oneMovie.title}</h2>
                                <img src={oneMovie.image} alt="" /><br />
                                <Link to={`/all-movies/${oneMovie.id}`}>Více informací</Link>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}
export default Movies;