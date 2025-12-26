
import { getDynamoDBItem,queryDynamoDBItems,getBasicInfo } from "@/lib/dynamodb";
import ClientProfessorPage from "./page.client";
import { ProfessorPersonalData } from "./_component/personal/ProfessorPersonalView";
import { Lesson } from "./_component/lesson/LessonListView";

export const dynamicParams = true;

export default async function ProfessorPage({
  params,
  }: {
    params: Promise<{ name: string }>;
  }) {
    const {name} = await params;
    const professorId = name;
    const s3BaseUrl=process.env.NEXT_PUBLIC_S3_BASE_URL||"";
    const[
      basicInfo,
      metadata,
      seminar,
      profile,
      personal,
      lessons
    ]=await Promise.all([

      getBasicInfo(professorId),
      getDynamoDBItem(professorId,"METADATA"),
      getDynamoDBItem(professorId,"SEMINAR"),
      getDynamoDBItem(professorId,"PROFILE"),
      getDynamoDBItem(professorId,"PERSONAL"),
      queryDynamoDBItems(professorId,"COURSE#")
    ]);
  if (!basicInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">教授が見つかりませんでした</div>
      </div>
    );
  }
  let mainPhotoUrl:string | null = basicInfo?.mainPhoto||null;
  if (mainPhotoUrl && !mainPhotoUrl.startsWith('/') && !mainPhotoUrl.startsWith('http')) {
    mainPhotoUrl = `${s3BaseUrl}/${mainPhotoUrl.replace(/^\//,'')}`;
  }

  return(
    <>
      <ClientProfessorPage
        // basicInfoから
        mainPhotoUrl={mainPhotoUrl || ""}
        faculty={basicInfo?.department || ""} // basicInfoのdepartmentをfacultyとして流用

        // metadataから
        xLink={metadata?.socialLinks?.x || ""}
        facebookLink={metadata?.socialLinks?.facebook || ""}
        professorName={metadata?.professorName || ""}
        professorNameRoma={metadata?.professorNameRoma || ""}
        post={metadata?.post || ""}
        researchField={metadata?.ResearchField || ""}
        courseYoutubeUrl={metadata?.courseYoutubeUrl || null}

        // seminarから
        seminarName={seminar?.seminarName || ""}
        seminarDescription={seminar?.description || ""}
        seminarDescriptionImage={seminar?.descriptionImage || null}
        activityDay={seminar?.activityDay || []}
        keywords={seminar?.keywords || []}
        seminarSchedule={seminar?.annualSchedule || []}
        appealPointText={seminar?.appealPoint?.text || ""}
        appealPointImages={seminar?.appealPoint?.images || []}
        graduateThemes={seminar?.graduateThemes || []}
        seminarYoutubeUrl={seminar?.youtubeUrl || null}

        // profileから
        profileText={profile?.profileText || ""}
        profileImages={profile?.profileImages || []}
        careerHistory={profile?.careerHistory || []}

        // personalから
        personalData={(personal || {}) as ProfessorPersonalData}

        // lessonsから
        lessons={lessons as Lesson[] || []}
        />

      </>
  )
//export default async function ProfessorPage({
//  params,
//}: {
//  params: Promise<{ name: string }>;
//}) {
//  const { name } = await params;
//  const professorId = name;
//}


  // mockdataから教授の基本情報を取得
  //const basicInfo = mockData.find(
  //  (item) =>
  //    item.PK?.startsWith("FACULTY#") && item.SK === `PROF#${professorId}`
  //);

  //メタデータを取得
  //const metadata = mockData.find(
  //  (item) => item.PK === `PROF#${professorId}` && item.SK === "METADATA"
  //);

  //研究会情報を取得
  //const seminar = mockData.find(
  //  (item) => item.PK === `PROF#${professorId}` && item.SK === "SEMINAR"
  //);

  //プロフィール情報を取得
  //const profile = mockData.find(
  //  (item) => item.PK === `PROF#${professorId}` && item.SK === "PROFILE"
  //);

  //パーソナル情報を取得
  //const personal = mockData.find(
  //  (item) => item.PK === `PROF#${professorId}` && item.SK === "PERSONAL"
  //);
  //授業情報を取得
  //const lessons = mockData.filter(
  //  (item) => item.PK === `PROF#${professorId}` && item.SK.startsWith("COURSE#")
  //);

  //if (!basicInfo) {
  //  return (
  //    <div className="flex items-center justify-center min-h-screen">
  //      <div className="text-xl">教授が見つかりませんでした</div>
  //    </div>
  //  );
  //}

  //return (
  //  <>
  //    <ClientProfessorPage
  //      xLink={metadata?.socialLinks?.x || ""}
  //      facebookLink={metadata?.socialLinks?.facebook || ""}
  //      professorName={metadata?.professorName || ""}
  //      professorNameRoma={metadata?.professorNameRoma || ""}
  //      faculty={"文学部"}
  //      seminarName={seminar?.seminarName || ""}
  //      post={metadata?.post || ""}
  //      researchField={metadata?.ResearchField || ""}
  //      mainPhotoUrl={basicInfo?.mainPhoto || ""}
  //      profileText={profile?.profileText || ""}
  //      profileImages={profile?.profileImages || []}
  //      personalData={(personal || {}) as ProfessorPersonalData}
  //      seminarDescription={seminar?.description || ""}
  //      seminarDescriptionImage={seminar?.descriptionImage || ""}
    //    activityDay={seminar?.activityDay || []}
      //  keywords={seminar?.keywords || []}
        //careerHistory={profile?.careerHistory || []}
        //seminarSchedule={seminar?.annualSchedule || []}
        //lessons={lessons as Lesson[]}
//        appealPointText={seminar?.appealPoint?.text || ""}
//        appealPointImages={seminar?.appealPoint?.images || []}
//        graduateThemes={seminar?.graduateThemes || []}
//        courseYoutubeUrl={metadata?.courseYoutubeUrl}
//        seminarYoutubeUrl={seminar?.youtubeUrl}
//      />
//    </>
//  );
}
