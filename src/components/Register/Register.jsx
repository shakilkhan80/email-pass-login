import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../Firebase/firebaseConfig";

const auth = getAuth(app);
const Register = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //stop page refresh
    event.preventDefault();
    //get data from the form
    const email = event.target.email.value;
    const password = event.target.password.value;
    //create a password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
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
        />
        <br />
        <input
          //   onBlur={handleBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
