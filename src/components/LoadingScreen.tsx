import { FC } from "react";
import spinner from "../assets/spinner.svg";

const LoadingScreen: FC = () => {
  return (
    <div className="grid w-screen h-screen items-center justify-center">
      <img className="w-24 h-24 animate-spin" src={spinner} alt="loading icon" />
    </div>
  );
}

export default LoadingScreen;