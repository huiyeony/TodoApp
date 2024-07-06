import Header from './componenent/Header'
import Editor from './componenent/Editor'
import List from './componenent/List'
import { createContext, useRef, useEffect ,useReducer } from 'react'
import './App.css'



export const TodosContext = createContext()
function reducer(state, action){
    switch(action.type){
      case "INIT":
        return action.data
      case "CREATE":
      case "UPDATE":
      case "DELETE":{
        const data = JSON.stringify(action.data)
        localStorage.setItem("todos", data)
        return action.data;
      }
        
      default:
        return state;
    }
}
function App() {
 
  
  const [todos, setTodos] = useReducer(reducer, [])
  const idRef = useRef(0)

  useEffect(()=>{
    //로컬스토리에서 JSON데이터 꺼내올 수 있으면 꺼내오기
    const storedData = localStorage.getItem("todos");//빈 문자열
    if(storedData === "")
      return;
    const parsedData = JSON.parse(storedData) 
    if(!Array.isArray(parsedData))//배열 형태 아님
      return;

    let maxId = 0
    parsedData.forEach(item => {
      if(item.id > maxId)
        maxId = item.id
    });
    idRef.current = maxId +1 //아이템 아이디 설정
    setTodos(
      {
      type:"INIT",
      data : parsedData
    })
  }
    ,[])
  
  const onCreate = (content)=>{
      const newTodo = {
        id: idRef.current++,
        isDone: false,
        content : content,
        date: new Date().getTime()

      }
      setTodos({
        type:"CREATE",
        data : [newTodo, ...todos]
      })
  }
  const onUpdate = (id) => {
    //check box 업데이트
    const newTodos = todos.map( (item) => 
      { return item.id === id? {...item, isDone: !item.isDone} : item } )
    setTodos({
      type:"UPDATE",
      data: newTodos
    })
  }

  const onDelete = (id) =>{
    const newTodos = todos.filter(item => item.id !== id)
    setTodos({
      type:"DELETE",
      data: newTodos
    })
  }

  return (

    <TodosContext.Provider value = 
    { {todos , onCreate, onUpdate, onDelete} }>

      
      <Header/>
      <Editor />
      <List />
    </TodosContext.Provider>
  )
}

export default App
