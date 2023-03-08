import { ButtonHTMLAttributes, FC} from "react";
import spinner from "../assets/spinner.svg";
import spinnerWhite from "../assets/spinner-white.svg";

export enum BUTTON_STYLE_TYPE {
  GREEN = "bg-green-500 hover:bg-green-600 text-white",
  WHITE = "bg-white hover:bg-gray-100 text-black border border-black"
}

type ButtonProps = {
  title: string;
  styleType: BUTTON_STYLE_TYPE;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ title, styleType, isLoading = false, ...otherProps }) => {
  return (
    <button className={`${styleType} text-2xl h-16 overflow-hidden p-4 rounded-md hover:button-hover-animation z-10 grid items-center justify-center`} {...otherProps}>
      {isLoading ? <img className="animate-spin w-8 h-8" src={styleType === BUTTON_STYLE_TYPE.GREEN ? spinnerWhite : spinner} alt="loading icon" /> : <span className="z-20">{title}</span>}
    </button>
  );
}

export default Button;