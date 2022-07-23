import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function LostPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/RZqY8P6"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=h2gjP-IAI6A&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/rZqY7B2"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/wZqUwgU"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">Temporada de los perdidos</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>Mara Sov, Reina de los insomnes. 
                                    Es poco decir que han pasado muchas cosas en su ausencia. 
                                    Su hermano, a quien vio por última vez descansando en paz, ahora camina entre los guardianes con un nuevo nombre.
                                     Las fuerzas de Xivu Arath se reúnen en la sombra de la Flota Negra y Savathûn apareció en el corazón de la Noche Eterna.
                                     Así es como ahora, bajo la esperada luz del sol, Mara Sov regresa a la Ciudad Ensoñada y busca hablar con la Reina Bruja.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/VZqUrIO"} class="d-block w-100 h-100" alt="..."/>
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

export default LostPage;