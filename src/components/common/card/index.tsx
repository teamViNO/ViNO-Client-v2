"use client";

import React from "react";
import Chip from "../chip";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  id: number;
  //   src: string; 임시로 변경
  src: StaticImageData;
  title: string;
  description: string;
  chips: string[];
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card = ({
  id,
  src,
  title,
  description,
  chips,
  children,
  onClick,
}: CardProps) => {
  return (
    <button
      className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:scale-110 hover:shadow-2xl transition-all"
      onClick={() => onClick?.()}
    >
      <Image src={src} alt="추천 영상 썸네일" width={290} height={164} />
      <div className="bg-white py-6 px-5 h-[208px] flex flex-col justify-between">
        <span className="sub-header3">{title}</span>
        <p className="body3 text-gray-300">{description}</p>
        <div className="flex gap-2">
          {chips.map((chip) => (
            <Chip key={chip} name={chip} />
          ))}
        </div>
      </div>
      {children}
    </button>
  );
};

export default Card;
