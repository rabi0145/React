import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    //no dependency array runs on every render
    useEffect(
        () => {
            console.log("useEffect called on every render");
        },
    )

    //empty dependency array runs only on initial render
    useEffect(
        ()=> {
            console.log("useEffect called on initial reinder");
        },
        []
    )

    //with dependency array - runs only when count changes
    useEffect(
        ()=> {
            console.log("useEffect called with dependency array");
        },
        [count]
    )

    // useEffect(
    //     ()=> {
    //         const preTask = () => {
    //             for(let i = 0; i<10; i++){
    //                 console.log("Pretask running");
    //             }
    //             console.log("Pretask completed");
    //         }
    //         preTask();
    //     }
    // )

    useEffect(
        ()=> {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json)
            .then(json => console.log(json))
        }
    )

    const calculate = ()=> {
        let sum = 50;
        sum += 50;
        return sum;
    }

    useEffect(
        ()=> {
            let res = calculate();
            console.log("Calculated result: ", res);
        },
        [count]
    )
    return(
        <div>
            <h3>Use Effect Hook Example.</h3>
            <p>Count: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default UseEffectHook;