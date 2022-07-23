import React from 'react';
import RedWar from '../../shared/images/GuerraRojaSeason1.jpg';
import ReactPlayer from 'react-player/youtube';
import './Temporadas.css';

function RedWarPage(props) {
    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">

                    <div class ="col-4">
                        <img src={RedWar} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class ="col-4">
                        <div id="carouselExampleSlidesOnly" class="img-thumbnail" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                            <ReactPlayer url={"https://www.youtube.com/watch?v=SOegYa1Be2U&ab_channel=Play4Games"} width="100%" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src={"https://external-preview.redd.it/DCUhhyOW44XWleYv-mAd5R504JPlReVV_4bP83eNDvE.jpg?auto=webp&s=e09b5723aee332719ddcdd7f4d0615df9ec50006"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <img src={"https://cutt.ly/6Zqj9at"} class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title" colors="war">La Guerra Roja</h1>
                                <br/>
                                <br/>
                                <h2 class="card-text"><bold>En ella se nos cuenta la 
                                historia de cómo la última ciudad ha caído ante una fuerza invasora dirigida por Ghaul,
                                el imponente comandante de la brutal Legión Roja. Este personaje despoja de su poder 
                                a los guardianes y obliga a huir a los supervivientes...</bold></h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={"https://cutt.ly/UZqkqdQ"} class="d-block w-100 h-100" alt="..."/>
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

export default RedWarPage;