import { useState } from "react";

const ControlledForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is missing.");
      return;
    }
    if (password === "") {
      alert("Password is missing.");
      return;
    }
    if (fullName === "") {
      alert("FullName can't be empty.");
    }
    alert(
      "Email: " + email + "Password: " + password + "Full Name: " + fullName,
    );
  };

  return (
    <div>
      <h3>Register Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="my-form-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-form-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
          />
        </div>
        <div className="my-form-field">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default ControlledForm;
