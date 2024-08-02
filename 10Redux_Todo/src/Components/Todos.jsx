import { useSelector } from "react-redux"
i
import UpdateTodo from "../Components/updateTodo";
// import AddTodo from "./AddTodo"

function Todos() {

   const todos =  useSelector(state => state.todos)
 
   //const [todomsg, setTodomsg] = useState(` ${todos.map((todo)=>todo.text)} `)

//    const editTodo = (todo.id, todo.text) =>{
//     updateTodo(todo.id, todo.text)
//     setIsTodoEditable(false)
// }


    
   
    return (
        <>
        <div>Todos</div>
        {todos.map((todo)=>(
            <li 
            className="w-full flex p-3 m-3 bg-slate-500 text-slate-50 "
            key={todo.id}>             
                <UpdateTodo todo={todo}/> 
            </li>
        ))}
        </>
    )
}

export default Todos
