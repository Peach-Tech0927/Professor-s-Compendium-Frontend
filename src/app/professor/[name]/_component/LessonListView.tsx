import HeadLine from "@/components/HeadLine";
import { BookOpen } from "lucide-react";
import LessonCard from "./LessonCard";

const LessonListView = () => {
  return (
    <div className="mt-10">
      <HeadLine icon={<BookOpen className="w-10 h-10 " />} title="担当授業" />
      <div className="mt-5 space-y-4">
        <LessonCard />
        <LessonCard />
        <LessonCard />
      </div>
    </div>
  );
};

export default LessonListView;
