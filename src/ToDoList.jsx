import React,{useState} from "react"

function ToDoList(){
    const [tasks,setTask] = useState(["Eat Breakfast","Take a Shower"]);
    const [newTask,setNewTask] = useState('');
    const [count, setCount] = useState(1);
    const [disabled , setDisabled] = useState();
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        
       if(count < 2){
            if(newTask.trim() !== ""){
                setTask(t => [...t, newTask]);
            setNewTask("");
            setCount(c => c + 1);
            
        }
       }
       if(count >= 1){
            setDisabled(true);
       }     
    }
  
    function deleteTask(index){
       
        setDisabled(false);
        setCount(c => c - 1);
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTask(updatedTask);
        
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(
        
        <div className="to-do-list text-center">
            <h2 className="font-bold text-gray-800 m-2">To-Do-List</h2>
            <div className="mt-8 mb-8">
                <input className="w-36 h-8 bg-gray-400 placeholder-white" type="text" placeholder=" Enter a task..."value={newTask}onChange={handleInputChange} />
                <button disabled = {disabled}
                className="add-button w-14 h-8 bg-gray-400 ms-4 text-white"
                onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task,index) =>
                <li key={index}>
                    <span className="text w-28 inline-block">{task}</span>
                    <button className="delete-button bg-gray-400 mb-2 ms-1 p-1"
                        onClick={ () => deleteTask(index)}>
                        Delete
                    </button>
                    <button className="move-button bg-gray-400 h-8 ms-2"
                        onClick={ () => moveTaskUp(index)}>
                        👆
                    </button>
                    <button className="move-button bg-gray-400 h-8 ms-2"
                        onClick={ () => moveTaskDown(index)}>
                        👇
                    </button>
                </li>
                )}
            </ol>

        </div>
    );
}
export default ToDoList