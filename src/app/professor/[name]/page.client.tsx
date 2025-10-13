"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProfessorProfileCard from "./_component/personal/ProfessorProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileView from "./_component/profile/ProfileView";
import ProfessorPersonalView, {
  ProfessorPersonalData,
} from "./_component/personal/ProfessorPersonalView";
import LessonListView, { Lesson } from "./_component/lesson/LessonListView";
import SeminarInfoView from "./_component/seminar/SeminarInfoView";

type ClientProfessorPageProps = {
  xLink: string;
  facebookLink: string;
  professorName: string;
  professorNameRoma: string;
  faculty: string;
  seminarName: string;
  post: string;
  researchField: string;
  mainPhotoUrl: string;
  profileText: string;
  profileImages: string[];
  personalData: ProfessorPersonalData;
  seminarDescription: string;
  seminarDescriptionImage: string;
  activityDay: string[];
  careerHistory: {
    year: string;
    event: string;
    photo: string | null;
  }[];
  seminarSchedule: {
    period: string;
    task: string;
  }[];
  lessons: Lesson[];
  appealPointText: string;
  appealPointImages: string[];
  graduateThemes: string[];
  keywords: string[];
  courseYoutubeUrl?: string;
  seminarYoutubeUrl?: string;
};

const ClientProfessorPage: React.FC<ClientProfessorPageProps> = ({
  xLink,
  facebookLink,
  professorName,
  professorNameRoma,
  faculty,
  seminarName,
  post,
  researchField,
  mainPhotoUrl,
  profileText,
  profileImages,
  personalData,
  seminarDescription,
  seminarDescriptionImage,
  activityDay,
  careerHistory,
  seminarSchedule,
  lessons,
  appealPointText,
  appealPointImages,
  graduateThemes,
  keywords,
  courseYoutubeUrl,
  seminarYoutubeUrl,
}) => {
  type TabKey = "profile" | "course" | "seminor-info" | "personal";
  const [selectedTab, setSelectedTab] = useState<TabKey>("profile");

  const tabPositions: Record<TabKey, string> = {
    profile: "20%",
    course: "40%",
    "seminor-info": "60%",
    personal: "80%",
  };

  return (
    <>
      <ProfessorProfileCard
        xLink={xLink}
        facebookLink={facebookLink}
        professorName={professorName}
        professorNameRoma={professorNameRoma}
        faculty={faculty}
        seminarName={seminarName}
        post={post}
        researchField={researchField}
        mainPhotoUrl={mainPhotoUrl}
      />

      <div className="flex flex-col justify-center items-center relative w-full">
        <div className="relative w-[400px] h-15 flex justify-center items-end">
          <div
            className="absolute transition-all duration-300 ease-in-out"
            style={{
              left: tabPositions[selectedTab],
              transform: "translateX(-50%)",
            }}
          >
            <Image
              src="/KariPeachKun.png"
              alt="ピーチくん"
              width={48}
              height={48}
              className="h-12"
            />
          </div>
        </div>

        <Tabs
          value={selectedTab}
          onValueChange={(value) => setSelectedTab(value as TabKey)}
          className="display flex justify-center items-center w-full"
        >
          <TabsList className="grid grid-cols-4 h-10 rounded-sm">
            <TabsTrigger value="profile" className="flex-1 rounded-sm">
              プロフィール
            </TabsTrigger>
            <TabsTrigger value="course" className="flex-1 rounded-sm">
              担当授業
            </TabsTrigger>
            <TabsTrigger value="seminor-info" className="flex-1 rounded-sm">
              ゼミ情報
            </TabsTrigger>
            <TabsTrigger value="personal" className="flex-1 rounded-sm">
              パーソナル
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="w-full mb-10">
            <ProfileView
              profileText={profileText}
              profileImages={profileImages}
              careerHistory={careerHistory}
            />
          </TabsContent>
          <TabsContent value="course" className="w-full mb-10">
            <LessonListView
              lessons={lessons}
              courseYoutubeUrl={courseYoutubeUrl}
            />
          </TabsContent>
          <TabsContent value="seminor-info" className="w-full">
            <SeminarInfoView
              seminarName={seminarName}
              seminarDescription={seminarDescription}
              seminarDescriptionImage={seminarDescriptionImage}
              seminarSchedule={seminarSchedule}
              activityDay={activityDay}
              appealPointText={appealPointText}
              appealPointImages={appealPointImages}
              graduateThemes={graduateThemes}
              keywords={keywords}
              youtubeUrl={seminarYoutubeUrl}
            />
          </TabsContent>
          <TabsContent value="personal" className="w-full">
            <ProfessorPersonalView
              personalData={personalData}
              professorName={professorName}
              post={post}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ClientProfessorPage;
