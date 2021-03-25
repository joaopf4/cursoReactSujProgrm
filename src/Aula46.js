import React, {Component} from 'react';
import Cronometro from './assets/cronometro.png'
import './style.css'
class Aula46 extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0
        };
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        this.timer = setInterval(() => {
            let state = this.state;
            state.numero += 0.1;
            this.setState(state);
        }, 100)
    }

    limpar(){

    }

    render(){
        return(
            <div className="container">
                <img alt="cronometro" src={Cronometro} className="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a 
                    className="botao"
                    onClick={this.vai}
                    >Vai</a>
                    <a 
                    className="botao"
                    onClick={this.limpar}
                    >Limpar</a>
                </div>
            </div>
        );
    }
}

export default Aula46;