"use client";

import VideoSvg from "@/assets/icons/video.svg";
import WarningSvg from "@/assets/icons/warning.svg";
import NoRefreshSvg from "@/assets/icons/no-refresh.svg";
import convertExampleSrc from "@/assets/convert-example.png";
import SquareButton from "@/components/common/button/square-button";
import { useRef, useState } from "react";
import Modal from "../common/modal";
import Link from "next/link";
import Image from "next/image";
import Chip from "../common/chip";

const YoutubeInput = () => {
  const [video, setVideo] = useState({
    url: "",
    isConverting: false,
    isModalOpen: false,
  });
  const recommendRef = useRef<HTMLDivElement | null>(null);

  const invalidUrl =
    video.url.length > 0 &&
    (video.url.trim() === "" ||
      (!video.url.startsWith("https://youtu.be/") &&
        !video.url.startsWith("https://youtube.com/watch?")));
  const convertDisabled =
    video.isConverting || invalidUrl || video.url.length === 0;

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideo({ ...video, url: e.target.value });
  };

  const onStartConvert = () => {
    setVideo((prev) => ({ ...prev, isConverting: true, isModalOpen: true }));
    const timer = setTimeout(() => {
      if (recommendRef.current) {
        recommendRef.current.style.transition = "height 1s";
        recommendRef.current.style.height = "280px";
      }
      clearTimeout(timer);
    }, 1000);
  };

  const onCloseModal = () => {
    setVideo((prev) => ({ ...prev, isModalOpen: false }));
  };

  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="header3 text-white">어떤 영상을 정리해볼까요?</h1>
        <h2
          className={`body1 ${invalidUrl ? "text-red flex gap-3 items-center" : "text-gray-300"} `}
        >
          {invalidUrl ? (
            <>
              <WarningSvg />
              <span>YouTube 영상의 링크만 변환이 가능해요!</span>
            </>
          ) : (
            "영상에서 글로 변환하고 싶은 YouTube 영상의 링크를 붙여넣어주세요"
          )}
        </h2>
      </div>
      <div>
        <div className="flex py-4 items-center px-5 rounded-lg gap-5 bg-white">
          <VideoSvg width="36" height="36" />
          <input
            value={video.url}
            onChange={onChangeUrl}
            className="flex-1"
            readOnly={video.isConverting}
            placeholder="https://youtu.be/..."
          />
          <SquareButton disabled={convertDisabled} onClick={onStartConvert}>
            {video.isConverting ? "start" : "변환하기"}
          </SquareButton>
        </div>
        {video.isConverting && (
          <>
            <div className="flex items-center gap-3 mt-5 peer">
              <div className="h-3 flex-1 bg-[#150F10] rounded-full relative">
                <div className="h-full w-1/2 z-1 bg-green-600 absolute rounded-full" />
              </div>
              <span className="text-green-400 w-max body2">변환중</span>
            </div>
            <span className="hidden justify-end mt-1 body2 text-green-400 peer-hover:flex">
              80%
            </span>
          </>
        )}
      </div>
      {video.isModalOpen && (
        <Modal withBg onClose={onCloseModal}>
          <div className="flex flex-col items-center gap-3">
            <NoRefreshSvg />
            <h3 className="header6">잠깐! 새로고침은 안돼요!</h3>
            <span className="body1 text-red">
              새로고침 시 영상변환이 초기화 되니 유의해주세요
            </span>
          </div>
          <div
            ref={recommendRef}
            className="bg-gray-100 flex flex-col justify-center items-center gap-6 h-0 overflow-hidden relative top-10 rounded-b-[20px]"
          >
            <h3 className="sub-header1 text-gray-400">
              기다리는 동안 이런 영상은 어때요?
            </h3>
            <Link
              href="/"
              className="flex bg-white rounded-2xl overflow-hidden"
            >
              <Image
                src={convertExampleSrc}
                alt="추천 영상 이미지"
                width={290}
                height={164}
              />
              <div className="flex flex-col justify-between py-6 px-5 w-[290px]">
                <span className="sub-header3">우리는 카카오워크로 일해요</span>
                <Chip name="elwkdls" />
              </div>
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
};

export default YoutubeInput;
