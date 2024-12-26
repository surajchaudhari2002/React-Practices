import { useState, useEffect } from "react"
import "./ToDo.css"
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { ToDoList } from "./ToDoList";
import { ToDoDate } from "./ToDoDate";
import { ToDoForm } from "./ToDoForm";
import { getLocalStorageTodoData,setLocalStorageTodoData} from "./ToDoLocalStorage";


export const ToDo = () => {
    const [task, setTask] = useState(()=> getLocalStorageTodoData());


    const handleFormSubmit = (inputValue) => {
        const{id,content,checked}=inputValue
        if (!content) return;
        
        const iftodoContentMatched=task.find((currTask)=>currTask.content===content)
        if(iftodoContentMatched)return;

        setTask((previous) => [...previous, {id,content,checked}])  //can also write only input value

    }
  
    setLocalStorageTodoData(task);



    const handleDeleteTask = (value) => {
        const updatedTask = task.filter((curtask) => curtask.content !== value)
        setTask(updatedTask)

    }
    const handleClearAll = () => {
        setTask([])
    }

    const handleOnCheckTask=(content)=>{
      const updatedTask=task.map((currTask)=>{
        if(currTask.content===content){
            return {...currTask,checked:!currTask.checked}
        }else{
            return currTask
        }
    
   
    })
    return setTask(updatedTask)

}
    return (
        <>
            <section >
                <header><h1 style={{ color: "black" }}>ToDo List</h1></header>
                <ToDoDate />
            </section>

            <ToDoForm onAddToDo={handleFormSubmit} />

            <section>
                <ul>
                    {task.map((curtask) => {
                        return <ToDoList key={curtask.id}
                            data={curtask.content}
                            checked={curtask.checked}
                            onDeleteTask={ handleDeleteTask}
                            onCheckTask ={handleOnCheckTask}/>
                    })}
                </ul>
            </section>
            <section>
                <button onClick={handleClearAll} className="clear-btn">Clear All</button>
            </section>

        </>
    )
}