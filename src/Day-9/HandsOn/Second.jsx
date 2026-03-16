import { useEffect, useState } from "react";

const UserProfile = ()=> {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((error) => console.error('Error fetching data: ',error));
    }, []);

    if(loading) return <p>Loading User...</p>;
    return(
        <div>
            {/* <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p> */}

            {user.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            ))}
        </div>
    );
};

export default UserProfile;