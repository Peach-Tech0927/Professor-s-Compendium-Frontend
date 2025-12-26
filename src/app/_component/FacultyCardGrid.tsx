import Link from "next/link";
import FacultyCard from "./FacultyCard";
import { queryByPK } from "@/lib/dynamodb";
//import mockData from "@/data/mock-db.json";

export type FacultyData = {
  PK: string;
  SK: string;
  facultyName: string;
  englishFacultyName: string;
  facultyDescription: string;
  FacultyImage: string;
  departments: Array<{
    name: string;
    englishName: string;
  }>;
};

const FacultyCardGrid = async()=>{
  const allFaculties = (await queryByPK("FACULTIES"))as FacultyData[]| undefined;


  const getFacultyColor = (facultyName: string): string => {
    const colorMap: { [key: string]: string } = {
      経済学部: "#5BA7E5",
      経営学部: "#7B59A3",
      法学部: "#9CC715",
      文学部: "#E88E91",
      国際共創学部: "#C62F3E",
      理工学部: "#F4A000",
    };
    return colorMap[facultyName] || "#5BA7E5";
  };


if (!allFaculties || allFaculties.length === 0) {
  return (
      <div className="container mx-auto px-4 py-8">
        <p>学部情報が見つかりませんでした。</p>
      </div>
    );
}

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allFaculties.map((faculty) => (
          <Link
            href={`/faculty/${encodeURIComponent(faculty.facultyName)}`}
            key={faculty.facultyName}
          >
            <FacultyCard
              key={faculty.facultyName}
              facultyName={faculty.facultyName}
              facultyDescription={faculty.facultyDescription}
              FacultyImage={faculty.FacultyImage}
              departments={faculty.departments}
              cardColor={getFacultyColor(faculty.facultyName)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};


export default FacultyCardGrid;