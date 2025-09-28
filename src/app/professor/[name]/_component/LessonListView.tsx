"use client";
import HeadLine from "@/components/HeadLine";
import { BookOpen, ChevronDown, Clapperboard } from "lucide-react";
import LessonCard from "./LessonCard";
import YouTubeVideo from "@/components/YouTubeVideo";
import { useState } from "react";

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
  courseYoutubeUrl?: string;
};

const LessonListView: React.FC<LessonListViewProps> = ({
  lessons,
  courseYoutubeUrl,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleLessons = showAll ? lessons : lessons.slice(0, 3);
  return (
    <div className="mt-10">
      <HeadLine icon={<BookOpen className="w-10 h-10 " />} title="担当授業" />
      <div className="mt-5 space-y-4">
        {visibleLessons.map((lesson) => (
          <LessonCard key={lesson.SK} lesson={lesson} />
        ))}
      </div>
      {lessons.length > 4 && !showAll && (
        <div className="mt-4">
          <div
            onClick={() => setShowAll(true)}
            className="border border-gray-300 rounded-full p-3 lg:mx-50 mx-5 text-center flex items-center justify-center gap-2 cursor-pointer text-gray-400"
          >
            もっと見る
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      )}
      <div className="mt-8">
        <HeadLine
          icon={<Clapperboard className="w-10 h-10 " />}
          title="担当授業紹介動画"
        />
      </div>
      <YouTubeVideo youtubeUrl={courseYoutubeUrl} title="担当授業紹介動画" />
    </div>
  );
};

export default LessonListView;
