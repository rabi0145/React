// import { useMemo, useState } from "react";

// const expensiveCalculation = (num)=>{
//     console.log("expensive calculation called ");
    
//     for(let i=0; i<100000; i++){
//         num+=1;
//     }
//     return num
// }

// const UseMemoEaxmple = () => {
//   const [count, setCount] = useState(0);
//   const [toggle, setToggle]= useState(false)
//   let result = useMemo(
//     ()=>{
//         return expensiveCalculation(count)
//     },
//     [count]
//   )
//   return (
//     <div>
//       <h3>use Memo Hook Example</h3>
//       <b>Count:{count}</b>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <b>Toggle:{toggle.toString()}</b>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//     </div>
//   );
// };
// export default UseMemoEaxmple;



import { useMemo, useState } from "react";

const expensiveCalculation = (num) => {
    console.log("Expensive calculation called")
    for (let i = 0; i < 100000000; i++) {
        num += 1;
    }
    return num
}

const UseMemoExample = () => {
    console.log("Use memo example render")
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    let result = useMemo(
        ()=>{
            return expensiveCalculation(count);
        },
        [count]
    )


    return (
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px', width: '400px' }}>
            <h3>Use Memo Hook Example {useMemo}</h3>
            <i>Expensive calculculation result: {result}</i>
            <b>Count: {count}</b>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <b>Toggle: {toggle.toString()}</b>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )
}

export default UseMemoExample;