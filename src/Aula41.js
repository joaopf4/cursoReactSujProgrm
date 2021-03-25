import React, { Component } from 'react';
import Feed from './Components/Feed';

class Aula41 extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Lucas', curtidas: 120, comentarios: 33},
                {id: 3, username: 'Amanda', curtidas: 90, comentarios: 20},
                {id: 4, username: 'José', curtidas: 1, comentarios: 1},
            ]
        };
    }

    render() {
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                        <Feed 
                            id={item.id}
                            username={item.username}
                            curtidas={item.curtidas}
                            comentarios={item.comentarios}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Aula41;