import "./AllDeleteButton.css";

const AllDeleteButton = (props) => {
    return (
        <div>
            <button className="main-delete-button" onClick={props.deleteMovies}>Vymazat vše</button>
        </div>
    );
}

export default AllDeleteButton;
