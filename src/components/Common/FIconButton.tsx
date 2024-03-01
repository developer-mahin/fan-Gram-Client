/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";

type TIconButtonProps = {
  handler: any;
  className?: string;
  Icon: any;
  iconClass?: string;
};

const FIconButton = ({
  className,
  handler,
  Icon,
  iconClass,
}: TIconButtonProps) => {
  return (
    <button
      onClick={handler}
      className={cn(
        "size-12 rounded-full bg-transparent flex items-center justify-center border border-primary",
        className
      )}
    >
      <Icon className={cn("text-primary size-6", iconClass)} />
    </button>
  );
};

export default FIconButton;
