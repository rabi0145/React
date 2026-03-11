import { useRef } from "react";
import ControlledForm from "./ControlledForm";

const UnControlledFrom = () => {
    const fullNameRef = useRef();
    const handleShowFullName = () => {
        alert("Full Name: " + fullNameRef.current.value)
    }
  return (
    <div>
      <h3>Uncontrolled From</h3>
      <input type="text" placeholder="Enter your full name"  ref={fullNameRef}/>
      <button onClick={handleShowFullName}>Show Full Name</button>
      <p>FullName: {fullNameRef.current && fullNameRef.current.value}</p>
      <ControlledForm />
    </div>
  );
};

export default UnControlledFrom;
