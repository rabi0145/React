import { useState } from "react"
import "./conditional_rendering.css"

let ConditionalReindering = () => {
    const [age, setAge] =useState(80)
    return(
        <div>
            <h1>Cinditional Rendering Example</h1>
            {/* Conditional rendering using ternary operator */}
            {
                age > 40 ? <h3>Age is greater than 40</h3> :
                <h3>Age is less than 40</h3>
            }

            {/* Using logical AND (&&) : short circuit evaluation */}
            {
                age %2 == 0  &&  <b>Age is even.</b>
            }

            {/* Using logical OP (||) : default value or fallback value */}
            {
                age >60 || <h3>Fallback value when age isn't grater than 60</h3>
            }
        
        </div>
    )
}
export default ConditionalReindering