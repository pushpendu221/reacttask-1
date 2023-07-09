import React from 'react';

const TaskItem = ({task, deleteTask, completeTask}) => {
    return (
        <li id={task.id} className="list-group-item d-flex"><p className="p-0 m-0 flex-grow-1">{task.name}<br/>{task.description}</p> 
            { task.isCompleted ? '' : <button className="btn btn-success" onClick={() => completeTask(task.id)}>Complete</button>
            }
            <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;