import { useSelector, useDispatch } from "react-redux";
import Button from "./form/Button";
import { todosSelectors, todosActions } from "../../engine/core/slice";

export function Footer() {
   const length = useSelector(todosSelectors.length);
   const dispatch = useDispatch();
   const clearValue = () => {
      dispatch(todosActions.addItems([]));
      localStorage.setItem('items', JSON.stringify([]));
   }
   return (
      <footer>
         length: {length}
         <Button onClick={clearValue} text="Очистить" />
      </footer>
   )
}
