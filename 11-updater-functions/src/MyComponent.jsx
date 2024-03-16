// updater function => A function passed as an argument to setState() usually
// ex. setYear(arrow function)
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// good practice to use updater functions

import {useState} from "react";

export function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, React will call them in the same order
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent;