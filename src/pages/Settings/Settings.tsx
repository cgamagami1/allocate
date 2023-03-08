import HeaderBar from "../../components/HeaderBar";
import Page from "../../components/Page";
import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import AuthFormField from "../../components/AuthFormField";
import Button, { BUTTON_STYLE_TYPE } from "../../components/Button";
import { MenuContext, MENU_STATUS } from "../../context/MenuContext";
import { AuthError, AuthErrorCodes, EmailAuthProvider, updateProfile, updateEmail, updatePassword, deleteUser } from "firebase/auth";
import { db } from "../../utils/firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import { cloneDeep }  from "lodash";

const Settings: FC = () => {
  const { setMenuStatus, setSettingsCallback } = useContext(MenuContext);
  const initialValues = { name: "", email: "", password: "", confirmPassword: "" };
  const [formFields, setFormFields] = useState(initialValues);
  const { name, email, password, confirmPassword } = formFields;
  const { user, setUser } = useContext(UserContext);

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword)  {
      alert("Passwords do not match");
      return;
    }

    setSettingsCallback(() => updateAccount);
    setMenuStatus(MENU_STATUS.AUTH);
  }

  const handleOnDeleteAccount = async () => {
    if (user?.isAnonymous) await deleteAccount();
    
    setSettingsCallback(() => deleteAccount);
    setMenuStatus(MENU_STATUS.AUTH);
  }

  const updateAccount = async () => {
    if (!user) throw new Error("No user");
    
    try {
      if (name !== "") await updateProfile(user, { displayName: name });

      if (email !== "") await updateEmail(user, email);

      if (password !== "") await updatePassword(user, password);

      setUser(cloneDeep(user));
      resetFormFields();
    }
    catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_EMAIL:
          alert("Email is invalid");
          break;
        case AuthErrorCodes.EMAIL_EXISTS:
          alert("Email already in use");
          break;
        case AuthErrorCodes.WEAK_PASSWORD:
          alert("Password should be at least 6 characters");
          break;
        default:
          alert(error);
          break;
      }
    }
  }

  const deleteAccount = async () => {
    if (!user) throw new Error("No user");

    try {
      const userDoc = doc(db, "users", user.uid);
      await deleteDoc(userDoc);
      await deleteUser(user);
    }
    catch (error) {
      alert(error);
    }
  }

  const resetFormFields = () => setFormFields(initialValues);

  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>) => setFormFields({ ...formFields, name: e.target.value });

  const handleOnEmailChange = (e: ChangeEvent<HTMLInputElement>) => setFormFields({ ...formFields, email: e.target.value });

  const handleOnPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setFormFields({ ...formFields, password: e.target.value });

  const handleOnConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setFormFields({ ...formFields, confirmPassword: e.target.value });

  return (
    <Page isGrid={false}>
      <HeaderBar title="Settings" />
      <div className="overflow-y-scroll">
        <form className="flex flex-col w-screen md:w-[30rem] p-8 gap-6" onSubmit={handleOnSubmit}>
          <label className="text-2xl font-bold" htmlFor="name">Name:</label>
          <AuthFormField type="text" placeholder="New name" name="name" value={name} onChange={handleOnNameChange} />

          <label className="text-2xl font-bold" htmlFor="email">Email:</label>
          <AuthFormField type="email" placeholder="New email" name="email" value={email} onChange={handleOnEmailChange} />

          <label className="text-2xl font-bold" htmlFor="password">Password:</label>
          <AuthFormField type="password" placeholder="New password" name="password" value={password} onChange={handleOnPasswordChange} />
          <AuthFormField type="password" placeholder="Confirm new password" name="confirmPassword" value={confirmPassword} onChange={handleOnConfirmPasswordChange} />

          <Button title="Update Settings" styleType={BUTTON_STYLE_TYPE.WHITE} type="submit" />
          <Button title="Delete Account" styleType={BUTTON_STYLE_TYPE.WHITE} type="button" onClick={handleOnDeleteAccount} />
          <br />
          <br />
        </form>
      </div>
    </Page>
  );
}

export default Settings;