import React from 'react';
import CurseOfOsiris from '../../shared/images/CurseOfOsiris.jpg';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function CoOPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={CurseOfOsiris} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=u8FsrIz7dCo&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/YZqk804"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/IZqleAN"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">La Maldicion de Osiris</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>La legendaria figura de Osiris regresa después de años de exilio y establece contacto con su antigua estudiante, Ikora Rey.
                                    Osiris descubre que los Vex de las líneas de tiempo pasadas y futuras se están acumulando en Mercurio. 
                                    A pesar de la renuencia de Ikora a confiar en Osiris, envía al Guardián a buscarlo y determinar si puede contarse como un aliado en la lucha.
                                    <br/>
                                    Los Vex han transformado un área de Mercurio en el Bosque Infinito, una simulación virtual del universo que los Vex usan para hacer realidad sus planes. 
                                    El bosque es supervisado por Panoptes, Mente Infinita.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/6Zqlphk"} class="d-block w-100 h-100" alt="..."/>
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

export default CoOPage;