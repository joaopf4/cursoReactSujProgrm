import React, { Component } from 'react';

class Aula40 extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: false
        };

        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({status: false});
    }
    entrar(){
        this.setState({status: true});
    }

    render() {
        return(
            <div>
                {this.state.status ? 
                    <div>
                        <h2>Bem vindo bixão</h2>
                        <button onClick={this.sair}>Sair</button>
                    </div> :
                    <div>
                        <h2>Olá visitante, faça login</h2>
                        <button onClick={this.entrar}> Logar</button>
                    </div>
                }
            </div>
        );
    }
}

export default Aula40;