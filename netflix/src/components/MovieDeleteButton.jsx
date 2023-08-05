import "./MovieDeleteButton.css";

const MovieDeleteButton = (props) => {
    return (
        <div>
            <button className="movie-delete-button" onClick={props.deleteMovie}>Vymazat film</button>
        </div>
    );
}
export default MovieDeleteButton;