import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function OpulencePage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/iZqWYgB"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=IcBVi06hVoc&ab_channel=KuroashiDestiny"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/hZqWOiW"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/kZqWDY9"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">Opulencia</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>Esta temporada, el Emperador Calus convoca a los guardianes a poner a 
                                    prueba su valía haciendo que se enfrenten a los enemigos en su Casa de las fieras. 
                                    También enviará a los guardianes en cacerías de tesoros por todo el sistema solar para desbloquear el poder del Cáliz de la Opulencia
                                     y obtener mejoras que les permitirán elegir qué tipo de equipamiento quieren ganar.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/hZqWH1c"} class="d-block w-100 h-100" alt="..."/>
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

export default OpulencePage;