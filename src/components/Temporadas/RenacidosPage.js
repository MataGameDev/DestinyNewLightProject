import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function RenacidosPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/aZqUnz2"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=snIL9oZcFe4&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/XZqUxgK"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/uZqUWWm"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">Temporada de los Renacidos</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>La Reina Bruja se robó la Luz. 
                                    Su ejército de combatientes de la colmena carga por el campo de batalla y muerden tu armadura antes de sucumbir al poder de tu escuadra.
                                     Los espectros de los enemigos a los que venciste flotan en silencio, 
                                     un siniestro presagio de una batalla sin fin. 
                                     De repente, sin que puedas ni siquiera dar un respiro, la horda se levanta ante ti y carga de nuevo.
                                     ¡Alerta, guardián!</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/LZqUTzq"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default RenacidosPage;