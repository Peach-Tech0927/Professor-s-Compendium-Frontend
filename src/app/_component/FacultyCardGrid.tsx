import Link from "next/link";
import FacultyCard from "./FacultyCard";
import mockData from "@/data/mock-db.json";

type Department = {
  name: string;
  englishName: string;
};

export type FacultyData = {
  PK: string;
  SK: string;
  facultyName: string;
  englishFacultyName: string;
  facultyDescription: string;
  FacultyImage: string;
  departments: Department[];
};

export default function FacultyCardGrid() {
  const facultyData = mockData.filter(
    (item: { PK: string; facultyName?: string; facultyDescription?: string }) =>
      item.PK === "FACULTIES" && item.facultyName && item.facultyDescription
  ) as FacultyData[];

  // 学部ごとの色マッピング
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facultyData.map((faculty) => (
          <Link
            href={`/faculty/${faculty.facultyName}`}
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
}
