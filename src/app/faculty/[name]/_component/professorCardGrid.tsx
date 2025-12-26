import { queryByPK } from "@/lib/dynamodb";

// import mockData from "@/data/mock-db.json";
import Link from "next/link";
import ProfessorCard from "./professorCard";

type ProfessorCardGridProps = {
  facultyKey: string;
};

export default async function ProfessorCardGrid({
  facultyKey,
}: ProfessorCardGridProps) {
  const rawData = await queryByPK(facultyKey);

  const professorData = (rawData||[]).filter(
    (item:any) => item.SK.startsWith("PROF#")
  );


  const s3BaseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL || "";

  if(professorData.length===0){
    return (
      <div className="container mx-auto px-4 py-8">
        <p>教授情報が見つかりませんでした。</p>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {professorData.map((professor:any) => {
          let mainPhotoUrl = professor.mainPhoto;
          if (mainPhotoUrl && !mainPhotoUrl.startsWith("http")) {
            // 先頭のスラッシュを削除して結合
            mainPhotoUrl = `${s3BaseUrl}/${mainPhotoUrl.replace(/^\//, "")}`;
          }
          let hoverPhotoUrl = professor.hoverPhoto;
          if (hoverPhotoUrl && !hoverPhotoUrl.startsWith("http")) {
            hoverPhotoUrl = `${s3BaseUrl}/${hoverPhotoUrl.replace(/^\//, "")}`;
          }
          //TODO: 教授のデータが入ったらhrefを{`/professor/${professor.SK.replace(/^PROF#/, "")}`}に変更する
          return(
          <Link 
            key={professor.SK}
            href={`/professor/${professor.SK.replace("PROF#", "")}`}
          >
            <ProfessorCard
              professorName={professor.professorName}
              professorNameRoma={professor.yomigana}
              department={professor.department}
              researchTheme={professor.researchTheme}
              officeLocation={professor.officeLocation}
              mainPhoto={professor.mainPhotoUrl}
              hoverPhoto={professor.hoverPhotoUrl}
            />
          </Link>
          )
        })}
      </div>
    </div>
  );
}
