/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { setIsModalOpen } from "@/redux/features/Global/globalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Modal from "react-modal";
import "../../styles/global.css";
import { Button } from "../ui/button";

type TFModalProps = {
  children: ReactNode;
  className?: string;
};

const FModal = ({ children, className }: TFModalProps) => {
  const dispatch = useAppDispatch();
  const { isModalOpen } = useAppSelector((state) => state.global);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
    },
  };

  function openModal() {
    dispatch(setIsModalOpen(true));
  }

  function closeModal() {
    dispatch(setIsModalOpen(false));
  }

  return (
    <>
      <div className={cn("", className)}>
        <Button className="rounded-full" onClick={openModal}>
          Login/Signup
        </Button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex justify-end">
            <button onClick={closeModal}>
              <IoIosCloseCircle className="text-2xl text-primary" />
            </button>
          </div>
          {children}
        </Modal>
      </div>
    </>
  );
};

export default FModal;
