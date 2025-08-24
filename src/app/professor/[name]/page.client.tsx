"use client";
import ProfessorProfileCard from "./_component/ProfessorProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileView from "./_component/ProfileView";

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
            />
          </TabsContent>
          <TabsContent value="course" className="w-full">
            ここは担当授業画面です
          </TabsContent>
          <TabsContent value="seminor-info" className="w-full">
            ここはゼミ情報です
          </TabsContent>
          <TabsContent value="personal" className="w-full">
            ここはパーソナル情報です
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ClientProfessorPage;
