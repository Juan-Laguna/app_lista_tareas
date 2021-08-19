import React from 'react';
import Task from './Task';


const ListTasks = ({tasks, settasks, viewTaskComplete}) => {

    const handleComplete = id => {
        console.log('Estamos editando la tarea con id', id);
        settasks(tasks.map( task => {
            if (task.id === id) {
                return {...task, complete: !task.complete}
            }
            return task;
        }))
    }

    const funcEditTask = (id, newText) => {
        settasks(tasks.map( task => {
              if (task.id === id) {
                  return {...task, text: newText}
              }
              return task;
          }))
      }

      const deleteTask = id => {
        settasks(tasks.filter( task => {
            if (task.id !== id) {
                return task
            }
            return null;
        }))
      }
    
    return (
       <ul className="list-tasks">
           { tasks.length > 0 ? 
                tasks.map((task) => {
                
                if(viewTaskComplete) {
                    return <Task 
                                key={task.id}
                                task={task} 
                                handleComplete={handleComplete}
                                funcEditTask={funcEditTask}
                                deleteTask={deleteTask}
                           />
                // Si la tarea no esta completada la devolvemos
                } else if(!task.complete) {
                    return <Task 
                                key={task.id}
                                task={task} 
                                handleComplete={handleComplete}
                                funcEditTask={funcEditTask}
                                deleteTask={deleteTask}
                           />  
                }
                // si ya esta completada no la devolvemos
                    return null; 
           }) :  <div className="list-tasks-message">No hay tareas agregadas</div>
        }
    
       </ul>
    )
}

export default ListTasks
