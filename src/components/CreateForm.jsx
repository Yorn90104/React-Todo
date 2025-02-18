import { useState } from "react";

function CreateFrom() {

    const [content, setContent] = useState()
    
    return (
        <>
            <form className="create-form">
                <input type="text" placeholder="輸入待辦事項" 
                value={content} 
                onChange={(e)=> setContent(e.target.value)}/>
                <button type="submit">加入</button>
            </form>
        </>
    );
}
export default CreateFrom;