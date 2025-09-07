import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Lesson } from "./LessonListView";
import { ExternalLink } from "lucide-react";

type LessonCardProps = {
  lesson: Lesson;
};

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <div className="border border-gray-300 rounded-[24px] p-7 lg:mx-50 mx-5 ">
      <p className="text-lg font-bold mb-2">{lesson.courseName}</p>
      <p className="text-gray-500">{lesson.description}</p>
      <Accordion type="single" collapsible className="w-full py-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">学べること</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="text-gray-500 text-md">{lesson.learningPoints}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md">授業形式</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="text-gray-500 text-md">{lesson.style}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md">関連する資格</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            {lesson.relatedQualification ? (
              <p className="text-gray-500 text-md">
                {lesson.relatedQualification}
              </p>
            ) : (
              <p className="text-gray-500 text-md">関連する資格はありません</p>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex gap-2">
        <p>対象学年:</p>
        {lesson.targetGrade.map((grade) => (
          <Badge
            key={grade}
            className="bg-[#fff7f9] text-[#FF8888] border border-[#FF8888] rounded-full px-4"
          >
            {grade}
          </Badge>
        ))}
      </div>
      <div className="mt-4">
        <a
          href={lesson.syllabusLinkUrl}
          className="text-gray-500 flex items-center gap-2"
        >
          シラバスを見る
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default LessonCard;
