import { useState } from "react";
import CreateFrom from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
    const [todos, setTodos] = useState([       
            {content:"打掃廁所", id : Math.random(), isCompleted: false, isEditing: false},
            {content:"寫作業", id : Math.random(), isCompleted: false, isEditing: false}, 
        ]
    );

    const addTodo = (content) => {
        setTodos([...todos, {content: content, id: Math.random(), isCompleted: false, isEditing: false}]);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {return todo.id !== id}));
    };
    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo;
        }));
    };
    const toggleisEditing = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo;
        }));
    };

    const editTodo = (id, content) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? {...todo, content: content, isEditing: false} : todo;
        }));
    };

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateFrom addTodo = {addTodo}/>
            {
                todos.map((todo) => {
                    return <Todo 
                    todo = {todo}
                    key={todo.id}
                    deleteTodo = {deleteTodo}
                    toggleComplete = {toggleComplete}
                    toggleisEditing = {toggleisEditing}
                    editTodo = {editTodo}
                    />
                })
            }
        </div>
    );
}

export default TodoWrapper;
