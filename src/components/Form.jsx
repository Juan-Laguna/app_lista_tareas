import React  from 'react'

const Form = ({newTask, setnewTask, seteditTask, funcEditTask, task}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        funcEditTask(task.id, newTask);
        seteditTask(false);
    }

    const handleChange = e => {
        setnewTask(e.target.value);
    }

    return (
        <form 
            className="form-edit-task"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                className="form-edit-task-input"
                value={newTask}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="form-edit-task-btn"
            >
                Actualizar
            </button>
        </form>
       
    )
}

export default Form
