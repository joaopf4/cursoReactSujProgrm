import React, {Component} from 'react';
import Cronometro from './assets/cronometro.png'
import './style.css'
class Aula46 extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'VAI'
        };
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        let state = this.state;
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'VAI';
        } else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.01;
                this.setState(state);
            }, 10)
            state.botao = 'PAUSAR';
        }
        this.setState(state);
    }

    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }
        let state = this.state;
        state.numero = 0;
        state.botao = 'VAI';
        this.setState(state);

    }

    render(){
        return(
            <div className="container">
                <img alt="cronometro" src={Cronometro} className="img"/>
                <p className="timer">{this.state.numero.toFixed(2)}</p>
                <div className="areaBtn">
                    <button
                        className="botao"
                        onClick={this.vai}
                    >{this.state.botao}</button>
                    <button
                        className="botao"
                        onClick={this.limpar}
                    >Limpar</button>
                </div>
            </div>
        );
    }
}

export default Aula46;