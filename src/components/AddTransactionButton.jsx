import { useContext } from "react";
import plusIcon from "../assets/plus.svg";
import { MenuContext } from "../context/MenuContext";

const AddTransactionButton = () => {
  const { setCurrentMenu } = useContext(MenuContext);

  const handleOnClick = () => {
    setCurrentMenu("transaction");
  }

  return (
    <div className="fixed bottom-0 right-0 z-20 p-4 mr-5 md:mr-10 mb-[5.5rem] bg-green-500 hover:bg-green-600 hover:cursor-pointer md:mb-10 rounded-full" onClick={handleOnClick}>
      <img className="w-8" src={plusIcon} alt="plus sign" />  
    </div>
  );
}

export default AddTransactionButton;