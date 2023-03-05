import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase-config";
import { useEffect } from "react";
import { FC } from "react";

const SignOut: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signOutUser = async (): Promise<void> => {
      await signOut(auth);
      navigate("/signin");
    }

    signOutUser();
  }, []);

  return (
    <div></div>
  );
}

export default SignOut;