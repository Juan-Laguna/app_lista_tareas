import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import Form from './Form';

const Task = ({task, handleComplete, funcEditTask, deleteTask}) => {

    const [editTask, seteditTask] = useState(false);
    const [newTask, setnewTask] = useState(task.text);

   

    return (
        <li className="list-tasks-task">
            <FontAwesomeIcon 
                icon={task.complete ? faCheckSquare : faSquare} 
                className="list-tasks-icon list-tasks-icon-check" 
                onClick={() => handleComplete(task.id)}  
            />
            <div className="list-tasks-text">
              {editTask ? 
                            <Form 
                                newTask={newTask}
                                setnewTask={setnewTask}
                                seteditTask={seteditTask}
                                funcEditTask={funcEditTask}
                                task={task}
                            /> 
                        : 
                            task.text
            }
            </div>
            <div className="list-tasks-button">
                <FontAwesomeIcon 
                    icon={faEdit}
                    className="list-tasks-icon-accion"
                    onClick={() => seteditTask(true)}
                />
                <FontAwesomeIcon 
                    icon={faTimes}
                    className="list-tasks-icon-accion"
                    onClick={() => deleteTask(task.id)}
                />
            </div>
        </li>
    )
}

export default Task
