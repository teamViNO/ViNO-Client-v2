import LogoSvg from "@/assets/icons/logo-footer.svg";
import mailSrc from "@/assets/mail.png";
import successMailSrc from "@/assets/success-mail.png";
import SquareButton from "@/components/common/button/square-button";
import Image from "next/image";
import { useState } from "react";

const CONTENTS = [
  "TEAM Vi.NO",
  "고객센터 | 01000000000",
  "메일 | oooooo@gmail.com",
  "이용약관",
  "개인정보처리방침",
  "문의하기",
];

const Footer = () => {
  const [feedback, setFeedback] = useState("");
  const [isSent, setIsSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value);
  };

  const onClickSend = () => {
    setIsSent(true);
    setFeedback("소중한 피드백이 전달되었어요!");
  };

  return (
    <footer className="bg-gray-100 py-[60px] flex flex-col gap-10 px-[145px]">
      <LogoSvg />
      <div
        className={`flex p-5 rounded-lg gap-5 ${isSent ? "bg-gray-100" : "bg-white"}`}
      >
        <Image
          src={isSent ? successMailSrc : mailSrc}
          alt="메일 이미지"
          width={36}
          height={36}
        />
        <input
          value={feedback}
          onChange={onChange}
          className={`flex-1 ${isSent && "bg-gray-100 text-success sub-header2"}`}
          readOnly={isSent}
          placeholder="서비스를 이용하면서 불편하거나, 좋은 피드백이 있다면 보내주세요!"
        />
        <SquareButton onClick={onClickSend}>보내기</SquareButton>
      </div>
      <div className="footer-content">
        {CONTENTS.map((content) => (
          <span className="text-gray-300 body1" key={content}>
            {content}
          </span>
        ))}
      </div>
      <span className="text-gray-300 body1">
        © 2024 Vino. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
