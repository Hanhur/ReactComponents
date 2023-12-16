import { useParams } from "react-router-dom";

const OneMovie = () => {
    const {movieId} = useParams();

    return (
        <div>
            <h2>{movieId}</h2>
        </div>
    );
}

export default OneMovie;
