import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import TodoForm from "./TodoForm";
import { todosActions, todosSelectors } from "../../engine/core/slice";
import { todosAsyncAction } from "../../engine/saga/asyncAction";
import { useEffect } from "react";
import { Footer } from "../components/Footer";

export default function Todo() {
   const items = useSelector(todosSelectors.items);
   const dispatch = useDispatch();

   useEffect(
      () => {
         dispatch(todosAsyncAction.getTodosAsync('test'));
      },
      []
   )

   return (
      <div className="container">
         <Header />
         <TodoForm />

         <div>
            {items.map(item => (
               <TodoItem
                  key={item.id}
                  text={item.text}
                  id={item.id}
               />
            ))}
         </div>
         <Footer />
      </div>
   )
}
