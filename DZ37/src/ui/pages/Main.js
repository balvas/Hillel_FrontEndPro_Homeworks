
import { Provider } from 'react-redux';
import Todo from "../containers/Todo";
import { store } from "../../engine/init/store";
import '../../main.css';

function Main() {
   return (
      <Provider store={store}>
         <Todo />
      </Provider>
   );
}
export default Main;
