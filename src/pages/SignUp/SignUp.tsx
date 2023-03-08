import { createUserWithEmailAndPassword, signInAnonymously, updateProfile } from "firebase/auth";
import { useState, FC, FormEvent, ChangeEvent } from "react";
import { auth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import logoRaisinBlack from "../../assets/logo-raisin-black.png";
import AuthFormField from "../../components/AuthFormField";
import Button, { BUTTON_STYLE_TYPE } from "../../components/Button";
import { Link } from "react-router-dom";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const SignUp: FC = () => {
  const initialValues = { email: "", password: "", confirmPassword: "", name: "" };
  const [formFields, setFormFields] = useState(initialValues);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const { email, password, confirmPassword, name } = formFields;
  const navigate = useNavigate();

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setIsAuthLoading(true);
    try {
      if (password === confirmPassword) {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: name });
        navigate("/");
      }
      else {
        alert("Passwords do not match");
      }
    }
    catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_EMAIL:
          alert("Cannot create user, email is invalid");
          break;
        case AuthErrorCodes.EMAIL_EXISTS:
          alert("Cannot create user, email already in use");
          break;
        case AuthErrorCodes.WEAK_PASSWORD:
          alert("Password should be at least 6 characters");
          break;
        default:
          alert("Could not create user: " + error);
          break;
      }
    }

    setIsAuthLoading(false);
    resetFormFields();
  }

  const resetFormFields = (): void => setFormFields(initialValues);

  const handleOnEmailChange = (e: ChangeEvent<HTMLInputElement>): void => setFormFields({ ...formFields, email: e.target.value });

  const handleOnPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => setFormFields({ ...formFields, password: e.target.value });

  const handleOnConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => setFormFields({ ...formFields, confirmPassword: e.target.value });

  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>): void => setFormFields({ ...formFields, name: e.target.value });

  const signInAsGuest = async () => {
    setIsGuestLoading(true); 
    await signInAnonymously(auth);
    setIsGuestLoading(false);
    navigate("/"); 
  };

  return (
    <div className="h-screen w-screen grid items-center grid-cols-1 justify-center">
      <form className="flex flex-col m-auto w-screen md:w-[30rem] p-8 gap-6" onSubmit={handleOnSubmit}>
        <img className="mb-16" src={logoRaisinBlack} alt="logo" />
        <h2 className="text-center text-3xl">Create Account</h2>
        <AuthFormField type="email" placeholder="Your email" name="email" value={email} onChange={handleOnEmailChange} />
        <AuthFormField type="password" placeholder="Your password" name="password" value={password} onChange={handleOnPasswordChange} />
        <AuthFormField type="password" placeholder="Confirm password" name="confirmPassword" value={confirmPassword} onChange={handleOnConfirmPasswordChange} />
        <AuthFormField type="text" placeholder="Your name" name="name" value={name} onChange={handleOnNameChange} />

        <Button title="Sign Up" type="submit" styleType={BUTTON_STYLE_TYPE.GREEN} isLoading={isAuthLoading} />
        <Button title="Sign Up As Guest" type="button" styleType={BUTTON_STYLE_TYPE.WHITE} isLoading={isGuestLoading} onClick={signInAsGuest} />
        <p className="text-center">Already have an account? <Link className="text-green-600 font-bold hover:cursor-pointer" to="/signin">Sign In</Link></p>
      </form>
    </div>
  );
}

export default SignUp;