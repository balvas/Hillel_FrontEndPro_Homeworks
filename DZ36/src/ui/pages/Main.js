// Core
import { Provider } from 'react-redux';
// Parts
import Todo from "../containers/Todo";
// Engine
import {store} from "../../engine/init/store";
// Helpers
import '../../main.css';

function Main() {
    return (
        <Provider store={store}>
            <Todo />
        </Provider>
    );
}

export default Main;
