import React, { useState } from 'react';
import { PI, numb } from "../Day2/MathEx";
import PrintComponent from './PrintComponent';


const CounterExample = () => {

    const [count, setCount] = useState(0);

    // function showCount(){
    //     console.log("You Clicked Me")
    //     setCount(count + 1);
    // }

    const showCount = () => setCount(count + 1);

    let title = "Counter Example";

    return (
        <div>
            {/* You Clicked {count} Times. */}
            <button onClick={showCount}>Click Me!</button>
            <PrintComponent passCount={ count } title={title} />
            <br />
            { PI }
            <br />
            { numb }
        </div>
    )
};

export default CounterExample
