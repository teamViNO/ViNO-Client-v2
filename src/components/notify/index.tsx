import TooltipSvg from "@/assets/icons/tooltip.svg";
import NotifyItem from "./NotifyItem";
import { NotifyItemProps } from "@/types/notify";
import useOutsideClick from "@/hooks/useOutsideClick";

interface NotifyProps {
  data: NotifyItemProps[];
  onCloseNotify: () => void;
}

const Notify = ({ data, onCloseNotify }: NotifyProps) => {
  const [notifyRef] = useOutsideClick<HTMLDivElement>(onCloseNotify);
  return (
    <div className="absolute w-full flex flex-col items-center" ref={notifyRef}>
      <TooltipSvg />
      <div className="py-9 px-7 flex flex-col rounded-lg w-[360px] max-h-[584px] overflow-auto relative right-[120px] shadow-lg gap-9">
        <div className="flex justify-between items-center">
          <span className="sub-header3">읽지 않은 알림</span>
          <span className="rounded-lg bg-green-400 w-[26px] h-[26px] flex items-center justify-center">
            3
          </span>
        </div>
        <div className="flex flex-col gap-7">
          {data.length === 0 ? (
            <span className="body3 text-gray-300 text-center py-16">
              알람이 없어요!
            </span>
          ) : (
            data.map((item, idx) => (
              <NotifyItem isLast={idx === data.length - 1} {...item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notify;
