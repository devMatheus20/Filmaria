import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

import './styles.css'

import Header from '../../Components/Header'

function Movies() {

    const [movie, setMovie] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchMovie() {
            const { data: newMovie } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=86da2cf4cf000ed3bc664a7dd307a24b&language=pt-BR`)

            setMovie(newMovie)
        }

        fetchMovie()
    }, [id])

    function saveMovie() {
       const myLocal = localStorage.getItem('@primefilmes')

       const savedMovies = JSON.parse(myLocal) || []

       const verified = savedMovies.some(movie1 => movie1.id === movie.id)
       
       if(verified) {
           toast.warn("Esse filme já está em sua lista!", {
               theme: "colored"
           })
            
           return
       }
       
       savedMovies.push(movie)

       localStorage.setItem('@primefilmes', JSON.stringify(savedMovies))

       toast.success("Filme salvo com sucesso!", {
        theme: "colored"
    })
    }


    return (
        <>
            <Header />

            <section className='s-info-movie'>
                <article className='info-movie'>
                    <h2>{movie.title}</h2>

                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`Imagem do Filme ${movie.title}`} />

                    <b>Sinopse</b>
                    <p>{movie.overview}</p>

                    <span>Avaliação: {movie.vote_average}</span>

                    <div className='buttons-movie'>
                        <button onClick={saveMovie}>Salvar</button>
                        <button>
                            <a href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
                                target="_blank"
                                rel='noreferrer'>Trailer
                            </a>
                        </button>
                    </div>
                </article>
            </section>
        </>
    )
}


export default Movies