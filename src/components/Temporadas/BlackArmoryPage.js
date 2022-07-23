import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function BlackArmoryPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={"https://cutt.ly/fZqvCz9"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=O-mGbVvGZ08&t=50s&ab_channel=Destiny2"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://cutt.ly/QZqvKQY"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/dZqnZLb"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">Armeria Negra</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>Apartir de la Armeria Oscura Todo el contenido de 
                                    Temporadas viene incluido en el juego en Formato de Libros 
                                    y Archivos en este caso Los archivos de la Armería Oscura (en Latinoamérica)  es un libro de Historia introducido en Armería Oscura. 
                                    Es el diario de Henrietta Meyrin, una de las fundadoras de la Armería Oscura, y detalla la creación de la Armería Oscura, 
                                    el Colapso y la temprana Edad Oscura. Las entradas se desbloqueaban completando la Fragua Gofannon y la Fragua Bergusia.</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/JZqbw17"} class="d-block w-100 h-100" alt="..."/>
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

export default BlackArmoryPage;