import PlusIcon from "./svgs/PlusIcon";
import { useContext, FC, MouseEvent } from "react";
import { MenuContext, MENU_STATUS } from "../context/MenuContext";
import useRipple from "../utils/useRipple";
import Ripple from "./Ripple";

const AddCategoryButton: FC = () => {
  const { setMenuStatus } = useContext(MenuContext);
  const [isRippleVisible, ripplePosition, handleRipple] = useRipple();
  
  const handleOnClick = (e: MouseEvent<HTMLDivElement>): void => {
    handleRipple(e);
    setMenuStatus(MENU_STATUS.CATEGORY);  
  }

  return (
    <div className="bg-white sticky top-0 z-10 rounded-b-2xl">
      <div className="box-border overflow-hidden relative grid justify-center p-2 mb-2 bg-green-200 border-2 border-green-600 rounded-xl hover:cursor-pointer hover:bg-green-300" onClick={handleOnClick}>
        <div className="w-8">
          <PlusIcon isAddTransactionIcon={false} />
        </div>

        {isRippleVisible && <Ripple ripplePosition={ripplePosition} />}
      </div>
    </div>
  );
}

export default AddCategoryButton;