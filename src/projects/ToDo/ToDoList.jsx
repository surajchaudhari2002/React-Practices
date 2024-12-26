import { FaCheck } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import "./ToDo.css"

export const ToDoList = ({data,onDeleteTask,onCheckTask,checked}) => {
    
    return (
        <>
            <li >
                <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                <button onClick={()=>onCheckTask(data)} className="check-btn"><FaCheck/></button>
                <button onClick={() => onDeleteTask(data)} className="delete-btn">  <MdDeleteForever /></button>
            </li>
        </>
    )
}