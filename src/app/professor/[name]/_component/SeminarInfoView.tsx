import HeadLine from "@/components/HeadLine";
import { FlaskConical } from "lucide-react";
import Image from "next/image";

interface SeminarInfoViewProps {
  seminarName: string;
  description: string;
  descriptionImage: string;
}
const SeminarInfoView= ({ seminarName, description, descriptionImage }: SeminarInfoViewProps) => {
    return (
    <div className="mt-10">
      <HeadLine
        icon={<FlaskConical className="w-10 h-10 " />}
        title={seminarName}
      />
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-5">
        <div className="flex-shrink-0 order-2 lg:order-1">
          {descriptionImage && (
            <div className="lg:ml-50">
              <Image
                src={descriptionImage}
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
            {description || "ゼミ情報がありません"}
          </p>
        </div>
      </div>
    </div>
  );
    }

export default SeminarInfoView;