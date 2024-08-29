import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setVal } from "../../redux/state/CounterSlice";

const Counter = () => {

    const myNumb = useRef();

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => dispatch(increment())}>Increase</button>
                <button onClick={() => dispatch(decrement())}>Decrease</button>
            </div>
            <div>
                <input type="number" ref={myNumb}/>
                <button onClick={() => dispatch(setVal(parseInt(myNumb.current.value)))}>Set</button>
            </div>
        </>

    )
}

export default Counter;