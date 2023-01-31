
const Card = ({ title, children }) => {
  return (
    <div className="">
      <h1 className="px-8 py-4 text-3xl font-bold shadow-md text-raisin-black">{title}</h1>
      {children}
    </div>
  );
}

export default Card;