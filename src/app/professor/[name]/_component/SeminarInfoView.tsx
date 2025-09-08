import HeadLine from "@/components/HeadLine";
import { FlaskConical } from "lucide-react";
import Image from "next/image";

interface SeminarInfoViewProps {
  seminarName: string;
  seminarDescription: string;
  seminarDescriptionImage: string;
  activityDay: string[];
}
const SeminarInfoView = ({
  seminarName,
  seminarDescription,
  seminarDescriptionImage,
  activityDay,
}: SeminarInfoViewProps) => {
  return (
    <div className="mt-10">
      <HeadLine
        icon={<FlaskConical className="w-10 h-10 "/>}
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
      <div className="lg:ml-50 mt-10 px-6 lg:px-0">
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
    </div>
  );
};

export default SeminarInfoView;