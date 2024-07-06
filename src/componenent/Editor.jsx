import './Editor.css'
import { useState ,useRef, useContext } from 'react'
import { TodosContext } from '../App'

const Editor = ()=>{

    const { onCreate } = useContext(TodosContext)
    const newTodoRef = useRef()
    const onSubmit = ()=>{
        //빈 문자열 일때는 포커싱 
        if(content ===""){
            newTodoRef.current.focus()
            return;
        }
        onCreate(content)
        setContent("")

    }
    const onKeyDown = (e)=>{
        if(e.keyCode == 13){
            onSubmit()
        }
            
        

    }
    const [content, setContent] = useState("")
    return <div className="Editor">
        <input 
        ref={ newTodoRef }
        value={ content }
        onChange={(e)=>{
            setContent(e.target.value)
        }}
        onKeyDown={ onKeyDown }
        placeholder="새로운 To do "/>
        <button onClick={ onSubmit }>
        등록</button>
    </div>
}

export default Editor