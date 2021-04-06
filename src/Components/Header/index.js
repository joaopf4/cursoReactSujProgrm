import {Link} from 'react-router-dom'; //aula 54 rotas

export default function Header() {
    return(
        <header>
            <h1>Header da página</h1>
            <Link to='/contato'>Contato</Link>
        </header>
    )
}