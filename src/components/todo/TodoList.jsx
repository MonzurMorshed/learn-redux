import { useDispatch, useSelector } from "react-redux";
import { EditTodo, RemoveTodo } from "../../redux/state/todo/TodoSlice";
import TodoDeleteAlert from "./TodoDeleteAlert";
import TodoEditAlert from "./TodoEditAlert";

const TodoList = () => {

    const dispatch = useDispatch();
    const todoItems = useSelector((state) => state.todo.value);

    return (
        <div>
            <h1>Task List</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoItems?.map((item,index) => {
                                return (
                                    <tr key={index+1}>
                                        <td>{index}</td>
                                        <td>{item}</td>
                                        <td>
                                            <button onClick={() => TodoEditAlert(index,item)}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => TodoDeleteAlert(index)}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList;