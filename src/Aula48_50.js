import React, { useState, useEffect } from 'react';

function Aula48_50(){

    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');
        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }

        return() => {}
    }, [])

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas]);

    function handleAdd(){
        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <input 
                type="text" 
                value={input} onChange={(e) => setInput(e.target.value)} 
            />
            <button 
                type="button" 
                onClick={handleAdd}
            >
                Adicionar
            </button>
        </div>
    );
}

export default Aula48_50;