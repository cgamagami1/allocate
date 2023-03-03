import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase-config";
import { useEffect } from "react";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signOutUser = async () => {
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