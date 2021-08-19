import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import FormTaks from './components/FormTaks';
import ListTasks from './components/ListTasks';

const App = () => {

  // Obtenemos las tareas guardadas de local storage
  const saveTasks = localStorage.getItem('tasks') 
                  ? JSON.parse(localStorage.getItem('tasks')) 
                  : [];
   
  // Establecemos el estado de las tasks
  const [tasks, settasks] = useState(saveTasks);
  
  // Guardando el estado dentro de local storage
  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Accedemos a localStorage y comprobamos si viewTaskComplete es null
  let configViewTaskComplete = '';

  if (localStorage.getItem('viewTasksComplete') === null) {
    configViewTaskComplete = true;
  } else {
    configViewTaskComplete = localStorage.getItem('viewTaskComplete') === true;
  }

  // El estado de mostrar viewTaskComplete
  const [viewTaskComplete, setviewTaskComplete] = useState(configViewTaskComplete);

  useEffect(() => {
    localStorage.setItem('viewTasksComplete', viewTaskComplete.toString());
  }, [viewTaskComplete]);

  return (
    <div className="contenedor">
      <Header
          viewTaskComplete={viewTaskComplete}
          setviewTaskComplete={setviewTaskComplete}
      />
      <FormTaks 
          tasks={tasks}
          settasks={settasks}
      />
      <ListTasks 
          tasks={tasks} 
          settasks={settasks} 
          viewTaskComplete={viewTaskComplete}  
      />
    </div>
  )
}

export default App;
