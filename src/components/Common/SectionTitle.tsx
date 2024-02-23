import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TSectionTitle = {
  className?: string;
  children: ReactNode;
};

const SectionTitle = ({ className, children }: TSectionTitle) => {
  return (
    <h2 className={cn("lg:text-[45px] text-2xl text-white font-bold", className)}>
      {children}
    </h2>
  );
};

export default SectionTitle;
