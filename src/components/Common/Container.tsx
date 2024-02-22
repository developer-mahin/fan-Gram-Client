import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[100%] xl:w-[1444px] mx-auto px-4">
      {children}
    </div>
  );
};

export default Container;
