import { FC, LabelHTMLAttributes } from "react";

type MenuLabelProps = {
  title: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

const MenuLabel: FC<MenuLabelProps> = ({ title, ...otherProps }) => {
  return (
    <label className="block my-2 font-bold text-gray-500" {...otherProps}>{title}</label>
  );
}

export default MenuLabel;