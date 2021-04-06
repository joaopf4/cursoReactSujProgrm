import React from 'react'; //aula 54 rotas
import { Link } from 'react-router-dom';

function Erro() {
    return (
        <div>
            <h1> Hmm, parece que essa página não existe. </h1>

            <span>Você pode estar procurando:</span><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/contato">Contato</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
        </div>
    );
}

export default Erro;