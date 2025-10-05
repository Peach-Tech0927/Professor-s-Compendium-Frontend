import mockData from "@/data/mock-db.json";
import { FacultyData } from "@/app/_component/FacultyCardGrid";
import ProfessorCardGrid from "./_component/professorCardGrid";

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
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/faculty_header.png')" }}
      >
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative flex items-center flex-col">
          <h1 className="text-[5.5rem] font-bold pt-20">{facultyName}</h1>
          <p className="mt-1 font-bold text-2xl font-serif tracking-tight">
            {facultyData.englishFacultyName}
          </p>
          <p className="mt-10 font-normal max-w-2xl mb-10">
            {facultyData.facultyDescription}
          </p>
        </div>
      </div>
      <ProfessorCardGrid facultyKey={facultyData.SK} />
    </>
  );
};

export default FacultyPage;
