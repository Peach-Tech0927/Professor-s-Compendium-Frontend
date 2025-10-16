import mockData from "@/data/mock-db.json";
import { FacultyData } from "@/app/_component/FacultyCardGrid";
import ProfessorCardGrid from "./_component/professorCardGrid";
import FacultyHeader from "./_component/FacultyHeader";
import Footer from "@/app/_component/Footer";

const FacultyPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
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
    <div className="min-h-screen flex flex-col">
      <FacultyHeader facultyData={facultyData} facultyName={facultyName} />
      <ProfessorCardGrid facultyKey={facultyData.SK} />
      <Footer />
    </div>
  );
};

export default FacultyPage;
