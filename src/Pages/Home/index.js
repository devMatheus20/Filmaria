import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './styles.css'




function Home() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchMovies() {
            const { data: newMovies } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=86da2cf4cf000ed3bc664a7dd307a24b&language=pt-BR')

            setMovies([...newMovies.results.splice(1, 6)])
        }

        fetchMovies()

        setLoading(false)
    }, [])

    function goToMovies(movieID) {
        navigate(`./filmes/${movieID}`)
    }

    if (loading) {
        return (
            <div className='loading'>
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }


    return (
        <section className='s-movies'>
            {movies.map(movie =>

                <article key={movie.id} className="container-movie">
                    <h2>{movie.title}</h2>

                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Imagem do Filme ${movie.title}`} />

                    <button onClick={() => goToMovies(movie.id)}>Acessar</button>
                </article>
            )}
        </section>
    )
}


export default Home