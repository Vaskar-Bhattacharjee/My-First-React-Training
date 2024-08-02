import { useState } from "react";
import { updateTodo, removeTodo } from "../features/todo/todoSlice";
import { useDispatch} from "react-redux";



function UpdateTodo({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    //const todos =  useSelector(state => state.todos)
    const text = todo.text
    const dispatch = useDispatch();
    return (
        <>  
        <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value= {text}   
        onChange={(e) => text(e.target.value)}

    />
         <button
      
        onClick={() => {                   
            setIsTodoEditable((prev)=> !prev)
          if (isTodoEditable) {
            dispatch(updateTodo(todo))
                         
            setIsTodoEditable(false)
            } 
        }}
        >
        {isTodoEditable ? "📁" : "✏️"}
        </button>

        <button 
        onClick= {() => dispatch(removeTodo(todo.id))}
        >❌</button> </>
        
    )
}

export default UpdateTodo
