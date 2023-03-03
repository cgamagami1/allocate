import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import AuthFormField from "../../components/AuthFormField";
import logoRaisinBlack from "../../assets/logo-raisin-black.png";
import Button from "../../components/Button";

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
        <img className="mb-8" src={logoRaisinBlack} alt="logo" />
        <h2 className="m-auto text-3xl text-gray-800">Welcome back</h2>
        <AuthFormField type="email" placeholder="Email" name="email" value={email} handleOnChange={handleOnChange} />
        <AuthFormField type="password" placeholder="Password" name="password" value={password} handleOnChange={handleOnChange} />

        <Button title="Sign In" isSubmit={true} />
        <span onClick={signInWithGooglePopup}>Sign in with google</span>
      </form>
    </div>
  );
}

export default SignIn;