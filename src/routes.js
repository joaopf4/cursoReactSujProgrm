import { BrowserRouter, Route, Switch } from 'react-router-dom'; //aula 54 routes
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './Components/Header';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" component={Sobre} />
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/produto/:id" component={Produto} />

                <Route path="*" component={Erro} />
                {/* ou: 
                <Route exact path="/sobre">
                    <Sobre />
                </Route>
                */}
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;