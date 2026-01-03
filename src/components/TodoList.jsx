import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({content, checked, onDeleteButton, onCheckedButton}) =>{

    return (
            <li className='todo-item'>
                <span className={checked ? 'checkList' : 'notCheckList' }>{content}</span>
                <button className='check-btn' onClick={()=>onCheckedButton(content)}><MdCheck/></button>
                <button className='delete-btn' onClick={()=>onDeleteButton(content)}><MdDeleteForever/></button>
            </li>);
}