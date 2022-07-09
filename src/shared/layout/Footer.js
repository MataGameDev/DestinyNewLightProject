import React from 'react';

const Footer = () => {
   
    const root = {
        backgroundColor: '#14191e',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '200px'
    }
    return (
        <footer style={root}>
            &copy; Programacion Web ll  ({new Date().getFullYear()})
                <br/>
                Destiny 2 New Light Project
                <br/>
                José Miguel Ruiz Mata
                <br/>
                Proyecto 4 Parcial
                <br/>
                React App 
        </footer>
    );

}

export default Footer;