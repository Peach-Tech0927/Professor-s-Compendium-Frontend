import ProfessorCard from "@/components/professorCard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar children={undefined} />
      <div className="flex items-center flex-col mt-20">
        <h1 className="text-5xl font-bold">成蹊大学教授図鑑</h1>
        <p className="mt-3">SEIKEI UNIVERSITY PROFESSOR CATALOG</p>
      </div>
      <ProfessorCard />
    </>
  );
}
