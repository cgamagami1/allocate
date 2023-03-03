
const AuthFormField = (props) => {
  return (
    <div className="relative">
      <input className="border w-full rounded-md border-gray-300 px-8 py-4 text-xl focus:outline-none focus:select-input-animation" {...props} />
      <div className="bg-blue-400 width-64 h-1 relative -translate-y-1 rounded-b-md selection-bar invisible m-auto"></div>
    </div>
  );
}

export default AuthFormField;