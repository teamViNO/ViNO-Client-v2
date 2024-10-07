import MenuSvg from "@/assets/icons/menu.svg";
import CloseSvg from "@/assets/icons/close.svg";
import LogoSvg from "@/assets/icons/logo.svg";
import SearchSvg from "@/assets/icons/search.svg";
import NotifyExistSvg from "@/assets/icons/notify-exist.svg";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Notify from "@/components/notify";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);

  const Icon = isSidebarOpen ? CloseSvg : MenuSvg;
  const isLogin = true;

  const onClickMenu = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const onClickSearch = () => {};

  const onClickNotify = () => {
    setIsNotifyOpen((prev) => !prev);
  };

  const onClickProfile = () => {};

  const onCloseNotify = () => {
    setIsNotifyOpen(false);
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
        <div className="flex gap-5 items-center">
          {isLogin ? (
            <>
              <button onClick={onClickSearch}>
                <SearchSvg width="28" height="28" fill="white" />
              </button>
              <div className="relative">
                <button onClick={onClickNotify}>
                  <NotifyExistSvg width="28" height="28" fill="#787878" />
                </button>
                {isNotifyOpen && (
                  <Notify data={[]} onCloseNotify={onCloseNotify} />
                )}
              </div>
              <button onClick={onClickProfile}>
                <Image src="" alt="프로필 이미지" width={36} height={36} />
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              className="body3 py-2 px-6 bg-green-400 text-gray-500 hover:bg-green-500 rounded-full"
            >
              로그인/회원가입
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
