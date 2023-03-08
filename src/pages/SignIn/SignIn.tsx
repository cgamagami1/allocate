import { useState, FC, ChangeEvent, FormEvent } from "react";
import { signInWithEmailAndPassword, AuthError, AuthErrorCodes, signInAnonymously } from "firebase/auth";
import { auth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import AuthFormField from "../../components/AuthFormField";
import logoRaisinBlack from "../../assets/logo-raisin-black.png";
import Button, { BUTTON_STYLE_TYPE } from "../../components/Button";
import { Link } from "react-router-dom";

const SignIn: FC = () => {
  const initialValues = { email: "", password: "" };
  const [formFields, setFormFields] = useState(initialValues);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setIsAuthLoading(true);
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

    setIsAuthLoading(false);
    resetFormFields();
  }
  
  const signInAsGuest = async () => {
    setIsGuestLoading(true); 
    await signInAnonymously(auth);
    setIsGuestLoading(false);
    navigate("/"); 
  };

  const resetFormFields = (): void => setFormFields(initialValues);
  
  const handleOnEmailChange = (e: ChangeEvent<HTMLInputElement>): void => setFormFields({ ...formFields, email: e.target.value });

  const handleOnPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => setFormFields({ ...formFields, password: e.target.value });

  return (
    <div className="h-screen w-screen grid items-center grid-cols-1 justify-center">
      <form className="flex flex-col m-auto w-screen md:w-[30rem] p-8 gap-6" onSubmit={handleOnSubmit}>
        <img className="mb-16" src={logoRaisinBlack} alt="logo" />
        <AuthFormField type="email" placeholder="Email" name="email" value={email} onChange={handleOnEmailChange} />
        <AuthFormField type="password" placeholder="Password" name="password" value={password} onChange={handleOnPasswordChange} />

        <Button title="Sign In" type="submit" styleType={BUTTON_STYLE_TYPE.GREEN} isLoading={isAuthLoading} />
        <Button title="Sign In As Guest" type="button" styleType={BUTTON_STYLE_TYPE.WHITE} onClick={signInAsGuest} isLoading={isGuestLoading} />
        <p className="text-center">Don't have an account? <Link className="text-green-600 font-bold hover:cursor-pointer" to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;