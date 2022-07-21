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
import Simbionte from '../../shared/images/Simbionte.jpeg';
import Perdidos from '../../shared/images/Perdidos.jpg';


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
                                <h5 class="card-title">La Guerra Roja</h5>
                                <p class="card-text">Explora la primera Historia de Destiny 2 y el como Inicia esta historia.</p>
                                <Link to ="./RedWarPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={CoO} class="w-100" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">La Maldicion de Osiris</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./CoOPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Warmind} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">El Estratega</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./WarmindPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={BlackArmory} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Armeria Negra</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
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
                                <h5 class="card-title">Comodin Salvaje</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./JokersWildPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={"https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2019/05/Destiny-2-Temporada-de-la-Opulencia.jpg?resize=1000%2C600&ssl=1"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Opulencia</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./OpulencePage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Impc} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Imperecederos</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./ImpcPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Alba} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Alba</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
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
                                <h5 class="card-title">Dignos</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./WorthyPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Visitantes} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Visitantes</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./VisitantesPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Caza} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Caza</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./HuntPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Elegidos} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Elegidos</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
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
                    <div class="col">
                        <div class="card">
                            <img src={Simbionte} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Simbionte</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./SimbiontePage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={Perdidos} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Perdidos</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./LostPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={"https://images.contentstack.io/v3/assets/blte410e3b15535c144/blt58ebe92f5c2985f3/620be743510c6b1c87b8a9d7/story-bg.jpg"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Renacidos</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
                                <Link to ="./RenacidosPage" class="btn btn-info">Conoce más </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={"https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltce2d3612f61af1b0/628baec01cd65960bcff1612/s17-media-screenshot1.jpg"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Atormentados</h5>
                                <p class="card-text">Some quick example text to build on the card 
                                title and make up the bulk of the card's content.</p>
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