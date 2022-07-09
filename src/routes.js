import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './components/App';
import Inicio from './components/Inicio/Inicio';
import ComoJugar from './components/ComoJugar/ComoJugar';
import Temporadas from './components/Temporadas/Temporadas';
import SistemaDeStats from './components/SistemaDeStats/SistemaDeStats';
import Error404 from './components/Error/404'

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/ComoJugar' element={<ComoJugar />} />
            <Route path='/Temporadas' element={<Temporadas />} />
            <Route path='/SistemadeStats' element={<SistemaDeStats />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;