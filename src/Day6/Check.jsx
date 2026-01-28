import Login from "./Login"
import MyDashboard from "./MyDashboard"

const Check  = ({isLoggedIn})=>{
    //usinf if-else for conditional reindering
    if(isLoggedIn){
        return(
            <MyDashboard />
        ) 
    }else{
        return(
            <Login />
        )
    }
}

export default Check;