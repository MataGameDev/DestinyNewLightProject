import React from 'react';
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
import Vanguardia from '../../shared/images/Vanguardia.jpeg';


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
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src={VoidWarlock} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
                                    <img src={SolarWarlock} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
                                    <img src={ArcWarlock} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
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
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src={VoidTitan} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
                                    <img src={SolarTitan} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
                                    <img src={ArcTitan} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
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
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src={VoidCazador} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
                                    <img src={SolarCazador} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
                                    <img src={ArcCazador} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="10000">
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
                    <div class="col">
                    <div class="card">
                        <img src={Vanguardia} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h1 class="card-title">Bienvenido a la Vanguardia</h1>
                            <br/>
                            <br/>
                            <h2 class="card-text">Disfruta de elegir cualquiera de las clases y subclases que incluye el juego y por si te arrepientes de tu descision no importa,
                            ya que bungie brinda 3 espacios para que puedas jugar con las clases y experimentes con ellas.
                            </h2>
                            <br/>
                            <br/>
                            <h3 class="card-text">Dirigete a la Torre para experimentar tus primeras misiones Guardian</h3>
                            <br/>
                            <br/>
                            <a href="/Inicio" class="btn btn-dark">Volver al Inicio</a>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComoJugar;

