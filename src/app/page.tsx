import ProfessorCard from "@/components/professorCard";
import {Button} from "@/components/ui/button"
import { ChevronDown } from "lucide-react";
import FacultyCard from "./_component/FacultyCard";

export default function Home() {
  return (
    <>
      <div className="flex items-center content-center flex-col mt-20">
        <h1 className="text-5xl font-bold">成蹊大学教授図鑑</h1>
        <p className="mt-3">SEIKEI UNIVERSITY PROFESSOR CATALOG</p>
      </div>
      <div className="min-h-screen py-12">
      <div className="container mx-auto">
        <FacultyCard 
          facultyName="経済学部"
          facultyDescription="現代社会の経済を多角的に学ぶ。"
          FacultyImage="https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop"
          departments={[
            {
              name: "経済経営学科",
              englishName: "Department of Economics and Management"
            },
            {
              name: "経済ファイナンス学科",
              englishName: "Department of Economics and Finance"
            },
            {
              name: "経済マネジメント学科",
              englishName: "Department of Economics and Management"
            },
            {
              name: "経済経済学科",
              englishName: "Department of Economics and Management"
            }
          ]}
        />
      </div>
    </div>
     　<Button
        variant="outline"
        className="relative w-64 h-14 bg-[#D6EFF9] text-black rounded-sm shadow-md">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">経済学部</span>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2"/>
      </Button>
    </>
  );
}
