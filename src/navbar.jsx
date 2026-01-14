import "./navbar.css"

let Navbar = () => {
    {/* better way to handle onclick  */}
            let handleProfileMenuClick = ()=>{
                console.log("Profile Clicked")
                event.target.style.backgroundColor = "Yellow"
                event.target.style.padding = "50px"
                event.target.style.borderRadius = "10px"
                console.log(event.target.style)
            }
            
            /* let event = {
                target: {
                    value: "Profile",
                    style: {
                        backgroundColor: "Yellow",
                        padding: "50px 20px",
                        borderRadius: "10px"
                    }
                }
            } */

    let handleSearchOnChange = (ev) => {
        console.log(ev.target.value)
        let v = ev.target.value
        console.log(v.length)
        let random1 = Math.random()*255
        let random2 = Math.random()*255
        let random3 = Math.random()*255
        // console.log(random.toFixed(0))
        let red = random1.toFixed(0)
        let green = random1.toFixed(0)
        let blue = random1.toFixed(0)
        ev.target.style.backgroundColor= `rgb(${red},${green},${green})`

    }

    return (
        <div className ="navbar">
            {/* Inline style */}
            <h1 style = {
                {
                    backgroundColor: "Blue",
                    padding: "10px",
                    borderRadius: "50%",
                    color: "black"
                }
            }>Navbar</h1>
            <div className = "menus">
                <input onChange={handleSearchOnChange} placeholder="Search Anything"></input>
                <h4 onClick={   
                    (event) => {
                        console.log("Home clicked!")
                    }
                }>Home</h4>
                <h4 onClick={handleProfileMenuClick}>Profile</h4>
            </div>

        </div>
        
    )
}


export default Navbar