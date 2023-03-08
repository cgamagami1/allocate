import { useNavigate } from "react-router-dom";
import { signOut, deleteUser } from "firebase/auth";
import { auth, db } from "../../utils/firebase-config";
import { FC, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { doc, deleteDoc } from "firebase/firestore";
import LoadingScreen from "../../components/LoadingScreen";

const SignOut: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const signOutUser = async () => {
      if (user?.isAnonymous) {
        await deleteDoc(doc(db, "users", user.uid));
        await deleteUser(user);
      }

      await signOut(auth);
      navigate("/signin");
    }

    signOutUser();
  }, []);

  return (
    <LoadingScreen />
  );
}

export default SignOut;