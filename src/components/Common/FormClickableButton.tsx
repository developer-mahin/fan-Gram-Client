import { Dispatch, SetStateAction } from "react";

type TFormClickableButton = {
  state: string;
  setterState: Dispatch<SetStateAction<string>>;
  data: string;
};

const FormClickableButton = ({
  setterState,
  state,
  data,
}: TFormClickableButton) => {
  return (
    <div
      onClick={() => setterState(data)}
      className={`rounded-full h-10 flex items-center justify-center font-medium cursor-pointer px-6 ${
        state === data ? "bg-primary" : "bg-[#292929]"
      }`}
    >
      {data}
    </div>
  );
};

export default FormClickableButton;
