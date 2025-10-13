import mockData from "@/data/mock-db.json";
import { FacultyData } from "@/app/_component/FacultyCardGrid";
import ProfessorCardGrid from "./_component/professorCardGrid";
import ClientFacultyPage from "./FacutlyHeader";

const FacultyPage = async ({ params }: { params: { name: string } }) => {
  const { name } = await params;
  const facultyName = decodeURIComponent(name);
  
  const facultyData = mockData
    .filter(
      (item: {
        PK: string;
        facultyName?: string;
        facultyDescription?: string;
      }) =>
        item.PK === "FACULTIES" && item.facultyName && item.facultyDescription
    )
    .find((item) => item.facultyName === facultyName) as FacultyData;

  return (
    <>
      <ClientFacultyPage facultyData={facultyData} facultyName={facultyName} />
      <ProfessorCardGrid facultyKey={facultyData.SK} />
    </>
  );
};

export default FacultyPage;
