import React from 'react';
import { Link } from 'react-router-dom';
import RedWar from '../../shared/images/GuerraRojaSeason1.jpg';
import CoO from '../../shared/images/CurseOfOsiris.jpg';
import Warmind from '../../shared/images/Warmind.jpg';
import BlackArmory from '../../shared/images/BlackArmory.jpg';
import JokersWild from '../../shared/images/JokersWild.jpg';
import Impc from '../../shared/images/Impc.jpg';
import Alba from '../../shared/images/Alba.jpg';
import Dignos from '../../shared/images/Dignos.jpg';
import Visitantes from '../../shared/images/Visitantes.jpg';
import Caza from '../../shared/images/Caza.jpg';
import Elegidos from '../../shared/images/Elegidos.jpg';


//<Link to={`/season${season}`}></Link>

function Temporadas(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <img src={RedWar} class="w-100" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">La Guerra Roja</h1>
                                <Link to ="./RedWarPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={CoO} class="w-100" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">La Maldicion de Osiris</h1>
                                <Link to ="./CoOPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Warmind} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">El Estratega</h1>
                                <Link to ="./WarmindPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={BlackArmory} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Armeria Negra</h1>
                                <Link to ="./BlackArmoryPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <img src={JokersWild} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Comodin Salvaje</h1>
                                <Link to ="./JokersWildPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={"https://cutt.ly/IZqxmEI"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Opulencia</h1>
                                <Link to ="./OpulencePage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Impc} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Imperecederos</h1>
                                <Link to ="./ImpcPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Alba} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Alba</h1>
                                <Link to ="./AlbaPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <img src={Dignos} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Dignos</h1>
                                <Link to ="./WorthyPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Visitantes} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Visitantes</h1>
                                <Link to ="./VisitantesPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Caza} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Caza</h1>
                                <Link to ="./HuntPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Elegidos} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Elegidos</h1>
                                <Link to ="./ChosenPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <div class="card">
                            <img src={"https://cutt.ly/SZqcjiQ"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Simbionte</h1>
                                <Link to ="./SimbiontePage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={"https://cutt.ly/qZqcHdt"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Perdidos</h1>
                                <Link to ="./LostPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={"https://cutt.ly/9ZqxC5E"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Renacidos</h1>
                                <Link to ="./RenacidosPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <img src={"https://cutt.ly/pZqxNRH"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-title">Atormentados</h1>
                                <Link to ="./AtormentadosPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default Temporadas;