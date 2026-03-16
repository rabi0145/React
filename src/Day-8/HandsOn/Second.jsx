import { useState } from "react"

const RegisterForm = ()=>{
    const [formData, setFormData] = useState({enail: '', password: '', confirmPassword: '', age: '', gender: '', address: ''});
    const [errors, setErrors] = useState({});

    const validate =  ()=> {
        let newErrors = {};
        Object.keys(formData).forEach(key => {
            if(!formData[key])
                 newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        });


    if(formData.email && !/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Invalid Email.";
    if(formData.password && formData.password.length <= 6) 
        newErrors.password = "Password must be > 6 characters.";
    if(formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match.";
    if(formData.age && Number(formData.age) < 18)
        newErrors.age = "Age must be greater than 18";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (validate())
            console.log("Registered! ", formData);
    };

    return(
        <div>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px'}}>
                <h2>Register</h2>
                <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                {errors.email && <small style={{color: 'red'}}> {errors.email}</small>}

                <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.password.value})} />
                {errors.password && <small style={{color: 'red'}}>{errors.password}</small>}

                <input type="password" placeholder="Confirm Password" onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
                {errors.confirmPassword && <small style={{color: 'red'}}>{errors.confirmPassword}</small>}

                <input type="number" placeholder="Age" onChange={(e) => setFormData({...formData, age: e.target.value})} />
                {errors.age && <small style={{color: 'red'}}>{errors.age}</small>}

                <select onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                {errors.gender && <small style={{color: 'red'}}>{errors.gender}</small>} 

                <textarea placeholder="Address" onChange={(e) => setFormData({...formData, address: e.target.value})} />
                {errors.address && <small style={{color: 'red'}}>{errors.address}</small>}

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;