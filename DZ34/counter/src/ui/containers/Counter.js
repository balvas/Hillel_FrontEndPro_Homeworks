import { useDispatch, useSelector } from 'react-redux';
import ValueContainer from '../components/ValueContainer';
import { increment, decrement, value } from '../../engine/core/counter/counterSlice';

function Counter() {
   const dispatch = useDispatch();
   const countValue = useSelector(value);

   const onIncerement = () => {
      dispatch(increment())
   }
   const onDecrement = () => {
      dispatch(decrement())
   }

   return (
      <div>
         <ValueContainer value={countValue} />
         <button onClick={onIncerement}>Increment</button>
         <button onClick={onDecrement}>Decrement</button>
      </div>
   )
}

export default Counter;
