import HeadLine from "@/components/HeadLine";
import { BookOpen } from "lucide-react";
import { Clapperboard } from 'lucide-react';
import LessonCard from "./LessonCard";

export type Lesson = {
  PK: string;
  SK: string;
  courseName: string;
  description: string;
  learningPoints: string;
  style: string;
  relatedQualification: string | null;
  targetGrade: string[];
  courseCode: string;
  syllabusLinkUrl: string;
};

type LessonListViewProps = {
  lessons: Lesson[];
};

const LessonListView: React.FC<LessonListViewProps> = ({ lessons }) => {
  return (
    <div className="mt-10">
      <HeadLine icon={<BookOpen className="w-10 h-10 " />} title="担当授業" />
      <div className="mt-5 space-y-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.SK} lesson={lesson} />
        ))}
      </div>
      <HeadLine icon={<Clapperboard className="w-10 h-10 " />} title="担当授業紹介動画" />
    </div>
  );
};

export default LessonListView;
