import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function WorthyPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/vZqRsKI"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=PDQS2RbD4Ps&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/uZqRh9c"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/uZqRWQf"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">Temporada de los Dignos</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>El reloj solar ha sido liberado de las garras de la Legión Roja,
                                     pero un desollador psiónico que escapó concibe un plan desesperado para vengarse contra la Última Ciudad. 
                                     Los guardianes de la luz deben dejar algunas diferencias atrás para unirse con aliados impensables y salvar la Ciudad de la destrucción total.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/bZqRARy"} class="d-block w-100 h-100" alt="..."/>
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

export default WorthyPage;