import ProfessorCard from "@/components/professorCard";

export default function Home() {
  return (
    <div>
      <div className="flex items-center content-center flex-col mt-20">
        <h1 className="text-5xl font-bold">成蹊大学教授図鑑</h1>
        <p className="mt-3">SEIKEI UNIVERSITY PROFESSOR CATALOG</p>
      </div>
      <ProfessorCard />
    </div>
  );
}
