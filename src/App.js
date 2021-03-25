import React, { Component } from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre 
                nome={props.nome} 
                cargo={props.cargo} 
                idade={props.idade} 
                gender={props.gender}
            />
            <Social 
                fb={props.facebook} 
                lkdin={props.linkedin} 
                youtb={props.youtube}
            />
            <hr/>
        </div>
    )
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá, eu sou {props.gender ? "o" : "a"} {props.nome}</h2>
            {console.log('opa'+ props.gender)}
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    )
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb} target="blank">Facebook </a>
            <a href={props.lkdin} target="blank">LinkedIn </a>
            <a href={props.youtb} target="blank">YouTube </a>
        </div>
    )
}

class Equipee extends Component {
    render(){
        return(
            <div>
                <Sobree nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social fb={this.props.facebook} lkdin={this.props.linkedin} youtb={this.props.youtube}/>
                <hr/>
            </div>
        )
    }
}

class Sobree extends Component {
    render(){
        return(
            <div>
                <h2>Olá, eu sou o(a){this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade} anos</h3>
            </div>
        )
    }
}

function App(){
    return (
        <div>
            <h1>Conheça nossa equipe com FC's:</h1>
            <Equipe 
                nome="Lucas" 
                cargo="Programador" 
                idade="29" 
                facebook="https://google.com" 
                linkedin="https://linkedin.com" 
                youtube="https://youtube.com"
                gender="male"
            />
            <Equipe 
                nome="Pedro" 
                cargo="Designer" 
                idade="15" 
                facebook="https://google.com" 
                linkedin="https://linkedin.com" 
                youtube="https://youtube.com"
                gender="male"
            />
            <Equipe 
                nome="Amanda" 
                cargo="Front-end" 
                idade="25" 
                facebook="https://google.com" 
                linkedin="https://linkedin.com" 
                youtube="https://youtube.com"
            />
            <h1>Conheça nossa equipe com CC's:</h1>
            <Equipee 
                nome="Matheus" 
                cargo="Programador" 
                idade="23" 
                facebook="https://facebook.com"
                linkedin="https://linkedin.com" 
                youtube="https://youtube.com"
            />
            <Equipee 
                nome="Lucas" 
                cargo="Dizainer" 
                idade="21" 
                facebook="https://facebook.com"
                linkedin="https://linkedin.com" 
                youtube="https://youtube.com"
            />
        </div>
    )
}

export default App;