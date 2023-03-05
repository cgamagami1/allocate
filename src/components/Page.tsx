import { FC, ReactNode } from "react";

type PageProps = {
  isGrid: boolean;
  children: ReactNode;
}

const Page: FC<PageProps> = ({ isGrid, children }) => {
  return (
    <div className={`flex-grow ${isGrid ? "page-grid" : "flex flex-col" } md:px-16 appear-animation`}>
        {children}
    </div>
  );
}

export default Page;