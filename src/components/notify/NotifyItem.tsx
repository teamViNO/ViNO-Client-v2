import Image from "next/image";
import EmptyFileSrc from "@/assets/empty-file.png";
import CheckSvg from "@/assets/icons/check.svg";
import { NotifyItemProps } from "@/types/notify";

interface NotifyItem extends NotifyItemProps {
  isLast: boolean;
}

const NotifyItem = ({ isLast }: NotifyItem) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="caption1 text-gray-400">영상 변환</span>
          <div className="w-px h-2.5 bg-gray-300" />
          <span className="caption2 text-gray-300">10분 전</span>
        </div>
        <button className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">
          <CheckSvg width="16" height="16" fill="#BBBBBB" />
        </button>
      </div>
      <div
        className={`border-gray-200 flex items-center gap-4 ${!isLast && "pb-7 border-b"} `}
      >
        <Image src={EmptyFileSrc} alt="영상 변환" width={56} height={56} />
        <div>
          <span className="sub-header3">열심히 영상을 변환하는 중이에요!</span>
          <br />
          <span className="body1 text-gray-400">
            잠시후 멋진 글을 만날 수 있어요:)
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotifyItem;
