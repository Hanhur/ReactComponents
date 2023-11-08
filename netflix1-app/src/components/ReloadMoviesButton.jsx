import "./ReloadMoviesButton.css";

const ReloadMoviesButton = (props) => {
    return (
        <div>
            <button className="reload-movies-button" onClick={props.reloadMovies}>Načíst filmy</button>
        </div>
    );
}

export default ReloadMoviesButton;
