import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../Firebase/firebaseConfig";

const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();

  const handleSubmit = (event) => {
    //stop page refresh
    event.preventDefault();
    setSuccess("");
    setError("");
    //get data from the form
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //create a password
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        event.target.reset();
        setSuccess("User Logged In successfully");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const resetEmail = () => {
    const email = emailRef.current.value;
    if (!email) {
      setError("please enter your email");
      alert("please enter an email");
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Please Login</h4>
      <form onSubmit={handleSubmit}>
        <input
          //   onChange={handleChange}
          type="email"
          name="email"
          id="email"
          ref={emailRef}
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
        <input type="submit" value="Login" />
      </form>
      <p>
        Forget Password? <button className="btn btn-link" onClick={resetEmail}>Reset</button>
      </p>
      <p>
        <small>
          Don&apos;t have an account?{" "}
          <Link  to="/register">
            Register
          </Link>
        </small>
      </p>
      <p style={{ color: "red" }}>{error}</p>
      <p style={{ color: "green" }}>{success}</p>
    </div>
  );
};

export default Login;
