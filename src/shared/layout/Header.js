import React from 'react';
import PropTypes from 'prop-types';
import DestinyLogo from '../images/DestinyLogo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const {url} = props;

    return ( 
        <header className="App-header">
            <ul>
                <li><Link to ="/">Inicio </Link></li>
                <li><Link to ="/ComoJugar">Como Jugar </Link></li>
                <li><Link to ="/Temporadas">Temporadas </Link></li>
                <li><Link to ="/SistemaDeStats">Sistema De Stats</Link></li>
            </ul>
            <div className="App-header-logo">
            <h1>New Light</h1>
                <a href={url}>
                    <img src={DestinyLogo} alt="Destiny"className="App-logo"/>
                </a>
            </div>
        </header>
    );
    
}

Header.propTypes = {
    url: PropTypes.string,
}

export default Header;