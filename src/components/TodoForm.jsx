import { useState } from "react";

export const TodoForm = ({onAddToDo}) => {
    const[inputValue, setInputValue] = useState({});

    const handleInputValue = (value) =>{
        setInputValue({id:value, content: value, checked: false});     
    } 

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddToDo(inputValue);
        setInputValue({id:"", content:"", checked:false});
    }

    
    return(<section className='form'>
                <form onSubmit={(event)=>handleFormSubmit(event)}>
                    <div>
                        <input type="text"
                         className='todo-input'
                         value={inputValue.content} 
                         autoComplete='off' 
                         onChange={(event)=>handleInputValue(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className='todo-btn' onClick={(event)=>handleFormSubmit(event)}>Add Task</button>
                    </div>
                </form>
            </section>);
}