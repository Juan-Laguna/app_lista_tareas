import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({viewTaskComplete, setviewTaskComplete}) => {
    
    const taskCompletes = () => {
        setviewTaskComplete(!viewTaskComplete)
    }
    
    return (
        
        <header className="header">
            <h1 className="title">Lista de tareas</h1>
            {viewTaskComplete 
            
                ? 
                     <button 
                        className="button"
                        onClick={() => taskCompletes()}
                    >
                            Ocultar las  tareas completadas
                            <FontAwesomeIcon icon={faEyeSlash} className="icon-button"/>
                    </button>
                :
                    <button 
                        className="button"
                        onClick={() => taskCompletes()}
                    >
                         Mostrar las tareas completadas
                        <FontAwesomeIcon icon={faEye} className="icon-button"/>
                     </button>
            }
           
        </header>
    )
}

export default Header;
