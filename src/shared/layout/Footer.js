import React from 'react';
import './Footer.css'; 

const Footer = () => {
   
    return (
        <body class="d-flex flex-column min-vh-50">
            <footer class="mt-auto" w-100 >
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
        </body>
    );

}

export default Footer;