import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = { email: "", password: "", name: "" };
  const [formFields, setFormFields] = useState(initialValues);
  const { email, password, name } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(initialValues);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    }
    catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Cannot creat user, email is invalid");
          break;
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use");
          break;
        case "auth/weak-password":
          alert("Password should be at least 6 characters");
          break;
        default:
          alert("Could not create user: " + error);
          break;
      }
    }

    resetFormFields();
  }

  const handleOnChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <input type="email" placeholder="Your email" name="email" value={email} onChange={handleOnChange} />
      <input type="password" placeholder="Your password" name="password" value={password} onChange={handleOnChange} />
      <input type="text" placeholder="Your name" name="name" value={name} onChange={handleOnChange} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SignUp;