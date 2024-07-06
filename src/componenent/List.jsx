import './List.css'
import { useContext, useState } from 'react'
import TodoItem from './TodoItem'
import { TodosContext } from '../App'
const List = ()=>{
    const { todos } = useContext(TodosContext)
    
    const [search, setSearch] = useState("")
    const getFilteredTodos = ()=>{
        if(search === "")
            return todos;
        return todos.filter((item) => item.content.includes(search.toLowerCase()))
    }
    const onChange = (e)=>{
        setSearch(e.target.value.toLowerCase())
    }
    return <div className="List">
        <h3>To do List 🌱</h3>
        <input 
        value={search}
        onChange={ onChange }
        className='list_search_bar' 
        placeholder='할 일을 검색하세요'/>
        <div className="todos_wrapper">
            {getFilteredTodos().map( (item) =>  <TodoItem key={item.id} {...item}/> )}
        </div>
    </div>
}
export default List