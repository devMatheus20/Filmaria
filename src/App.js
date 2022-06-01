import React from 'react'
import MyRoutes from './Routes/routes'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return(
        <>
            <ToastContainer autoClose="2500" />
            <MyRoutes />
        </>
    )
}


export default App