
const Page = ({ isGrid, children }) => {
  return (
    <div className={`flex-grow ${isGrid ? "page-grid" : "flex flex-col" } md:px-16 appear-animation`}>
        {children}
    </div>
  );
}

export default Page;