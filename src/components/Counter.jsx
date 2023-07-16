import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/reducers/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch();

    function handleClick(callback){
        dispatch(callback)
    }

    return(
        <div>
            <p>Counter is: {count}</p>
            <div>
                <button onClick={() => handleClick(increment())}>increment</button>
                <button onClick={() => handleClick(decrement())}>decrement</button>
                <button onClick={() => handleClick(reset())}>reset</button>
            </div>
        </div>
    )
}

export default Counter;