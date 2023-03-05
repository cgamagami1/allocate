import { ButtonHTMLAttributes, FC} from "react";

export enum BUTTON_STYLE_TYPE {
  GREEN = "bg-green-500 hover:bg-green-600 text-white",
  WHITE = "bg-white hover:bg-gray-100 text-black border border-black"
}

type ButtonProps = {
  title: string;
  styleType: BUTTON_STYLE_TYPE;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ title, styleType, ...otherProps }) => {
  return (
    <button className={`${styleType} text-2xl h-16 overflow-hidden p-4 rounded-md hover:button-hover-animation z-10`} {...otherProps}>
      <span className="z-20">{title}</span>
    </button>
  );
}

export default Button;