import { setIsModalOpen } from "@/redux/features/Global/globalSlice";
import { TUser, logOut } from "@/redux/features/users/userSlice";
import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type TProtectedRoutesProps = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoutes = ({ children, role }: TProtectedRoutesProps) => {
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      dispatch(setIsModalOpen(true));
      navigate("/");
    } else {
      const user = jwtDecode(token) as TUser;
      if (role && role !== user.role) {
        dispatch(logOut());
      }
    }
  }, [dispatch, role, token, navigate]);

  if (!token) {
    return null;
  }

  return children;
};

export default ProtectedRoutes;
