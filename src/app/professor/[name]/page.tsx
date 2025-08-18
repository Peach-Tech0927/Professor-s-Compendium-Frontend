import mockData from "@/data/mock-db.json";
import ClientProfessorPage from "./page.client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default async function ProfessorPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const professorId = name;

  // mockdataから教授の基本情報を取得
  const basicInfo = mockData.find(
    (item) =>
      item.PK?.startsWith("FACULTY#") && item.SK === `PROF#${professorId}`
  );

  // メタデータを取得
  const metadata = mockData.find(
    (item) => item.PK === `PROF#${professorId}` && item.SK === "METADATA"
  );

  // 研究会情報を取得
  const seminar = mockData.find(
    (item) => item.PK === `PROF#${professorId}` && item.SK === "SEMINAR"
  );

  if (!basicInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">教授が見つかりませんでした</div>
      </div>
    );
  }

  return (
    <>
    <ClientProfessorPage
      xLink={metadata?.socialLinks?.x || ""}
      facebookLink={metadata?.socialLinks?.facebook || ""}
      professorName={metadata?.professorName || ""}
      professorNameRoma={metadata?.professorNameRoma || ""}
      faculty={"文学部"}
      seminarName={seminar?.seminarName || ""}
      post={metadata?.post || ""}
      researchField={metadata?.ResearchField || ""}
      mainPhotoUrl={basicInfo?.mainPhoto || ""}
    />
    <div className="flex justify-center items-center">
        <Tabs defaultValue="account" className="display flex justify-center items-center">
            <TabsList>
                <TabsTrigger value="profile" className="px-4">プロフィール</TabsTrigger>
                <TabsTrigger value="course" className="px-4">担当授業</TabsTrigger>
                <TabsTrigger value="seminor-info" className="px-4">ゼミ情報</TabsTrigger>
                <TabsTrigger value="personal" className="px-4">パーソナル</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">ここはプロフィール画面です</TabsContent>
            <TabsContent value="course">ここは担当授業画面です</TabsContent>
            <TabsContent value="seminor-info">ここはゼミ情報です</TabsContent>
            <TabsContent value="personal">ここはパーソナル情報です</TabsContent>
        </Tabs>
    </div>
    </>
  );
}
