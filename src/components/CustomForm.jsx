import { useState } from "react";

 const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  const handleFormSubmit = (e) => {
      e.preventDefault();
      addTask({
        name:task,
        description:desc,
        isCompleted:false,
        id:Date.now(),
      });
      setTask("");
      setDesc("");
  }

  return (
    <form 
    onSubmit={handleFormSubmit}>
  <div className="row">
    <div className="col">
      <input type="text" 
      className="form-control" 
      placeholder="name"
      value={task}
      onInput={(e)=>{setTask(e.target.value)}}
      />
    </div>
    <div className="col">
      <input type="text" 
      className="form-control" 
      placeholder="description"
      value={desc}
      onInput={(e)=>{setDesc(e.target.value)}}
      />
    </div>
    <div className="col">
    <button type="submit" 
    className="btn btn-primary">
    Add todo
    </button>
  </div>
  </div>
  
</form>
  );
}

export default CustomForm
