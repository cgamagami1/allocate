import { MouseEvent, useState } from "react";

export type RipplePosition = {
  x: number;
  y: number;
}

const useRipple = (): [boolean, RipplePosition, (e: MouseEvent<HTMLDivElement>) => void] => {
  const [isRippleVisible, setIsRippleVisible] = useState(false);
  const [ripplePosition, setRipplePosition] = useState<RipplePosition>({ x: 0, y: 0 });

  const handleRipple = (e: MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    if (!isRippleVisible) {
      setIsRippleVisible(true);
      setTimeout(() => setIsRippleVisible(false), 500);
    }
  }

  return [isRippleVisible, ripplePosition, handleRipple];
}

export default useRipple;