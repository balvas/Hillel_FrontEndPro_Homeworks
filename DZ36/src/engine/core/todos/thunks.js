import { todosActions } from "./slice";

export const handleAddTodo = (value) => {
    return (dispatch, getState) => {
        const items = getState().todos.items;
        // event.preventDefault();
        // const input = event.target.getElementsByClassName('form__input')[0];
        const text = value;
        const newItems = [
            ...items,
            { id: Math.random(), text }
        ];
        // dispatchAndLog(todosActions.addItems(newItems), dispatch); // MonkeyPatching :(
        const cancelFunction = dispatch(todosActions.addItems(newItems, { delayMS: 500 }));
        // setCancelSend(() => cancelFunction);
        localStorage.setItem('items', JSON.stringify(newItems));
        value = ''
    }
}
export const handleRemoveTodo = (id) => {
    return (dispatch, getState) => {
        const items = getState().todos.items;
        const newItems = items.filter(item => item.id !== id)
        const cancelFunction = dispatch(todosActions.removeItem(newItems, { delayMS: 500 }));
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
        const cancelFunction = dispatch(todosActions.removeItem(updatedItems, { delayMS: 500 }));
    }
}
