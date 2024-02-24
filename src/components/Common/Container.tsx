import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[100%] xl:w-[1444px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
