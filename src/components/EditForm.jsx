import { useState } from "react";

function EditFrom({todo, editTodo}) {
    const [content, setContent] = useState(todo.content)
    return (
        <>
            <form className="create-form" onSubmit={(e) => {editTodo(todo.id, content); setContent(""); e.preventDefault();}}>
                <input type="text" placeholder="輸入待辦事項" 
                value={content} 
                onChange={(e)=> setContent(e.target.value)}/>
                <button type="submit">完成</button>
            </form>
        </>
    );
}

export default EditFrom;