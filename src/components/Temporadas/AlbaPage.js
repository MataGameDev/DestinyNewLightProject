import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function AlbaPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/CZqEBmE"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=G5Rldn6vRbk&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/9ZqEMJ1"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/dZqE8EW"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">Temporada del Alba</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>A medida que los guardianes se adentran en el Jardín Negro, 
                                    se abren portales que permiten a las máquinas de guerra vex atemporales desplegar su contraofensiva en la Luna. 
                                    No se detendrán hasta que la Luna se convierta en otro de sus refugios. Encuentra una manera de acabar con la invasión.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/uZqReEe"} class="d-block w-100 h-100" alt="..."/>
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

export default AlbaPage;