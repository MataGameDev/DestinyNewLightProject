import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './components/App';
import Inicio from './components/Inicio/Inicio';
import ComoJugar from './components/ComoJugar/ComoJugar';
import Temporadas from './components/Temporadas/Temporadas';
import SistemaDeStats from './components/SistemaDeStats/SistemaDeStats';
import Error404 from './components/Error/404';
import RedWarPage from './components/Temporadas/RedWarPage';
import AlbaPage from './components/Temporadas/AlbaPage';
import AtormentadosPage from './components/Temporadas/AtormentadosPage';
import BlackArmoryPage from './components/Temporadas/BlackArmoryPage';
import ChosenPage from './components/Temporadas/ChosenPage';
import CoOPage from './components/Temporadas/CoOPage';
import HuntPage from './components/Temporadas/HuntPage';
import SimbiontePage from './components/Temporadas/SimbiontePage';
import ImpcPage from './components/Temporadas/ImpcPage';
import JokersWildPage from './components/Temporadas/JokersWildPage';
import LostPage from './components/Temporadas/LostPage';
import OpulencePage from './components/Temporadas/OpulencePage';
import RenacidosPage from './components/Temporadas/RenacidosPage';
import VisitantesPage from './components/Temporadas/VisitantesPage';
import WarmindPage from './components/Temporadas/WarmindPage';
import WorthyPage from './components/Temporadas/WorthyPage';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/ComoJugar' element={<ComoJugar />} />

            <Route path='/Temporadas' element={<Temporadas />} />
            <Route path='/Temporadas/RedWarPage' element={<RedWarPage />} />
            <Route path='/Temporadas/CoOPage' element={<CoOPage />} />
            <Route path='/Temporadas/WarmindPage' element={<WarmindPage />} />
            <Route path='/Temporadas/BlackArmoryPage' element={<BlackArmoryPage />} />
            <Route path='/Temporadas/JokersWildPage' element={<JokersWildPage />} />
            <Route path='/Temporadas/OpulencePage' element={<OpulencePage />} />
            <Route path='/Temporadas/ImpcPage' element={<ImpcPage />} />
            <Route path='/Temporadas/AlbaPage' element={<AlbaPage />} />
            <Route path='/Temporadas/WorthyPage' element={<WorthyPage />} />
            <Route path='/Temporadas/VisitantesPage' element={<VisitantesPage />} />
            <Route path='/Temporadas/ChosenPage' element={<ChosenPage />} />
            <Route path='/Temporadas/HuntPage' element={<HuntPage />} />
            <Route path='/Temporadas/SimbiontePage' element={<SimbiontePage />} />
            <Route path='/Temporadas/LostPage' element={<LostPage />} />
            <Route path='/Temporadas/RenacidosPage' element={<RenacidosPage />} />
            <Route path='/Temporadas/AtormentadosPage' element={<AtormentadosPage />} />

            <Route path='/SistemadeStats' element={<SistemaDeStats />} />

            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;