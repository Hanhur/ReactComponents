import Modal from "./components/Modal";
import data from "./data";
import { useState, useReducer } from "react";

const reducer = () => {

}

const defaultState = {
    movies: [],
    showNotification: false,
    notificationContent: ""
}

const App = () => {
    // const [movies, setMovies] = useState(data);
    // const [showNotification, setShowNotification] = useState(false);
    const [movieName, setMovieName] = useState("");
    const [state, dispatch] = useReducer(reducer, defaultState);

    const submitForm = (event) => {
        event.preventDefault();

        if(movieName) 
        {
            
        }
        else 
        {
            
        }
    }

    return (
        <section>
            {state.showNotification && <Modal notifContent={state.notificationContent}/>}
            <form onSubmit={submitForm}>
                <input type="text" onChange={(event) => setMovieName(event.target.value)}/>
                <input type="submit" value="Pridat"/>
            </form>
            <div>
                {
                    state.movies.map((oneMovie) => {
                        return (
                            <div key={oneMovie.id}>
                                <p>{oneMovie.name}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default App;
// 44