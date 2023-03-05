import { FC } from "react";
import { RipplePosition } from "../utils/useRipple";

type RippleProps = {
  ripplePosition: RipplePosition;
}

const Ripple: FC<RippleProps> = ({ ripplePosition }) => {
  return (
    <span className="absolute bg-[#00000033] translate-x-[-50%] translate-y-[-50%] rounded-full ripple-animation" 
        style={{ left: ripplePosition.x + "px", top: ripplePosition.y + "px" }}></span>
  );
}

export default Ripple;