import plusIcon from "../assets/plus.svg";

const AddTransactionButton = () => {
  return (
    <div className="fixed bottom-0 right-0 z-20 p-4 px-8 mb-10 ml-8 border-2 border-white shadow-md cursor-pointer xl:mr-10 shadow-gray-300 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-2xl">
      <img className="w-6 xl:w-8" src={plusIcon} alt="plus sign" />  
    </div>
  );
}

export default AddTransactionButton;