import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/state/todo/TodoSlice";
import { useRef } from "react";

const CreateTodo = () => {

    const dispatch = useDispatch();
    const task = useRef();

    return (
        <div>
            <div>
                <input type="text" ref={task} />
            </div>
            <div>
                <button onClick={() => dispatch(AddTodo(task.current.value))}>Create</button>
            </div>
        </div>
    )
}

export default CreateTodo;