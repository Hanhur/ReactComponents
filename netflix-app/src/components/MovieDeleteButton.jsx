import "./MovieDeleteButton.css";

const MovieDeleteButton = (props) => {
    return (
        <button className="movie-delete-button" type="button" onClick={props.deleteMovie}>Vymazat film</button>
    );
}

export default MovieDeleteButton;