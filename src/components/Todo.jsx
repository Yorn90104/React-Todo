import { MdDelete, MdEdit } from "react-icons/md";
import EditFrom from "./EditForm";

function Todo({ todo, deleteTodo, toggleComplete,  toggleisEditing, editTodo}) {
  return (
    todo.isEditing ? <EditFrom todo = {todo} editTodo = {editTodo}/>
    :<div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p onClick={() =>{toggleComplete(todo.id)}}>{todo.content}</p>
      <div>
        <MdEdit
          style={{
            cursor: "pointer",
          }}
          onClick={()=> {toggleisEditing(todo.id)}}
        />
        <MdDelete
          style={{
            cursor: "pointer",
          }}
          onClick={()=> {deleteTodo(todo.id)}}
        />
      </div>
    </div>
  );
}

export default Todo;
