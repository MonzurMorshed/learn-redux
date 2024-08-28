import CreateTodo from "../components/todo/createTodo";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
    return (
        <>
            <h1>Todo Page</h1>
            <CreateTodo/>
            <TodoList/>
        </>
    )
}

export default TodoPage;