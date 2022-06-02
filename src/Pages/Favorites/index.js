import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'






function Favorites() {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const localStor = localStorage.getItem("@primefilmes")

        const myFavorites = JSON.parse(localStor) || []

        setFavorites(myFavorites)

    }, [])

    function deleteMovie(id) {
        let filterMovies = favorites.filter(movie => movie.id !== id)

        setFavorites(filterMovies)

        localStorage.setItem("@primefilmes", JSON.stringify(filterMovies))
    }


    return (
        <section className='s-favorites'>
            <article>
                <h2>Meus Filmes Salvos</h2>

                {favorites.length === 0 && <span className='none'>Você não possui nenhum filme!</span>}

                {favorites.map(movie =>
                    <div key={movie.id} className="favorites">
                        <span>{movie.title}</span>

                        <div>
                            <Link className='details' to={`/filmes/${movie.id}`}>Ver Detalhes</Link>
                            <button onClick={() => deleteMovie(movie.id)} className='delete'>Excluir</button>
                        </div>
                    </div>

                )}
            </article>

        </section>
    )
}


export default Favorites;