"use client";
import ProfessorProfileCard from "./_component/ProfessorProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/professor/[name]/_component/tabs";
import ProfileView from "./_component/ProfileView";
import ProfessorPersonalView, {
  ProfessorPersonalData,
} from "./_component/ProfessorPersonalView";
import SeminarInfoView from "./_component/SeminarInfoView";
import LessonListView, { Lesson } from "./_component/LessonListView";

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
      <div className="flex justify-center items-center">
        <Tabs
          defaultValue="profile"
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
          <TabsContent value="profile" className="w-full">
            <ProfileView
              profileText={profileText}
              profileImages={profileImages}
              careerHistory={careerHistory}
            />
          </TabsContent>
          <TabsContent value="course" className="w-full">
            <LessonListView lessons={lessons} courseYoutubeUrl={courseYoutubeUrl} />
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
            <ProfessorPersonalView personalData={personalData}
                                   professorName={professorName}
                                   post={post} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ClientProfessorPage;
