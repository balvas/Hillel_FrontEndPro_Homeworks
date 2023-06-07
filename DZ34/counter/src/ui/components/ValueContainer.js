import { useSelector } from "react-redux";
import { value } from '../../engine/core/counter/counterSlice';

function ValueContainer() {
   const countValue = useSelector(value);
   return (
      <div>
         value: {countValue}
      </div>
   );
}

export default ValueContainer;