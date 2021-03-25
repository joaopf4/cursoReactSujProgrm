import React, { Component } from "react";

class Aula37 extends Component{
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    //Primeira coisa que é carregada de um class component que 
    //é chamado é o seu constructor

    componentDidMount(){
        setInterval(()=>{
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);
    }
    //ComponentDidMount é rodado logo depois que o constructor
    //é montado. Só é rodado uma única vez, depois que o componente
    //é montado

    componentDidUpdate() {
        console.log('Atualizou!!');
    }
    //Acionado toda vez que um componente é atualizado.
    //O componente pode ser atualizado de duas maneiras, através 
    //do envio de novas props ou a atualização do seu estado.

    // shouldComponentUpdate() {
    // }
    //Retorna true or false dependendo se vc quer que atualize ou não
    //o componente

    render(){
        return(
            <div>
                <h1>Meu projeto {this.state.hora} </h1>
            </div>
        );
    }
}

export default Aula37;