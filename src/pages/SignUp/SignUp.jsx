import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = { email: "", password: "", name: "" };
  const [formFields, setFormFields] = useState(initialValues);
  const { email, password, name } = formFields;
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });
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

  const resetFormFields = () => setFormFields(initialValues);

  const handleOnChange = (e) => setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  return (
    <form onSubmit={handleOnSubmit}>
      <h1>Sign up</h1>
      <input type="email" placeholder="Your email" name="email" value={email} onChange={handleOnChange} />
      <input type="password" placeholder="Your password" name="password" value={password} onChange={handleOnChange} />
      <input type="text" placeholder="Your name" name="name" value={name} onChange={handleOnChange} />
      <input type="submit" value="Submit" /> <br />
      <span onClick={signInWithGooglePopup}>Sign up with google</span>
    </form>
  );
}

export default SignUp;