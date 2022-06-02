import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from '../Components/Header'

import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import Favorites from "../Pages/Favorites";
import Error from '../Pages/Error'


function myRoutes() {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filmes/:id" element={<Movies/>}/>
                <Route path="/favoritos" element={<Favorites/>}/>

                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    )
}


export default myRoutes