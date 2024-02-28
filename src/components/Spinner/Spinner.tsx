import { cn } from "@/lib/utils";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div
          className={cn(
            "size-9 border-8 border-dashed rounded-full animate-spin mt-3 border-cyan-400",
            className
          )}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
