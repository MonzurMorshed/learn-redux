import Swal from "sweetalert2";
import { EditTodo } from "../../redux/state/todo/TodoSlice";
import store from "../../redux/store/store";

export default function TodoEditAlert(i,item) {
    Swal.fire({
        title: "Update Task",
        input: "text",
        inputValue: item,
        inputValidator:(value) =>{
            if(value) {
                console.log('i : ',i);
                store.dispatch(EditTodo({
                    index: i,
                    task: value
                }))
            }
        },
    })
}