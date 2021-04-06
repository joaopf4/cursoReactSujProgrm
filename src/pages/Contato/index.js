import React from 'react'; //aula 54 rotas
import { Link } from 'react-router-dom';

function Contato() {
    return (
        <div>
            <h1>Bem vindo a Contatos</h1><br/>
            <span>Email | Tel</span><br/><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
        </div>
    );
}

export default Contato;