import React from 'react'; //aula 54 rotas
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bem vindo a home</h1>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link><br/>
        </div>
    );
}

export default Home;