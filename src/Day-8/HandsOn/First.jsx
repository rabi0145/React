import { useState } from "react"

const LoginForm = ()=> {
    const [formData, setFormData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});

    const validate = ()=> {
        let newErrors = {};
        if(!formData.email)
            newErrors.email = "Email is required.";
        else if 
            (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";

        if(!formData.password)
            newErrors.password = "Password is required.";
        else if(formData.password.length <= 6)
            newErrors.password = "Password must be > 6 characters."

        setErrors(newErrors);
        return Object.keys(newErrors).length  === 0;
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (validate())
            console.log("Login Data: ", formData);
    };

    return(
        <div>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px'}}>
                <h1>Login</h1>
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                {errors.email && <span>{errors.email}</span>}

                <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                {errors.password && <span>{errors.password}</span>}

                <button type="submit">Login</button>
                
            </form>
        </div>
    )
}

export default LoginForm;