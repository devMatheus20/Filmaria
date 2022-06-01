import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './styles.css'

import Header from '../../Components/Header'



function Home() {

    const [movies, setMovies] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchMovies() {
            const { data: newMovies } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=86da2cf4cf000ed3bc664a7dd307a24b&language=pt-BR')

            setMovies([...newMovies.results.splice(8, 6)])
        }

        fetchMovies()
    }, [])

    function goToMovies(movieID) {
        navigate(`./filmes/${movieID}`)
    }


    return (
        <>
            <Header />

            <section className='s-movies'>
                {movies.map(movie =>

                    <article key={movie.id} className="container-movie">
                        <h2>{movie.title}</h2>

                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Imagem do Filme ${movie.title}`} />

                        <button onClick={() => goToMovies(movie.id)}>Acessar</button>
                    </article>
                )}
            </section>
        </>


    )
}


export default Home