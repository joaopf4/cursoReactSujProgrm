import React, { Component } from 'react';

class Aula35 extends Component {
    constructor(props){
        super(props);
        this.state={
            nome: 'Matheus',
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1
        state.nome = 'Jose'
        this.setState(state);
        console.log('Aumentou');
    }
    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert('Chegou a zero!')
            return
        }
        state.contador -= 1
        this.setState(state);
        console.log('Diminuiu');
    }

    render() {
        return(
            <div>
                <h1>Contador</h1>
                {this.state.nome}
                <h3>
                    <button onClick={this.diminuir}>-</button> 
                    {this.state.contador} 
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}

export default Aula35;