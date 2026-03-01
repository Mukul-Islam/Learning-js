import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick () {
        const newCount = count +1;
        // count = ;
        setCount(newCount);
    }
    
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleClick}>Add me</button>
        </div>
    )
}