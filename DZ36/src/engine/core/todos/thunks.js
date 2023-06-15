import { todosActions } from "./slice";

export const handleAddTodo = (value) => {
    return (dispatch, getState) => {
        const items = getState().todos.items;
        const text = value;
        const newItems = [
            ...items,
            { id: Math.random(), text }
        ];
        dispatch(todosActions.addItems(newItems, { delayMS: 500 }));
        localStorage.setItem('items', JSON.stringify(newItems));
        value = ''
    }
}
export const handleRemoveTodo = (id) => {
    return (dispatch, getState) => {
        const items = getState().todos.items;
        const newItems = items.filter(item => item.id !== id)
        dispatch(todosActions.removeItem(newItems, { delayMS: 500 }));
        localStorage.setItem('items', JSON.stringify(newItems));
    }
}
export const handleEditTodo = (id, itemText) => {
    return (dispatch, getState) => {
        const items = getState().todos.items;
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, text: itemText };
            }
            return item;
        });
        localStorage.setItem('items', JSON.stringify(updatedItems));
        dispatch(todosActions.removeItem(updatedItems, { delayMS: 500 }));
    }
}
