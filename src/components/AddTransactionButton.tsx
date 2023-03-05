import { useContext, FC } from "react";
import { MenuContext, MENU_STATUS } from "../context/MenuContext";
import PlusIcon from "./svgs/PlusIcon";

const AddTransactionButton: FC = () => {
  const { setMenuStatus} = useContext(MenuContext);

  const handleOnClick = (): void => {
    setMenuStatus(MENU_STATUS.TRANSACTION);
  }

  return (
    <div className="fixed bottom-0 right-0 z-20 p-4 mr-5 md:mr-10 mb-[5.5rem] bg-green-500 hover:bg-green-600 hover:cursor-pointer md:mb-10 rounded-full" onClick={handleOnClick}>
      <div className="w-8">
        <PlusIcon isAddTransactionIcon={true} />
      </div>
    </div>
  );
}

export default AddTransactionButton;