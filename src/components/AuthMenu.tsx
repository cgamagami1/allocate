import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { MenuContext, MENU_STATUS } from "../context/MenuContext";
import AuthFormField from "./AuthFormField";
import MenuHeader from "./MenuHeader";
import Button, { BUTTON_STYLE_TYPE } from "./Button";
import { AuthError, AuthErrorCodes, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { UserContext } from "../context/UserContext";

const AuthMenu: FC = () => {
  
  const { setMenuStatus, settingsCallback, setSettingsCallback } = useContext(MenuContext);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!user) throw new Error("No user");
    
    try {
      const credential = EmailAuthProvider.credential(user.email!, password);
      await reauthenticateWithCredential(user, credential);
      await settingsCallback();
      handleCloseMenu();
    }
    catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Incorrect password");
          break;
        default:
          alert(error);
          break;
      }
    }

    setIsLoading(false);
  }

  const handleCloseMenu = () => {
    setSettingsCallback(() => () => {});
    setMenuStatus(MENU_STATUS.NONE); 
  };

  const handleOnPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <form className="p-8 bg-white menu-shadow rounded-xl tilt-animation flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <MenuHeader title="Confirm Password" handleCloseMenu={handleCloseMenu} />
      <AuthFormField type="password" placeholder="Password" value={password} onChange={handleOnPasswordChange} />
      <Button title="Confirm" styleType={BUTTON_STYLE_TYPE.GREEN} isLoading={isLoading} />
    </form>
  );
}

export default AuthMenu;