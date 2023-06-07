import React from "react";
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodoItemList = () => {
    const todosArray = useSelector((state) => {
        return state.todos;
    });

    return (
        <ul className="todos-list">
            {todosArray.map((todo) => (
                <li><TodoItem key={todo.id} id={todo.id} title={todo.taskText} completed={todo.status} /></li>

            ))}
        </ul>
    );
};

export default TodoItemList;
