import { useState } from "react";

const useRipple = () => {
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  const [isRippleVisible, setIsRippleVisible] = useState(false);

  const handleRipple = (e) => {
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