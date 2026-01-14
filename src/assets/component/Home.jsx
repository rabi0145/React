let Home = () => {
    return(
        <div>
            <h1>Home page</h1>
            <p>This is home page</p>
            <Third />
        </div>
    )
}
export default Home

//Function Home()
//Function call
//Never call component as function
//Home()

let First = () => {
    return(
        <div>
            <h4>This is first component</h4>
        </div>
    )
}

let Second = () => {
    return(
        <div>
            <h4>This is second component</h4>
        </div>
    )
}

let Third = () => {
    return(
        <div>
            <h4>This is third component</h4>
        </div>
    )
}

export {First, Second}