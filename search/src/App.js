import { useState, useEffect } from "react";
import allMovies from "./data";

const App = () => {
    const [searchingTest, setSearchingText] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const moviesAfterFilter = allMovies.filter((oneMovie) => {
            return oneMovie.title.toLocaleLowerCase().includes(searchingTest.toLocaleLowerCase());
        });
        setFilteredMovies(moviesAfterFilter);
    }, [searchingTest]);
    
    return (
        <div className="movies-box">
            <form>
                <input 
                    type="text" 
                    placeholder="Hledany film" 
                    onChange={(event) => setSearchingText(event.target.value)}
                />
            </form>
            <div className="all-movies">
                {
                    filteredMovies.map((oneMovie) => {
                        const {id, image, title, age, tags, description} = oneMovie;
                        return (
                            <div key={id} className="one-movie">
                                <img src={image} alt="" />
                                <h2>{title}</h2>
                                <p>{age}</p>
                                <p>{tags}</p>
                                <p>{description}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default App;