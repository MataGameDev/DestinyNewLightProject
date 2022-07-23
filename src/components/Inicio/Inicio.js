import React from 'react';
import './Inicio.css';
import NewLight from '../../shared/images/BannerNewLight.jpg';
import ComoJugarExp from '../../shared/images/NewLightexpComoJugar.jpg';
import TemporadasBanner from '../../shared/images/Temporadas Banner.jpg';
import StatsBanner from '../../shared/images/StatsBanner.jpg';

function Inicio(props) {

    return (
        <div class="Origin">
            <br/>
            <br/>
            <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <img src={NewLight} class="img-thumbnail" alt="" />  
                </div>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>
            <div class="container-fluid">
                <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                        <h1>Como Jugar</h1>
                        </div>
                        <div class="card-body">
                            <img src={ComoJugarExp} class="card-img-top" alt="..."/>
                            <h3 class="card-title">Bienvenido Guardian</h3>
                            <h5 class="card-title"> ACCIÓN MMO DEFINITIVA </h5>
                            <p class="card-text">
                                Únete a millones de jugadores
                                 Vive la historia en evolución de Destiny 2 con amigos, o explora las estrellas con una escuadra de una sola persona.</p>
                            <a href="/ComoJugar" class="btn btn-dark">Ir a la Pestaña Como Jugar</a>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <h1>Temporadas</h1>
                        </div>
                        <div class="card-body">
                            <img src={TemporadasBanner} class="card-img-top" alt="..."/>
                            <h3 class="card-title">Conoce el Universo e historia de Destiny 2</h3>
                            <h5 class="card-title"> El leviatan Regresa</h5>
                            <p class="card-text">Conoce mas sobre el Universo de Destiny y explora la Galaxia con Amigos o de manera individual <br/> Per Audacia ad Astra!</p>
                            <a href="/Temporadas" class="btn btn-dark">Ir a la Pestaña Temporadas</a>
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div class="container-fluid">
                    <div class = "row">
                    <div class="col-12">
                <div class="card">
                        <div class="card-header">
                            <h1>Sistema de Stats</h1>
                        </div>
                        <div class="card-body">
                            <img src={StatsBanner} class="card-img-top" alt="..."/>
                            <h3 class="card-title">Explora el apartado de Estadisticas</h3>
                            <h5 class="card-title">se el mas Veloz, el mas resistente o el mas Super!!!</h5>
                            <p class="card-text">Un apartado donde conoceras como funcionan todos los sistemas de stats dentro de destiny , desde las armas hasta las armaduras
                             de esta manera obtendras un conocimiento muy bueno de las bases del videojuego </p>
                            <a href="/SistemaDeStats" class="btn btn-dark">Ir a la Pestaña de Sistema de Stats</a>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        </div>
    );
}

export default Inicio;