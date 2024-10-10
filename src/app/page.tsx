import YoutubeInput from "@/components/home/YoutubeInput";
import exampleSrc from "@/assets/convert-example.png";
import Card from "@/components/common/card";

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
  return (
    <main>
      <YoutubeInput />
      <section className="bg-white rounded-t-[60px] relative bottom-[60px] py-[100px] flex flex-col items-center gap-10">
        <div className="flex flex-col gap-2.5 w-[910px]">
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
      </section>
    </main>
  );
}
