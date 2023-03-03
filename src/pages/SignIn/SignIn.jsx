import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import AuthFormField from "../../components/AuthFormField";
import logoRaisinBlack from "../../assets/logo-raisin-black.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  const initialValues = { email: "", password: "" };
  const [formFields, setFormFields] = useState(initialValues);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    }
    catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        case "auth/invalid-email":
          alert("Invalid email");
          break;
        default:
          alert("Could not sign in: " + error);
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
        <AuthFormField type="email" placeholder="Email" name="email" value={email} onChange={handleOnChange} />
        <AuthFormField type="password" placeholder="Password" name="password" value={password} onChange={handleOnChange} />

        <Button title="Sign In" type="submit" styleType={"GREEN"} />
        <Button title="Sign In With Google" styleType={"WHITE"} onClick={signInWithGooglePopup} />
        <p className="text-center">Don't have an account? <Link className="text-green-600 font-bold hover:cursor-pointer" to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;