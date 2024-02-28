import { ReactNode } from "react";

type FTableProps = {
  TABLE_HEAD: string[];
  children: ReactNode;
};

const FTable = ({ TABLE_HEAD, children }: FTableProps) => {
  return (
    <table className="w-full p-6 lg:text-sm text-xs text-left whitespace-nowrap">
      <thead>
        <tr className="">
          {TABLE_HEAD.map((item, i) => {
            return (
              <th key={i} className="p-3">
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="">{children}</tbody>
    </table>
  );
};

export default FTable;
