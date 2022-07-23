import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function HuntPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/hZqTmPH"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=HcIL8KrFMTc&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/5ZqTYeT"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/pZqTO9O"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">Temporada de la Caza</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>Planetas enteros se desvanecieron.
                                     En En el caos resultante, la Diosa de la Guerra de la colmena Xivu Arath hace una jugada osada para obtener poder. 
                                     Si no se le presta atención, el sistema solar, que ya está en crisis, 
                                     estará en peligro. Osiris necesitará ayuda para investigar la amenaza emergente.
                                      Por suerte, un nuevo (pero conocido) aliado, conocido como "el Cuervo", estará contigo para asistirlo.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/PZqTDfd"} class="d-block w-100 h-100" alt="..."/>
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

export default HuntPage;