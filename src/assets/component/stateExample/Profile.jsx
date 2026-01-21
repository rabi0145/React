import { useState } from "react";

const Profile = () => {
    // Destructuring state
    let [count, setCount] = useState(0); 
    // [0,1]
    //let [a,b] = [23,43]
    //console.log("Test: ",test)
    //let count = 0;
    return (
        <div>
            <h1>Profile Page</h1>
            {count%2 == 0? <h2>Even</h2> : <h2>Odd</h2>}
            <p>Count: {count}</p> 
            <button onClick={() => { 
                setCount(count + 1);
                console.log("Count: ", count + 1); // Note: state updates are async
            }}> 
                Increment 
            </button>
        </div>
    );
};

export default Profile;
