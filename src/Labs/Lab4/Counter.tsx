import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure to import Bootstrap CSS

export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button
                className="btn btn-success rounded-pill"
                onClick={() => setCount(count + 1)}
                id="wd-counter-up-click">
                Up
            </button>
            <button
                className="btn btn-danger rounded-pill mx-2"
                onClick={() => setCount(count - 1)}
                id="wd-counter-down-click">
                Down
            </button>
            <hr/>
        </div>
    );
}
