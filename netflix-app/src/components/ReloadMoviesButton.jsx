import "./ReloadMoviesButton.css";

const ReloadMoviesButton = (props) => {
    return (
        <button className="reload-movies-button" type="button" onClick={props.reloadMovies}>Nacist filmy</button>
    );
}

export default ReloadMoviesButton;