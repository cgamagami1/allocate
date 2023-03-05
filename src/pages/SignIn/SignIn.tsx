import { useState, FC, ChangeEvent, FormEvent } from "react";
import { signInWithEmailAndPassword, signInWithPopup, AuthError, AuthErrorCodes } from "firebase/auth";
import { auth, googleProvider } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import AuthFormField from "../../components/AuthFormField";
import logoRaisinBlack from "../../assets/logo-raisin-black.png";
import Button, { BUTTON_STYLE_TYPE } from "../../components/Button";
import { Link } from "react-router-dom";

const SignIn: FC = () => {
  const initialValues = { email: "", password: "" };
  const [formFields, setFormFields] = useState(initialValues);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    }
    catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Incorrect password");
          break;
        case AuthErrorCodes.USER_DELETED:
          alert("No user associated with this email");
          break;
        case AuthErrorCodes.INVALID_EMAIL:
          alert("Invalid email");
          break;
        default:
          alert("Could not sign in: " + error);
          break;
      }
    }

    resetFormFields();
  }

  const resetFormFields = (): void => setFormFields(initialValues);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const signInWithGooglePopup = async (): Promise<void> => { await signInWithPopup(auth, googleProvider) };

  return (
    <div className="h-screen w-screen grid items-center grid-cols-1 justify-center">
      <form className="flex flex-col m-auto w-[30rem] p-8 gap-6" onSubmit={handleOnSubmit}>
        <img className="mb-16" src={logoRaisinBlack} alt="logo" />
        <AuthFormField type="email" placeholder="Email" name="email" value={email} onChange={handleOnChange} />
        <AuthFormField type="password" placeholder="Password" name="password" value={password} onChange={handleOnChange} />

        <Button title="Sign In" type="submit" styleType={BUTTON_STYLE_TYPE.GREEN} />
        <Button title="Sign In With Google" styleType={BUTTON_STYLE_TYPE.WHITE} onClick={signInWithGooglePopup} />
        <p className="text-center">Don't have an account? <Link className="text-green-600 font-bold hover:cursor-pointer" to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;