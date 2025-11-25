import React,{useState} from 'react'
import {Form,Container,Button,Alert } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {FaPlus} from "react-icons/fa"

const Todolist = () => {
    const [todoList,setTodolist] = useState([]);
    const [text,setText] = useState("");
    
    const addTodo=()=>{
        setTodolist([...todoList,{data:text,date:new Date().toLocaleString().split(",")[0],isCompleted:false}])
        setText("")
    }
    const toggleTodoCompletion= (idx)=>{
        const newTodo = todoList.map((todo,index)=>{
            if(index==idx) return {...todo,isCompleted:!todo.isCompleted};
            else return todo
        })
        setTodolist(newTodo);
    }

    return (
    <Container className ="mt-3 text-center">
        <h3>Todolist App</h3>
        <Form.Control type="text" value={text} onChange={(e)=>setText(e.target.value)}/> 
        <Button onClick={addTodo}><FaPlus/><label className='ms-2'>Add</label></Button>
        {todoList.length>0?todoList.map((todo)=>{
            return   <Alert className="mt-2" onClick={()=>toggleTodoCompletion(index)} style={{textDecoration : todo.isCompleted ? "line-through":"none"}}> {todo.data}<br></br><small>{todo.date}</small></Alert>
        }):"no todo"}
    </Container>
  )
}

export default Todolist;