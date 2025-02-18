import { MdDelete, MdEdit } from "react-icons/md";

function Todo({ todo, deleteTodo }) {
  return (
    <div className="todo">
      <p>{todo.content}</p>
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
