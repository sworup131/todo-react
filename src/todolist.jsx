import React, { useState } from 'react'
import { Form, Container, Button, Alert, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import { FaPlus, FaTrash } from "react-icons/fa"

const Todolist = () => {
    const [todoList, setTodolist] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        setTodolist([...todoList, { data: text, date: new Date().toLocaleString().split(",")[0], isCompleted: false }])
        setText("")
    }
    const toggleTodoCompletion = (idx) => {
        const newTodo = todoList.map((todo, index) => {
            if (index === idx) return { ...todo, isCompleted: !todo.isCompleted };
            else return todo;
        });
        setTodolist(newTodo);
    }
    const deleteTodo = (idx) => {
        const newTodo = todoList.filter((todo, index) => {
            if (index === idx) return false;
            else return true
        })
        setTodolist(newTodo);

    }

    return (
        <Container className="mt-3 text-center">
            <h3>Todolist App</h3>
            <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={addTodo}><FaPlus /><label className='ms-2'>Add</label></Button>
            {todoList.length > 0 ? todoList.map((todo, index) => {
                return (
                    <Row>
                        <Col xs={10} className="mt-4">
                            <Alert variant={todo.isCompleted ? "danger" : "primary"} className="mt-2" onClick={() => { toggleTodoCompletion(index) }} style={{ textDecoration: todo.isCompleted ? "line-through" : "none", cursor: "pointer" }}>
                                {todo.data}<br></br><small>{todo.date}</small>
                            </Alert>
                        </Col>
                        <Col xs={2} className="mt-0">
                            <FaTrash size="40" color='red' onClick={() => { deleteTodo(index) }}></FaTrash>
                        </Col>
                    </Row>)
            }) : "no todo"}
        </Container>
    )
}

export default Todolist;