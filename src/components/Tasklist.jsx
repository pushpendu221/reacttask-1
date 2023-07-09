import React from 'react';
import TaskItem from './TaskItem';

const Tasklist = ({ tasks, deleteTask, completeTask }) => {
    return (
        <div>
           <ul className="list-group">
                {tasks.sort((a,b) => b.id - a.id).map((task) =>(
                     <TaskItem
                     key={task.id}
                     task={task}
                     deleteTask={deleteTask}
                     completeTask= {completeTask}
                   />
                ))
            }
          </ul>
        </div>
    );
};

export default Tasklist;