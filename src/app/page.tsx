import { MenuIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <MenuIcon />
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-5xl font-bold">成蹊大学教授図鑑</h1>
        <p className="mt-3">SEIKEI UNIVERSITY PROFESSOR CATALOG</p>
      </div>
    </>
  );
}
