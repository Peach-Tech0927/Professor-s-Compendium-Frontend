import HeadLine from "@/components/HeadLine";
import { FlaskConical } from "lucide-react";
import Image from "next/image";

interface SeminarInfoViewProps {
  seminarName: string;
  seminarDescription: string;
  seminarDescriptionImage: string;
}
const SeminarInfoView= ({ seminarName, seminarDescription, seminarDescriptionImage }: SeminarInfoViewProps) => {
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

      <div className="flex mx-4 lg:mx-50 gap-2 items-center mt-10">
        <h1 className="text-lg lg:text-2xl font-bold">研究の流れ</h1>
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

    </div>
  );
    }

export default SeminarInfoView;