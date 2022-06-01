import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './styles.css'



function Header () {

    const navigate = useNavigate()
    
    return(
        <header>
            <Link to='/'><h1>Prime Filmes</h1></Link>

            <button onClick={() => navigate('/favoritos')}>Filmes Salvos</button>
        </header>
    )
}


export default Header