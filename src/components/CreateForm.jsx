import { useState } from "react";

function CreateFrom({addTodo}) {

    const [content, setContent] = useState()

    
    return (
        <>
            <form className="create-form" onSubmit={(e) => {addTodo(content); setContent(""); e.preventDefault();}}>
                <input type="text" placeholder="輸入待辦事項" 
                value={content} 
                onChange={(e)=> setContent(e.target.value)}/>
                <button type="submit">加入</button>
            </form>
        </>
    );
}
export default CreateFrom;