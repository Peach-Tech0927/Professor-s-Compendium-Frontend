import HeadLine from "@/app/professor/[name]/_component/HeadLine";
import { FlaskConical } from "lucide-react";
import { Clapperboard } from 'lucide-react';
import Image from "next/image";
import { SeminarSchedule } from "../_component/SeminarSchedule";
import SeminarAppealPoint from "./SeminarAppealPoint";
import { Badge } from "@/components/ui/badge";
import YouTubeVideo from "@/app/professor/[name]/_component/YouTubeVideo";

interface SeminarInfoViewProps {
  seminarName: string;
  seminarDescription: string;
  seminarDescriptionImage: string;
  seminarSchedule: {
    period: string;
    task: string;
  }[];
  activityDay: string[];
  appealPointText: string;
  appealPointImages: string[];
  keywords: string[];
  graduateThemes:string[];
  youtubeUrl?: string;
}

const SeminarInfoView = ({
  seminarName,
  seminarDescription,
  seminarDescriptionImage,
  seminarSchedule,
  activityDay,
  appealPointText,
  appealPointImages,
  keywords,
  graduateThemes,
  youtubeUrl,
}: SeminarInfoViewProps) => {
  return (
    <div className="mt-10">
      <HeadLine
        icon={<FlaskConical className="w-10 h-10 " />}
        title={seminarName}
      />
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-5">
        <div className="flex-shrink-0 order-2 lg:order-1">
          {seminarDescriptionImage && (
            <div className="lg:ml-50">
              <Image
                src={seminarDescriptionImage}
                alt="seminar"
                width={500}
                height={400}
                className="object-cover w-full max-w-[300px] lg:max-w-[500px] h-[240px] mx-auto lg:mx-0"
              />
            </div>
          )}
        </div>
        <div className="flex-1 lg:pr-50 space-y-4 order-1 lg:order-2 px-6 lg:px-0">
          <p className="leading-loose">
            {seminarDescription || "ゼミ情報がありません"}
          </p>
        </div>
      </div>
      <div className="flex mx-4 lg:mx-50 gap-2 items-center mt-30">
        <h1 className="text-lg lg:text-2xl font-bold mb-5">
          このゼミのアピールポイント
        </h1>
      </div>
      <div className="mx-4 lg:mx-50">
        <SeminarAppealPoint
          appealPointText={appealPointText}
          appealPointImages={appealPointImages}
        />
      </div>
      <div className="flex mx-4 lg:mx-50 gap-2 items-center mt-10">
        <h1 className="text-lg lg:text-2xl font-bold">研究の進め方</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-5">
        <div className="flex-shrink-0 order-2 lg:order-2">
          <div className="lg:pr-50">
            <Image
              src="/ProfileExample.png"
              alt="researchProcessImage"
              width={500}
              height={400}
              className="object-cover w-full max-w-[300px] lg:max-w-[500px] h-[240px] mx-auto"
            />
          </div>
        </div>
        <div className="flex-1 lg:ml-50 space-y-4 order-1 lg:order-1 px-6 lg:px-0  lg:mx-0">
          <p>
            このゼミでは、平安時代の文学であればどの作品を研究しても構いません。「落窪物語」「伊勢物語」「竹取物語」「枕草子」「とりかへばや物語」など、多様な作品が研究対象となっています。国宝の「源氏物語絵巻」や漫画「あさきゆめみし」など、「源氏物語」の絵画化作品を取り上げる人もいます。とはいえ、人気があるのはやはり「源氏物語」。或る登場人物--例えば紫の上に焦点を当てたり、或る場面--例えば光源氏と紫の上が出会う場面を丁寧に読み解いたり、或る物--例えば牛車に注目して作品を分析したり、といったように研究テーマは多様です。
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex mx-4 lg:mx-50 gap-2 items-center">
          <p className="text-lg lg:text-2xl font-bold">年間スケジュール</p>
        </div>
        <div className="mt-30">
          <SeminarSchedule seminarSchedule={seminarSchedule} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-5 ml-5">
        <div className="max-w-[300px] lg:max-w-[500px] lg:mx-auto lg:mb-0">
          <h2 className="text-xl font-bold mb-2">活動曜日・頻度</h2>
          {activityDay && activityDay.length > 0 ? (
            activityDay.map((day, index) => {
              // 曜日とそれ以外の情報（今は時限）を分ける
              const parts = day.split(" ");
              const dayOfWeek = parts[0] || "";
              const period = parts[1] || "";

              return (
                <div key={index} className="flex items-center mb-1 text-lg">
                  <span className="mr-2">・</span>
                  <span className="font-bold">{dayOfWeek}</span>
                  <span className="ml-4">{period}</span>
                </div>
              );
            })
          ) : (
            <p>活動日の情報がありません</p>
          )}
        </div>
        <div className="max-w-[300px] lg:max-w-[500px] lg:mx-auto lg:mb-0">
          <h2 className="text-xl font-bold mb-2">特徴・キーワード</h2>
          {keywords.map((keyword) => (
            <Badge
              key={keyword}
              className="flex flex-col bg-[#fff7f9] text-[#FF8888] border border-[#FF8888] rounded-full px-4 mb-2 text-sm"
            >
              # {keyword}
            </Badge>
          ))}
        </div>
        <div className="max-w-[300px] lg:max-w-[500px] lg:mx-auto lg:mb-0">
          <h2 className="text-xl font-bold mb-2">卒業生の研究テーマ</h2>
          {graduateThemes && graduateThemes.length > 0 ? (
            graduateThemes.map((theme, index) => {
              return (
                <div key={index} className="flex items-center mb-1 text-lg">
                  <span className="mr-2">・</span>
                  <span className="ml-4">{theme}</span>
                </div>
              );
            })
          ) : (
            <p>卒業生の研究テーマの情報がありません</p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <HeadLine
          icon={<Clapperboard className="w-10 h-10 " />}
          title={seminarName + "紹介動画"}
        />
      </div>
      <div className="mb-10">
        <YouTubeVideo youtubeUrl={youtubeUrl} title="ゼミ紹介動画" />
      </div>
    </div>
  );
};

export default SeminarInfoView;