import ProfessorCard from "@/components/professorCard";
import mockData from '@/data/mock-db.json'

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
}

export default function ProfessorCardGrid() {
    const professorData = mockData.filter((item: { PK: string; SK: string }) => 
        item.PK.startsWith("FACULTY#") && item.SK.startsWith("PROF#")) as ProfessorData[]
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {professorData.map((professor) => (
          <ProfessorCard 
            key={professor.SK}
            professorName={professor.professorName}
            professorNameRoma={professor.yomigana}
            department={professor.department}
            researchTheme={professor.researchTheme}
            officeLocation={professor.officeLocation}
          />    
        ))}
      </div>
    </div>
  );
}