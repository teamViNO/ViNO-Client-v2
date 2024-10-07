import MenuSvg from "@/assets/icons/menu.svg";
import CloseSvg from "@/assets/icons/close.svg";
import LogoSvg from "@/assets/icons/logo.svg";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? CloseSvg : MenuSvg;

  const onClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-500 sticky top-0 py-3 px-[60px]">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <button onClick={onClickMenu}>
            <Icon width="28" height="28" fill="#ffffff" />
          </button>
          <Link href="/">
            <LogoSvg width="65" height="20" fill="#ffffff" />
          </Link>
        </div>
        <Link
          href="/auth"
          className="body3 py-2 px-6 bg-green-400 text-gray-500 hover:bg-green-500 rounded-full"
        >
          로그인/회원가입
        </Link>
      </div>
    </header>
  );
};

export default Header;
