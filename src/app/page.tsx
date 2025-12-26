import FacultyCardGrid from "./_component/FacultyCardGrid";
import Footer from "./_component/Footer";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="flex items-center content-center flex-col mt-20">
          <h1 className="text-5xl font-bold">成蹊大学教授図鑑</h1>
          <p className="mt-3">SEIKEI UNIVERSITY PROFESSOR CATALOG</p>
        </div>
        <FacultyCardGrid />
      </div>
      <Footer />
    </div>
  );
}
