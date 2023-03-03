import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import logoRaisinBlack from "../../assets/logo-raisin-black.png";
import AuthFormField from "../../components/AuthFormField";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

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
    <div className="h-screen w-screen grid items-center grid-cols-1 justify-center">
      <form className="flex flex-col m-auto w-[30rem] p-8 gap-6" onSubmit={handleOnSubmit}>
        <img className="mb-16" src={logoRaisinBlack} alt="logo" />
        <h2 className="text-center text-3xl">Create Account</h2>
        <AuthFormField type="email" placeholder="Your email" name="email" value={email} onChange={handleOnChange} />
        <AuthFormField type="password" placeholder="Your password" name="password" value={password} onChange={handleOnChange} />
        <AuthFormField type="text" placeholder="Your name" name="name" value={name} onChange={handleOnChange} />

        <Button title="Sign Up" type="submit" styleType={"GREEN"} />
        <Button title="Sign Up With Google" styleType={"WHITE"} onClick={signInWithGooglePopup} />
        <p className="text-center">Already have an account? <Link className="text-green-600 font-bold hover:cursor-pointer" to="/signin">Sign In</Link></p>
      </form>
    </div>
  );
}

export default SignUp;