import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function ChosenPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/uZqTVFe"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=57aPfmokwQU&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/VZqT3Mg"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/lZqT5Yo"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">Temporada de los Elegidos</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>Mientras las Pirámides y Xivu Arath desestabilizan el sistema solar, la emperatriz Caiatl, líder de los cabal e hija de Calus,
                                     busca formar una alianza. Pero cuando pide más de lo que Zavala puede ofrecer, 
                                     las negociaciones se derrumban, y los guardianes son elegidos como la punta de lanza en el conflicto contra su creciente consejo de guerra.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/QZqYqJt"} class="d-block w-100 h-100" alt="..."/>
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

export default ChosenPage;