import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const LessonCard = () => {
  return (
    <div className="border border-gray-300 rounded-[24px] p-7 lg:mx-50 ">
      <p className="text-lg font-bold mb-2">憲法 I</p>
      <p className="text-gray-500">
        日本国憲法の基本原理と運用について学びます。到達目標は基本的人権論の意義と内容を知り、基礎知識を正確に踏まえて論述できるようになることです。
      </p>
      <Accordion type="single" collapsible className="w-full py-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">学べること</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="text-gray-500 text-md">
              日本国憲法の基本原理と運用について学びます。到達目標は基本的人権論の意義と内容を知り、基礎知識を正確に踏まえて論述できるようになることです。
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md">授業形式</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="text-gray-500 text-md">
              日本国憲法の基本原理と運用について学びます。到達目標は基本的人権論の意義と内容を知り、基礎知識を正確に踏まえて論述できるようになることです。
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md">関連する資格</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="text-gray-500 text-md">
              日本国憲法の基本原理と運用について学びます。到達目標は基本的人権論の意義と内容を知り、基礎知識を正確に踏まえて論述できるようになることです。
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex gap-2">
        <p>対象学年:</p>
        <Badge className="bg-[#fff7f9] text-[#FF8888] border border-[#FF8888] rounded-full px-4">
          1年生
        </Badge>
        <Badge className="bg-[#fff7f9] text-[#FF8888] border border-[#FF8888] rounded-full px-4">
          2年生
        </Badge>
      </div>
    </div>
  );
};

export default LessonCard;
