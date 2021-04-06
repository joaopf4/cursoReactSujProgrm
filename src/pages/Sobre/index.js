import React from 'react'; //aula 54 rotas
import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div>
            <h1> Sobre o nosso projeto </h1>
            <Link to="/">Home</Link><br/>
            <Link to="/contato">Contato</Link><br/>
        </div>
    );
}

export default Sobre;