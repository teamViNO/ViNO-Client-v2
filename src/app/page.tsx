"use client";

import YoutubeInput from "@/components/home/YoutubeInput";
import MoveSvg from "@/assets/icons/move.svg";
import exampleSrc from "@/assets/convert-example.png";
import emptyVideSrc from "@/assets/empty-video.png";
import Card from "@/components/common/card";
import Image from "next/image";
import RoundButton from "@/components/common/button/round-button";
import Link from "next/link";

const cards = [
  {
    id: 1,
    src: exampleSrc,
    title: "우리는 카카오워크로 일해요",
    description: "카카오 워크의 업무환경 및 업무",
    chips: ["디자인", "진로"],
  },
  {
    id: 2,
    src: exampleSrc,
    title: "우리는 카카오워크로 일해요",
    description: "카카오 워크의 업무환경 및 업무",
    chips: ["디자인", "진로"],
  },
];

export default function Home() {
  const isLogin = true;
  return (
    <main>
      <section className="dark-section flex flex-col gap-10 pt-[120px] pb-[180px] px-[266px] bg-gray-500">
        <YoutubeInput />
      </section>
      <section
        className={`bg-white rounded-t-[60px] relative bottom-[60px] py-[100px] flex items-center gap-40 ${isLogin ? "flex-col-reverse" : "flex-col"}`}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2.5">
            <h3 className="header5">이런 인사이트는 어때요?</h3>
            <h4 className="sub-header2 text-gray-400">
              최근 사용자들이 많이 찾은 콘텐츠들을 소개해드려요
            </h4>
          </div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-10">
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 w-[910px]">
          <div className="flex items-center justify-between">
            <h3 className="header5">최근 읽은 영상</h3>
            {cards.length >= 3 && (
              <Link href="/" className="rounded-full bg-green-400 p-2.5">
                <MoveSvg width="28" height="28" />
              </Link>
            )}
          </div>
          {cards.length > 0 ? (
            <div className="grid grid-cols-3 gap-x-5 gap-y-10">
              {cards.slice(0, 3).map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col py-4 items-center">
              <Image
                src={emptyVideSrc}
                alt="비어있는 비디오 이미지"
                width={155}
                height={155}
              />
              <span className="sub-header2 text-gray-400 text-center mt-5 mb-10">
                처음 방문하셨나요?
                <br />
                아직 정리해본 영상이 없어요!
              </span>
              <RoundButton onClick={() => {}} type="lg">
                영상 정리해보기
              </RoundButton>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
