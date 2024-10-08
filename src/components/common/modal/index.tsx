"use client";

import CloseSvg from "@/assets/icons/close.svg";
import useOutsideClick from "@/hooks/useOutsideClick";

interface ModalProps {
  children: React.ReactNode;
  withBg?: boolean;
  onClose: () => void;
}

const Modal = ({ children, withBg = false, onClose }: ModalProps) => {
  const [modalRef] = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <section
      className={`fixed left-0 top-0 w-full h-full ${withBg && "bg-black bg-opacity-35 flex justify-center items-center"}`}
    >
      <div
        ref={modalRef}
        className="bg-white py-10 rounded-[20px] w-[700px] flex flex-col"
      >
        <button className="self-end mr-10" onClick={onClose}>
          <CloseSvg width="28" height="28" fill="#BBBBBB" />
        </button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
