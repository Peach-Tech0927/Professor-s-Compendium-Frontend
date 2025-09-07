import mockData from "@/data/mock-db.json";
import ClientProfessorPage from "./page.client";
import { ProfessorPersonalData } from "./_component/ProfessorPersonalView";
import { Lesson } from "./_component/LessonListView";

export default async function ProfessorPage({
  params,
}: {
  params: { name: string };
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

  // プロフィール情報を取得
  const profile = mockData.find(
    (item) => item.PK === `PROF#${professorId}` && item.SK === "PROFILE"
  );

  //パーソナル情報を取得
  const personal = mockData.find(
    (item) => item.PK === `PROF#${professorId}` && item.SK === "PERSONAL"
  );
  // 授業情報を取得
  const rawLessons = mockData.filter(
    (item) => item.PK === `PROF#${professorId}` && item.SK.startsWith("COURSE#")
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
        profileText={profile?.profileText || ""}
        profileImages={profile?.profileImages || []}
        personalData={(personal || {}) as ProfessorPersonalData}
        seminarDescription={seminar?.description || ""}
        seminarDescriptionImage={seminar?.descriptionImage || ""}
        careerHistory={profile?.careerHistory || []}
        lessons={rawLessons as Lesson[]}
      />
    </>
  );
}
