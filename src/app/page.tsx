"use client";

import YoutubeInput from "@/components/home/YoutubeInput";
import MoveSvg from "@/assets/icons/move.svg";
import exampleSrc from "@/assets/convert-example.png";
import emptyVideSrc from "@/assets/empty-video.png";
import SuccessSrc from "@/assets/success.png";
import ArrowDownSvg from "@/assets/icons/arrow-down.svg";
import OpenFileSvg from "@/assets/icons/open-file.svg";
import Card from "@/components/common/card";
import Image from "next/image";
import RoundButton from "@/components/common/button/round-button";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

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

const categories = [
  {
    id: 1,
    name: "개발",
    subs: [
      { id: 2, name: "프론트엔드" },
      { id: 3, name: "백엔드" },
      { id: 4, name: "데이터베이스" },
    ],
  },
  {
    id: 5,
    name: "디자인",
    subs: [
      { id: 6, name: "UI/UX" },
      { id: 7, name: "그래픽 디자인" },
      { id: 8, name: "제품 디자인" },
    ],
  },
  { id: 9, name: "여행", subs: [] },
];

export default function Home() {
  const [ctgState, setCtgState] = useState({
    id: 1,
    name: "개발",
    topCtgId: -1,
    startSelect: false,
  });
  const [endReached, setEndReached] = useState(false);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const isLogin = true;

  const handleOpenCategory = (id: number) => {
    if (ctgState.topCtgId === id)
      return setCtgState((prev) => ({ ...prev, topCtgId: -1 }));
    setCtgState((prev) => ({ ...prev, topCtgId: id }));
  };

  const handleSelectCategory = (props: { id: number; name: string }) => {
    setCtgState((prev) => ({ ...prev, ...props, topCtgId: -1 }));
  };

  const onStartSelect = () => {
    setCtgState((prev) => ({ ...prev, startSelect: !prev.startSelect }));
  };

  const onMouseLeave = () => {
    setCtgState((prev) => ({ ...prev, startSelect: false }));
  };

  useEffect(() => {
    let hasIntersected = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasIntersected) {
          hasIntersected = true;
          setEndReached(true);
          const timer = setTimeout(() => {
            setEndReached(false);
            clearTimeout(timer);
          }, 2000);
        }
      },
      { threshold: 1 }
    );
    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }
    return () => {
      if (lastElementRef.current) {
        observer.unobserve(lastElementRef.current);
      }
    };
  }, []);

  return (
    <main>
      <section className="dark-section flex flex-col gap-10 pt-[120px] pb-[180px] px-[266px] bg-gray-500">
        <YoutubeInput />
      </section>
      <section
        className={`bg-white rounded-t-[60px] relative bottom-[60px] py-[100px] flex items-center gap-40 ${isLogin ? "flex-col-reverse" : "flex-col"}`}
      >
        <div ref={lastElementRef} className="flex flex-col gap-10">
          <div className="flex flex-col gap-2.5">
            <h3 className="header5">이런 인사이트는 어때요?</h3>
            <h4 className="sub-header2 text-gray-400">
              최근 사용자들이 많이 찾은 콘텐츠들을 소개해드려요
            </h4>
          </div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-10">
            {cards.map((card) => (
              <Card key={card.id} {...card} onMouseLeave={onMouseLeave}>
                <div className="bg-white absolute -bottom-10 group-hover:bottom-2.5 w-full transition-all">
                  <div className="flex px-5 gap-2 items-center">
                    <div className="flex flex-1 flex-col relative">
                      <button
                        onClick={onStartSelect}
                        className="body3 text-gray-400 flex items-center justify-between border border-gray-200 flex-1 px-4 rounded-lg py-2"
                      >
                        {ctgState.name}
                        <ArrowDownSvg width="18" height="18" />
                      </button>
                      <div className="flex flex-col w-full absolute top-11 z-10 bg-white rounded-xl shadow-lg">
                        {ctgState.startSelect &&
                          categories.map((category) => (
                            <Fragment key={category.id}>
                              <div className="flex flex-1 items-center gap-2 truncate px-5 py-3 text-sm text-gray-400 font-bold">
                                <button
                                  onClick={() =>
                                    handleOpenCategory(category.id)
                                  }
                                  className={`transition-all ${ctgState.topCtgId === category.id && "rotate-180"}`}
                                >
                                  <ArrowDownSvg width="18" height="18" />
                                </button>
                                <button
                                  onClick={() =>
                                    handleSelectCategory({
                                      id: category.id,
                                      name: category.name,
                                    })
                                  }
                                >
                                  {category.name}
                                </button>
                              </div>
                              {ctgState.topCtgId === category.id &&
                                category.subs.map((sub) => (
                                  <button
                                    key={sub.id}
                                    onClick={() => handleSelectCategory(sub)}
                                    className="pl-11 text-start body3 text-gray-400 py-3"
                                  >
                                    {sub.name}
                                  </button>
                                ))}
                            </Fragment>
                          ))}
                      </div>
                    </div>
                    <button className="rounded-lg bg-green-400 p-1 h-max">
                      <OpenFileSvg width="28" height="28" />
                    </button>
                  </div>
                </div>
              </Card>
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
      {endReached && (
        <section className="flex flex-col gap-5 items-center text-center pb-[160px]">
          <Image
            src={SuccessSrc}
            alt="마지막 영상 알림 아이콘"
            width={88}
            height={88}
          />
          <h3 className="sub-header2 text-gray-400">
            마지막 영상이에요!
            <br />더 많은 영상 변환하러 가볼까요?
          </h3>
        </section>
      )}
    </main>
  );
}
