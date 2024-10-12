import Chip from "../chip";
import Image, { StaticImageData } from "next/image";

export interface CardProps {
  id: number;
  //   src: string; 임시로 변경
  src: StaticImageData;
  title: string;
  description: string;
  chips: string[];
  children?: React.ReactNode;
  onClick?: () => void;
  onMouseLeave?: () => void;
}

const Card = ({
  id,
  src,
  title,
  description,
  chips,
  children,
  onClick,
  onMouseLeave,
}: CardProps) => {
  const Element = children ? "div" : "button";
  return (
    <Element
      className={`flex flex-col overflow-hidden rounded-b-2xl shadow-lg hover:shadow-2xl transition-all h-[370px] relative group ${children && "hover:h-[420px] hover:overflow-visible"}`}
      onClick={() => onClick?.()}
      onMouseLeave={() => onMouseLeave?.()}
    >
      <Image
        src={src}
        alt="추천 영상 썸네일"
        width={290}
        height={164}
        className="rounded-t-2xl"
      />
      <div className="bg-white py-6 px-5 h-[208px] flex flex-col justify-between self-stretch text-start">
        <span className="sub-header3">{title}</span>
        <p className="body3 text-gray-300">{description}</p>
        <div className="flex gap-2">
          {chips.map((chip) => (
            <Chip key={chip} name={chip} />
          ))}
        </div>
      </div>
      {children}
    </Element>
  );
};

export default Card;
