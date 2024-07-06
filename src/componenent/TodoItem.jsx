import { TodosContext } from '../App'
import './TodoItem.css'
import { useContext } from 'react'

const TodoItem = ({id, isDone, content, date})=>{

    const {onUpdate, onDelete} = useContext(TodosContext)
    const onUpdateCheckbox = () =>{
        onUpdate(id)
    }
    const onDeleteTodo = ()=>{
        onDelete(id)
    }
    return <div className='TodoItem todoItem_{}'>
        <input 
        onChange={ onUpdateCheckbox }
        checked={ isDone }

        type='checkbox'/>
        <div className='content'>{content}</div>
        <div className='date_time'>{new Date(date).toLocaleDateString()}</div>
        <button
         onClick={ onDeleteTodo }>
            삭제</button>
    </div>
}
export default TodoItem