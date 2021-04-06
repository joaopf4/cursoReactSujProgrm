import React from 'react'; //aula 54 rotas
import { useParams } from 'react-router-dom';

function Produto() {
    const { id } = useParams();
    return (
        <div>
            <h1>Grade de produtos</h1><br/>
            <span>Produto selecionado: {id}</span>
        </div>
    );
}

export default Produto;