//Destructuring Props
let First = ({address, fullName, age}) =>{
    // let {a,b} = {a:30, b:40}
    console.log("First component props: ",fullName)
    console.log("age: ",age)
    console.log("address: ",address)
    return(
        <div>
            <h1>First Component</h1>
            <b>Address: {address} </b>
            <i>Full Name: {fullName} </i>
            <p>Age: {age} </p>
        </div>
    )
}
export default First