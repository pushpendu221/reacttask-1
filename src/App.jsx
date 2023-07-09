import React,{ useState } from 'react';
import CustomForm from './components/CustomForm';
import Tasklist from './components/Tasklist';
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task]);
  }
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const completeTask = (id) => {
    setTasks(prevState => prevState.map(t => 
      (t.id == id 
        ? {...t, isCompleted: true}
        : t
        )));
  }
  

  return (
    <>
      <CustomForm addTask = {addTask}/>
      {tasks && (
        <Tasklist
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask = {completeTask}
        />
      )}
    </>
  )
}

export default App
