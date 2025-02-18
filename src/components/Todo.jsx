import { MdDelete, MdEdit } from "react-icons/md";

function Todo({ todo, deleteTodo, toggleComplete}) {
  return (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p onClick={() =>{toggleComplete(todo.id)}}>{todo.content}</p>
      <div>
        <MdEdit
          style={{
            cursor: "pointer",
          }}
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
