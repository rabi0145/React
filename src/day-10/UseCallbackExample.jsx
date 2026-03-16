// import { useCallback, useState } from "react"

// const CustomButton =({onClick, title})=>{
//     console.log("Custom button", title, "rendered");
    
//     return(
//         <button onClick={onClick}>{title}</button>
//     )
// }
// const UsecallbackEaxmple = ()=>{
//     const [count, setCount]= useState (0)
//     console.log("Use call back component rendered")
//     const handleIncrement("use call abck component rendered")
//     const handleIncrement = useCallback(
//         ()=>{
//             setCount(count+1)
//         },
//         [count]
//     )
//     const [count1, setCount1] = useState(0)
//     const handleDecrement = useCallback(
//         ()=>{
//             setCount1(count1 -1)
//         },
//         [count1]
//     )
    
//     return(
//         <div>
//             <h4>Use Callback hook Example:{useCallback}</h4>
//             <h5>Count: {count}</h5>
//             {/* <button onClick={()=>setCount(count+1)}>Original Inc</button> */}
//             <CustomButton onClick={handleIncrement} title={"Increment"}/>
//             <CustomButton onClick={handleDecrement} title={"Decrement"}/>
//         </div>
//     )
// }
// export default UsecallbackEaxmple


import { memo, useCallback, useState } from "react";

const CustomButton = memo(({ onClick, title }) => {
    console.log("Custom button ",title, "rendered")
    return (
        <div>
            <button onclick={onClick}>{title}</button>
        </div>
    );
});

const UseCallbackExample = () => {
    const [count, setCount] = useState(0);
    console.log("Use call back commponenet rendered");
    const handleIncrement = useCallback(
        ()=> {
            setCount(count + 1);
        },
        [count]
    )
    const [count1, setCount1] =  useState(0);
    const handleDecrement = useCallback(
        ()=> {
            setCount1(count1-1)
        },
        [count1]
    )
    return (

        <div>
            <h4>Use Callback hook Example: {useCallback}</h4>
            <h5>Count: {count}</h5>
            <CustomButton onclick={handleIncrement}  title={"Increment"} />
            <CustomButton onclick={handleDecrement} title={"Decrement"} />
        </div>
    )
}

export default UseCallbackExample;
