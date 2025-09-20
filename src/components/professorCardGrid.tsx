import ProfessorCard from "@/components/professorCard";
import mockData from "@/data/mock-db.json";
import Link from "next/link";

type ProfessorData = {
  PK: string;
  SK: string;
  professorName: string;
  yomigana: string;
  department: string;
  mainPhoto: string;
  hoverPhoto: string;
  researchTheme: string;
  officeLocation: string;
};

type ProfessorCardGridProps = {
  facultyKey?: string;
};

export default function ProfessorCardGrid({
  facultyKey,
}: ProfessorCardGridProps) {
  const professorData = mockData.filter(
    (item: { PK: string; SK: string }) =>
      item.PK.startsWith("FACULTY#") &&
      item.SK.startsWith("PROF#") &&
      (!facultyKey || item.PK === facultyKey)
  ) as ProfessorData[];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {professorData.map((professor) => (
          //TODO: 教授のデータが入ったらhrefを{`/professor/${professor.SK.replace(/^PROF#/, "")}`}に変更する
          <Link href={"/professor/TANAKA"} key={professor.SK}>
            <ProfessorCard
              professorName={professor.professorName}
              professorNameRoma={professor.yomigana}
              department={professor.department}
              researchTheme={professor.researchTheme}
              officeLocation={professor.officeLocation}
              mainPhoto={professor.mainPhoto}
              hoverPhoto={professor.hoverPhoto}
            />
          </Link>

        ))}
      </div>
    </div>
  );
}
