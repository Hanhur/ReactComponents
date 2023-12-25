import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import Movies from "./page/Movies";
import Serials from "./page/Serials";
import Error from "./page/Error";
import SharedLayout from "./page/SharedLayout";
import OneMovie from "./components/OneMovie";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/serials" element={<Serials/>}/>
                    <Route path="/all-movies/:movieId" element={<OneMovie/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>             
            </Routes>
        </BrowserRouter>
    );
}

export default App;
