import { useState } from "react";

export const ToDoForm=({onAddToDo})=>{

    const [inputValue, setInputValue] = useState({});
    const handleInputChange = (value) => {
        setInputValue({id:value,content:value,checked:false})
    }

    const handleFormSubmit=(event)=>{
    event.preventDefault();
    onAddToDo(inputValue);
    setInputValue({id:"",content:"",checked:false})
    }
    
    return(<>
     <section >
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            autoComplete="off"
                            value={inputValue.content}
                            onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>

                    <div>
                        <button type="submit" >Add Task</button>
                    </div>
                </form>
                </section>

    </>)

}