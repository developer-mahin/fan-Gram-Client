import { NavLink } from "react-router-dom";

type TFNavLinkProps = {
  item: {
    path: string;
    name: string;
  };
};

const FNavLink = ({ item }: TFNavLinkProps) => {
  return (
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#D42978] font-semibold border-b border-[#D42978]"
            : "text-white font-semibold"
        }
        to={item.path}
      >
        {item.name}
      </NavLink>
    </li>
  );
};

export default FNavLink;
