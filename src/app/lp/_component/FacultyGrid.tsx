import FacultyCard from "./FacultyCard"
import mockData from "@/data/mock-db.json"

const facultyData = mockData.filter(item => item.PK === "FACULTIES")

export default function FacultyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[88px] md:gap-y-6 max-w-6xl mx-auto p-6">
      {facultyData.map((faculty, index) => (
        <FacultyCard
          key={faculty.SK} // indexではなくSKを使用（より適切）
          facultyName={faculty.facultyName}
          facultyDescription={faculty.facultyDescription}
          FacultyImage={faculty.FacultyImage}
          departments={faculty.departments}
        />
      ))}
    </div>
  )
}