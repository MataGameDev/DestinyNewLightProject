import React from 'react';
import './Inicio.css';
import NewLight from '../../shared/images/NewLight.jpg';



function Inicio(props) {
    const BannerStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        height: '800px',
        marginTop: '100px',
        marginBottom: '100px',
        border: '5px','solid':'black',
        paddingLeft: '50px',


    };
    const BoxHowToPlay = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <div>
            <img src={NewLight} style={BannerStyle} alt='' />
            <p style={BoxHowToPlay}>
                Caja 1
            </p>
            <p style={BoxHowToPlay}>
                Caja 2
            </p>
            <p style={BoxHowToPlay}>
                Caja 3
            </p>
        </div>
    );
}

export default Inicio;