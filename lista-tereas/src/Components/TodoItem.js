import { useDispatch } from "react-redux"

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
    return(
        <li
        style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
        onClick={() => dispatch({type: 'todo/completed', payload: todo})}>{todo.title}
        </li>
    )
}

export default TodoItem