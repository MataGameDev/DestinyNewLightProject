import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function WarmindPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/LZql0DH"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=ha8Syj8ayUc&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/bZql54D"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/CZqzuoR"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">El Estratega</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>Anastasia Bray, una Guardiana que hace tiempo se pensaba perdida, busca una conexión con su pasado.
                                    Su búsqueda le lleva a los casquetes polares de Marte. 
                                    Cuando los satélites de guerra de la Edad de Oro comienzan a estrellarse contra el hielo, los glaciares comienzan a descongelarse, 
                                    revelando el núcleo del Estratega Rasputin, y un antiguo ejército colmena empeñado en destruirlo. Ahora libre, la colmena revolotea sirviendo a su dios Xol. 
                                    El Guardián debe ayudar a Ana a descubrir su pasado y destruir el gigantesco dios gusano de la Colmena antes de que sea demasiado tarde.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/PZqzsoc"} class="d-block w-100 h-100" alt="..."/>
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

export default WarmindPage;