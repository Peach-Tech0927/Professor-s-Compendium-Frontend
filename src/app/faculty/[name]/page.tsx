import { queryByPK } from "@/lib/dynamodb";
//import mockData from "@/data/mock-db.json";
import { FacultyData } from "@/app/_component/FacultyCardGrid";
import ProfessorCardGrid from "./_component/professorCardGrid";
import FacultyHeader from "./_component/FacultyHeader";
import Footer from "@/app/_component/Footer";
import { notFound } from "next/navigation";

export const dynamicParams = true;

const FacultyPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
  const facultyName = decodeURIComponent(name);

  const allFaculties = await queryByPK("FACULTIES");

  const facultyData = allFaculties?.find(
    (item) => item.facultyName === facultyName
  ) as FacultyData| undefined;

  if (!facultyData) {
    notFound();
  }

//  const facultyData = mockData
//    .filter(
//      (item: {
//        PK: string;
//        facultyName?: string;
//        facultyDescription?: string;
//      }) =>
//        item.PK === "FACULTIES" && item.facultyName && item.facultyDescription
//    )
//    .find((item) => item.facultyName === facultyName) as FacultyData;

  return (
    <div className="min-h-screen flex flex-col">
      <FacultyHeader facultyData={facultyData} facultyName={facultyName} />
      <ProfessorCardGrid facultyKey={facultyData.SK} />
      <Footer />
    </div>
  );
};

export default FacultyPage;
