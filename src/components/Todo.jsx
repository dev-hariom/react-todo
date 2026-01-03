import { useState } from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';

const reactTodoKey = "reactTodo";

export const Todo = () => {
    const[task, setTask] = useState(()=>{
        const rawTodo = localStorage.getItem(reactTodoKey);
        if(rawTodo === undefined || rawTodo == "undefined"){
            return [];
        }else{
            return JSON.parse(rawTodo);
        }
    });

    const handleDeleteButton = (value)=>{
        const updatedTask = task.filter((currTask)=> currTask.content != value );
        setTask(updatedTask);
    }

    const handleClearButton = () => {
        setTask([]);
    }
    
    const handleToDoAdd = (inputValue) =>{
        const {id, content, checked} = inputValue;
        if(!content) return;
        
        if(task.find((currEle) => currEle.content === content)) return;
        
        setTask((prevTask)=>[...prevTask, {id, content, checked}]);
    }

    const handleCheckedButton = (value) => {
        const updatedTask = task.map((currTask)=>{
            if(currTask.content === value){
                return {...currTask, checked: !currTask.checked};
            }else{
                return currTask;
            }
        });
        setTask(updatedTask);
    }

    localStorage.setItem(reactTodoKey, JSON.stringify(task));
    
    return (
    <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
            <TodoDate />
        </header>
        <TodoForm onAddToDo={handleToDoAdd} />
        <section className='myUnOrdList'>
            <ul>
            {
                task.map((currTask)=> <TodoList
                key={currTask.id}
                content={currTask.content}
                checked={currTask.checked}
                onDeleteButton={handleDeleteButton} 
                onCheckedButton={handleCheckedButton} />
              )
            }
            </ul>
        </section>
        <section>
            <button className='clear-btn' onClick={handleClearButton}>Clear All</button>
        </section>
    </section>
    );
};