import '../../main.css';
import Input from "../components/form/Input";
import Button from "../components/form/Button";
// import { handleAddTodo } from "../../engine/core/thunks";
import { useDispatch } from "react-redux";
import { store } from "../../engine/init/store";
import { todosAsyncAction } from "../../engine/saga/asyncAction";

function TodoForm() {
   const dispatch = useDispatch();
   const handleAdd = (event) => {
      event.preventDefault();
      dispatch(todosAsyncAction.addTodoAsync({ event }));
   }



   // const handleAdd = (event) => { dispatch(handleAddTodo(event)) }

   return (
      <form
         className="form"
         onSubmit={handleAdd}
      >
         <Input />
         <Button text="Отправить" />
      </form>
   );
}

export default TodoForm;
