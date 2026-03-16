// import { useReducer, useState } from "react";

// const CounterReducer = (state, action) => {
//   if (action == "dec") {
//     return state - 1;
//   } else if (action == "inc") {
//     return state + 1;
//   } else if (action == "rst") {
//     return 0;
//   } else {
//     return state;
//   }
// };

// const AdvanceCounter = () => {
//   const [count, dispatch] = useReducer(CounterReducer, 0);

//   const handleIncrement = () => {
//     dispatch("inc");
//   };
//   const handleDecrement = () => {
//     dispatch("dec");
//   };
//   const handleReset = () => {
//     dispatch("rst");
//   };
//   return (
//     <div>
//       <h3>Advance Counter</h3>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default AdvanceCounter;

import { useReducer, useState } from "react";

const CounterReducer = (state, action) => {
  if (action.type == "dec") {
    return {
      count: state.count - 1,
      name: state.name,
    };
  } else if (action.type == "inc") {
    return {
      count: state.count + 1,
      name: state.name,
    };
  } else if (action.type == "rst") {
    return {
      count: 0,
      name: state.name,
    };
  } else {
    return state;
  }
};

const AdvanceCounter = () => {
  const [state, dispatch] = useReducer(CounterReducer, {
    count: 0,
    name: "Counter",
  });

  const handleIncrement = () => {
    dispatch({ type: "inc" });
  };
  const handleDecrement = () => {
    dispatch({ type: dec });
  };
  const handleReset = () => {
    dispatch({ type: "rst" });
  };
  return (
    <div>
      <h3>Advance Counter</h3>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default AdvanceCounter;
