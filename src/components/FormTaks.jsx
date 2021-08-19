import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidv4} from 'uuid';

const FormTaks = ({tasks, settasks}) => {

    const [inputTask, setinputTask] = useState('');

    const handleInpunt = e => {
        setinputTask(e.target.value);
        
    }

    const handleSubmit = e => {
        e.preventDefault();
       
        settasks(
        [
            ...tasks,
            {
                id: uuidv4(),
                text: inputTask,
                complete: false
            }
        ])

    setinputTask(''); 
    
    }

    return (
       <form 
            action="" 
            className="formTask"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                className="inputTask"
                placeholder="Escribe una tarea"
                value={inputTask}
                onChange={handleInpunt}
            />

            <button
                type="submit"
                className="btn"
            >
                <FontAwesomeIcon icon={faPlusSquare} 
                                 className="iconBtn"
                />
            </button>

       </form>
    )
}

export default FormTaks
