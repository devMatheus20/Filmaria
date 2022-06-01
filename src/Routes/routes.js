import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import Favorites from "../Pages/Favorites";


function myRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filmes/:id" element={<Movies/>}/>
                <Route path="/favoritos" element={<Favorites/>}/>
            </Routes>
        </Router>
    )
}


export default myRoutes