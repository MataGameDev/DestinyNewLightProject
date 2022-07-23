import React from 'react';
import { Link } from "react-router-dom";
//import ReactPlayer from 'react-player';
/* imagenes de  las clases del juego Hechicero , Cazador y Titan */
import Clases1 from '../../shared/images/clases1.jpg';
import Clases2 from '../../shared/images/clases2.jpg';
import Clases3 from '../../shared/images/clases3.jpg';
import Warlock from '../../shared/images/WarlockBanner.jpg';
import SolarWarlock from '../../shared/images/SolarWarlockDawnBlade.PNG';
import VoidWarlock from '../../shared/images/VoidWarlock.jpg';
import ArcWarlock from '../../shared/images/StormcallerWarlock.jpg';
import StasisWarlock from '../../shared/images/StasisWarlock.jpg';
import Titan from '../../shared/images/TitanBanner.jpg';
import SolarTitan from '../../shared/images/SunbreakerTitan.jpg';
import VoidTitan from '../../shared/images/SentinelTitan.png';
import ArcTitan from '../../shared/images/ArcTitan.jpg';
import StasisTitan from '../../shared/images/StasisTitan.jpg';
import Cazador from '../../shared/images/CazadorBanner.jpg';
import SolarCazador from '../../shared/images/SolarCazador.jpg';
import VoidCazador from '../../shared/images/VoidCazador.jpg';
import ArcCazador from '../../shared/images/ArcCazador.jpg';
import StasisCazador from '../../shared/images/StasisCazador.jpg';



function ComoJugar(props) {
    return (
        
        <div class="Origin">
            <br/>
            <br/>
            {/* Aqui va el Carousel que muestra todas las clases del juego Hechicero , Cazador y Titan */}
            <div class="container-fluid">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Clases1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={Clases2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={Clases3} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            {/* Aqui va el Container de las Clases el cual explica todas las clases y subclases del juego */}
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <div class="row g-0 bg-light position-relative">
                            <div class="col-md-6 mb-md-0 p-md-4">
                                <img src={Warlock} class="w-100" alt="..."/>
                            </div>
                            <div class="col-md-6 p-4 ps-md-0">
                            <h1 class="mt-0">Hechicero</h1>
                            <h2>El Hechicero (Warlock en inglés) es una clase de Guardián que se especializa en la unión de "magia" de El Viajero y armas.
                                 Como eruditos y guerreros de la Luz, los hechiceros se dedican a entender al Viajero y su poder.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="5000">
                                    <img src={VoidWarlock} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={SolarWarlock} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={ArcWarlock} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={StasisWarlock} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <div class="row g-0 bg-light position-relative">
                            <div class="col-md-6 mb-md-0 p-md-4">
                                <img src={Titan} class="w-100" alt="..."/>
                            </div>
                            <div class="col-md-6 p-4 ps-md-0">
                            <h1 class="mt-0">Titan</h1>
                            <h2>El Titán (Titan en inglés) es una clase de Guardián que se especializa en el combate cercano, defensa y armamento pesado. 
                                heroicos defensores de la Luz Se enfrentan a cualquier reto, con seguridad y decisión, 
                                actuando como instrumentos de fuerza bruta de la voluntad del Viajero...</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="5000">
                                    <img src={VoidTitan} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={SolarTitan} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={ArcTitan} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={StasisTitan} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <div class="row g-0 bg-light position-relative">
                            <div class="col-md-6 mb-md-0 p-md-4">
                                <img src={Cazador} class="w-100" alt="..."/>
                            </div>
                            <div class="col-md-6 p-4 ps-md-0">
                            <h1 class="mt-0">Cazador</h1>
                            <h2>El Cazador (Hunter en inglés) es una clase de Guardián que se especializa en el combate táctico, la velocidad y el sigilo. 
                                Son exploradores osados y asesinos expertos con los cuchillos y las armas de precisión. 
                                Los cazadores descubren sus propios caminos y escriben sus propias leyes.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="5000">
                                    <img src={VoidCazador} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={SolarCazador} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={ArcCazador} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="5000">
                                    <img src={StasisCazador} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                    <div class="card">
                        <img src={"https://cutt.ly/VZqtat3"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h1 class="card-title">Bienvenido a la Vanguardia</h1>
                            <br/>
                            <br/>
                            <h2 class="card-text">Disfruta de elegir cualquiera de las clases y subclases que incluye el juego y por si te arrepientes de tu descision no importa,
                            ya que bungie brinda 3 espacios para que puedas jugar con las clases y experimentes con ellas.
                            </h2>
                            <br/>
                            <br/>
                            <h1 class="card-text">Dirigete a la Torre para experimentar tus primeras misiones Guardian</h1>
                            <br/>
                            <br/>
                            </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="card">
                        <img src={"https://cutt.ly/2ZquB2Y"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h1 class="card-title">Bienvenido a el Crisol</h1>
                            <br/>
                            <br/>
                            <h2 class="card-text">Lord Shaxx proporciona contratos del Crisol (PvP) y ofrece aventuras especiales relacionadas con varias armas. Al igual que Zavala,
                             puede otorgar recompensas inmediatas y anuncia la mayoría de las partidas del Crisol, a excepción del Estandarte de Hierro y Pruebas de Osiris.
                            </h2>
                            <br/>
                            <br/>
                            <h1 class="card-text">Sal a Combatir contra otros guardianes !!!</h1>
                            <br/>
                            <br/>
                            </div>
                    </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                    <div class="card">
                        <img src={"https://cutt.ly/zZqtgre"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h1 class="card-title">Bienvenido a Gambito</h1>
                            <br/>
                            <br/>
                            <h2 class="card-text">El Vagabundo es quien organiza las actividades de Gambito.
                            Como Shaxx, ofrece contratos de Gambito que te permiten potenciarte y recoger varias armas y equipamiento temáticos de Gambito.
                            </h2>
                            <br/>
                            <br/>
                            <h1 class="card-text">Cuidate del vagabundo !!!</h1>
                            <br/>
                            <br/>
                            </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="card">
                        <img src={"https://cutt.ly/sZqihOm"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h1 class="card-title">Visita a Banshee-44</h1>
                            <br/>
                            <br/>
                            <h2 class="card-text">Banshee-44 les da a los guardianes recién estrenados una nueva arma cinética para reemplazar la primera.
                             Al equiparla, inicias el proceso creciente de incrementar tu nivel de Potencia con nuevo equipamiento.
                            </h2>
                            <br/>
                            <br/>
                            <h1 class="card-text">Dirigete a la Torre y construye o vende algunas armas guardian</h1>
                            <br/>
                            <br/>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="card">
                        <img src={"https://cutt.ly/5ZqooWA"} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h1 class="card-title">Adentrate en el Universo De destiny y Conoce Mas!</h1>
                            <br/>
                            <br/>
                            <h2 class="card-text">Ahora que ya conoces los conceptos basicos y actividades principales del juego 
                            ya podrias ir a jugar Destiny 2 , sin Embargo te Motivamos a conocer la historia del juego en nuestro apartado de
                            historia para que tengas contexto de todo lo que a pasado...
                            </h2>
                            <br/>
                            <br/>
                            <h1 class="card-text">Per Audacia ad Astra!</h1>
                            <br/>
                            <br/>
                            <Link to={'/'} class="btn btn-info">Volver al Inicio</Link>
                            </div>
                    </div>
        </div>
    );
}

export default ComoJugar;

