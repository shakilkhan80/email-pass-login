import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { app } from "../Firebase/firebaseConfig";

const auth = getAuth(app);
const Register = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    //stop page refresh
    event.preventDefault();
    setSuccess("");
    setError("");
    //get data from the form
    const email = event.target.email.value;
    const password = event.target.password.value;
    //validate
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Password must contain a special character");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain an uppercase letter");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Password must contain a number");
      return;
    }
    //create a password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        event.target.reset();
        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  //   const handleChange = (event) => {
  //     console.log(event.target.value);
  //     setEmail(event.target.value);
  //   };
  //   const handleBlur = (e) => {
  //     console.log(e.target.value);
  //     setPassword(e.target.value);
  //   };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Please Register</h4>
      <form onSubmit={handleSubmit}>
        <input
          //   onChange={handleChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          //   onBlur={handleBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          required
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
      <p style={{ color: "green" }}>{success}</p>
    </div>
  );
};

export default Register;
