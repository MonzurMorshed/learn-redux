import { useDispatch } from "react-redux";

const TodoList = () => {

    const dispatch = useDispatch();

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
                        <tr>
                            <td>No</td>
                            <td>Task Name</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                            <button>Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList;