import React, { useState, useEffect, useMemo, useCallback } from 'react';

function Aula48_50_51_52(){

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

    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, input]);
        setInput('');
    }, [input, tarefas]);

    const totalTarefas = useMemo(() => tarefas.length, [tarefas]);



    return (
        <div>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <br/>
            <strong>Você tem {totalTarefas} tarefas! </strong><br/>
            <form>
                <input 
                    type="text" 
                    value={input} onChange={(e) => setInput(e.target.value)} 
                />
                <button 
                    type="submit" 
                    onClick={handleAdd}
                >
                    Adicionar
                </button>                
            </form>
        </div>
    );
}

export default Aula48_50_51_52;