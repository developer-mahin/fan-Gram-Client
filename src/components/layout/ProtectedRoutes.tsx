import { jwtDecode } from "jwt-decode";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TUser, logOut } from "@/redux/features/users/userSlice";

type TProtectedRoutesProps = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoutes = ({ children, role }: TProtectedRoutesProps) => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  let user;
  if (token) {
    user = jwtDecode(token);
  }

  if (role !== undefined && role !== (user as TUser)?.role) {
    dispatch(logOut());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoutes;
