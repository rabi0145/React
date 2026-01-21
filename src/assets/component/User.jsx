let User = ({address, age, fullName}) => {
    return(
        <div>
            <p>Address: {address}</p>
            <p>Age: {age}</p>
            <p>Name: {fullName} </p>
        </div>
    )
}

export default User;