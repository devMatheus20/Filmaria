import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'



function Header () {
    
    return(
        <header>
            <Link to='/'><h1>Prime Filmes</h1></Link>

            <Link to='/favoritos' className='favoritos'>Filmes Salvos</Link>
        </header>
    )
}


export default Header