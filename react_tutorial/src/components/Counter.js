import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const [item, setItem] = useState([]);

    const increment = () => {
        setCounter(counter + 1);
    };

    const addItem = () => {
        const newItem = `element ${item.length + 1}`;
        setItem([...item, newItem])
        //item.push(newItem);
    };

    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick={increment}>Add</button>

            <h2>Ma Liste</h2>
            <ul>
                {item.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add item</button>
        </div>
    );
}
